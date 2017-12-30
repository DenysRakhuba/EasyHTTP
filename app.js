const http = new easyHTTP();

// //Get Posts //
// http.get("https://jsonplaceholder.typicode.com/posts",
//     function(err, posts) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(posts);
//         }
// })

// //Get single post // 
// http.get("https://jsonplaceholder.typicode.com/posts/1",
//     function(err, post) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(post);
//         }
// })

// Create Data //
const data = {
    title: "Custom post",
    body: "Custom text"
}

// Create Post //
// http.post("https://jsonplaceholder.typicode.com/posts/", data, function(err,post) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(post);
//     }
// })


// UPDATE Post // PUT //
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(err,post) {
//     if (err) {
//             console.log(err)
//         } else {
//             console.log(post);
//         }
// })

// DELETE //
http.delete("https://jsonplaceholder.typicode.com/posts/1",
    function(err, post) {
        if (err) {
            console.log(err)
        } else {
            console.log(post);
        }
})