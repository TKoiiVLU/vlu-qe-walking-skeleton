const { login } = require("./login");

describe("login()", () => {
  test("Trả về true khi user là admin và pass là 123", () => {
    expect(login("admin", "123")).toBe(true);
  });

  test("Trả về false khi username không đúng", () => {
    expect(login("user", "123")).toBe(false);
  });

  test("Trả về false khi password không đúng", () => {
    expect(login("admin", "456")).toBe(false);
  });

  test("Trả về false khi cả username và password đều sai", () => {
    expect(login("user", "456")).toBe(false);
  });
});
