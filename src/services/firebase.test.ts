import { describe, expect, it } from "vitest";
import { db } from "../lib/firebase.config";
import { userEmailExistsInDB } from "./firebase";

describe("testing the firebase services functions", () => {
  it("returns false for this value", async () => {
    const value = await userEmailExistsInDB("random");
    expect(value).toBe(false);
  });
  it("returns true for email that was in seed", async () => {
    const value = await userEmailExistsInDB("steven@test.com");
    expect(value).toBe(true);
  });
  it("returns true for email that was in seed", async () => {
    const value = await userEmailExistsInDB("steve@test.com");
    expect(value).toBe(true);
  });
});
