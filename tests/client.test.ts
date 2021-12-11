import { Aura } from "../src/client";

describe("Aura client", () => {
  it("can be initialized with token", () => {
    const aura = new Aura("token");
    expect(aura).toBeDefined();
  });
});
