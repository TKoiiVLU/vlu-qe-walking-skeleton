const { login } = require("./auth");

describe("login()", () => {
  test("trả về true khi username và password chính xác", () => {
    expect(login("admin", "123")).toBe(true);
  });

  test("trả về false khi username sai", () => {
    expect(login("user", "123")).toBe(false);
  });

  test("trả về false khi password sai", () => {
    expect(login("admin", "456")).toBe(false);
  });

  test("trả về false khi cả username và password sai", () => {
    expect(login("user", "456")).toBe(false);
  });
});
