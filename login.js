function login(username, password) {
  return username === "admin" && password === "123";
}


function validateInput(input) {
  return input && input.trim() !== "";
}