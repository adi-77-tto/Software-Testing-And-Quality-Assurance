function login(username, password) {
    if (username === "" || password === "") {
        return "Empty Fields";
    }
    if (username === "admin" && password === "1234") {
        return "Login Successful";
    }
    return "Invalid Credentials";
}

module.exports = login;