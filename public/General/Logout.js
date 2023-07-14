function logout() {
    localStorage.clear();
    location.href = "/public/auth/login.html";
}