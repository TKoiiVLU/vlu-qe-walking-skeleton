function login(user, pass) {
  return user === "admin" && pass === "123";
}

// Xử lý form khi chạy trên trình duyệt
if (typeof document !== "undefined") {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      const result = login(user, pass);

      document.getElementById("message").textContent = result
        ? "Đăng nhập thành công!"
        : "Sai username hoặc password!";
    });
  }
}

// Export để Jest sử dụng
if (typeof module !== "undefined") {
  module.exports = { login };
}
