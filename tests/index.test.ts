import { hello, MyString } from "../src/index";

test("hello", () => {
  const s: MyString = "world";
  expect(hello(s)).toBe("Hello, world!");
});
