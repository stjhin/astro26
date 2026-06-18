// sync-resume.mjs — Export a Google Doc as PDF via Drive API (service account)
//
// Required env vars:
//   GOOGLE_SERVICE_ACCOUNT   JSON key for a Google service account
//   RESUME_DOC_ID            Google Doc file ID
//   RESUME_OUTPUT_PATH       Local path to write the PDF (default: public/Resume-Ju2026.pdf)

import { createSign } from "node:crypto";
import { writeFileSync } from "node:fs";

// ---------------------------------------------------------------------------
// 1. Parse inputs
// ---------------------------------------------------------------------------
const SA_JSON = process.env.GOOGLE_SERVICE_ACCOUNT;
const DOC_ID  = process.env.RESUME_DOC_ID;
const OUT     = process.env.RESUME_OUTPUT_PATH || "public/Resume-Ju2026.pdf";

if (!SA_JSON) {
  console.error("GOOGLE_SERVICE_ACCOUNT is not set");
  process.exit(1);
}
if (!DOC_ID) {
  console.error("RESUME_DOC_ID is not set");
  process.exit(1);
}

let sa;
try {
  sa = JSON.parse(SA_JSON);
} catch {
  console.error("GOOGLE_SERVICE_ACCOUNT is not valid JSON");
  process.exit(1);
}

const { client_email, private_key } = sa;
if (!client_email || !private_key) {
  console.error("Service account JSON must contain client_email and private_key");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 2. Create a JWT assertion
// ---------------------------------------------------------------------------
const now = Math.floor(Date.now() / 1000);
const header = { alg: "RS256", typ: "JWT" };
const claim = {
  iss: client_email,
  scope: "https://www.googleapis.com/auth/drive.readonly",
  aud: "https://oauth2.googleapis.com/token",
  exp: now + 3600,
  iat: now,
};

function base64url(buf) {
  return Buffer.from(buf)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

const segments = [
  base64url(JSON.stringify(header)),
  base64url(JSON.stringify(claim)),
];
const signer = createSign("RSA-SHA256");
signer.write(segments.join("."));
signer.end();
const signature = base64url(signer.sign(private_key, "base64"));
const assertion = `${segments[0]}.${segments[1]}.${signature}`;

// ---------------------------------------------------------------------------
// 3. Exchange JWT for an access token
// ---------------------------------------------------------------------------
async function getAccessToken(jwt) {
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: jwt,
  });

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token exchange failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  return data.access_token;
}

// ---------------------------------------------------------------------------
// 4. Export the Google Doc as PDF via Drive API
// ---------------------------------------------------------------------------
async function exportDocPdf(accessToken, fileId) {
  const url = `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}/export?mimeType=application/pdf`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Drive export failed (${res.status}): ${text}`);
  }

  return Buffer.from(await res.arrayBuffer());
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
try {
  console.log(`Exporting Google Doc ${DOC_ID} …`);
  const token = await getAccessToken(assertion);
  const pdf   = await exportDocPdf(token, DOC_ID);

  writeFileSync(OUT, pdf);
  console.log(`Wrote ${pdf.length} bytes → ${OUT}`);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
