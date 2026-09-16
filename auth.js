function login(user, pass) {
  return user === "admin" && pass === "123";
}

module.exports = { login };
