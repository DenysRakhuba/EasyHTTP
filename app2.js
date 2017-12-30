const http = new easyHTTP;

// GET USERS
http.get("https://jsonplaceholder.typicode.com/users")
    .then(data => console.log(data))
    .catch(err => console.log(err))


const data = {
    name: "Den",
    username: "Mantebose",
    email: "email@mailer.com"
}

http.post("https://jsonplaceholder.typicode.com/users", data)
    .then(data => console.log(data))
    .catch(err => console.log(err))


http.put("https://jsonplaceholder.typicode.com/users/2", data)
    .then(data => console.log(data))
    .catch(err => console.log(err))

http.delete("https://jsonplaceholder.typicode.com/users/3")
    .then(data => console.log(data))
    .catch(err => console.log(err))