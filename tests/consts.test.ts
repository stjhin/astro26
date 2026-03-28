import { describe, expect, it } from "vitest";
import { HOME, LINKS, PROJECTS, SITE } from "../src/consts";

describe("site constants", () => {
  it("has required non-empty core fields", () => {
    expect(SITE.TITLE.trim().length).toBeGreaterThan(0);
    expect(SITE.DESCRIPTION.trim().length).toBeGreaterThan(0);
    expect(SITE.EMAIL).toContain("@");
    expect(SITE.URL.startsWith("https://")).toBe(true);
  });

  it("exposes page metadata for home and projects", () => {
    expect(HOME.TITLE).toBe("Home");
    expect(PROJECTS.TITLE).toBe("Projects");
    expect(HOME.DESCRIPTION.trim().length).toBeGreaterThan(0);
    expect(PROJECTS.DESCRIPTION.trim().length).toBeGreaterThan(0);
  });

  it("contains social links with secure urls", () => {
    expect(LINKS.length).toBeGreaterThan(0);
    for (const link of LINKS) {
      expect(link.NAME.trim().length).toBeGreaterThan(0);
      expect(link.HREF.startsWith("https://")).toBe(true);
    }
  });
});
