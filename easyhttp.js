function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// GET METHOD
easyHTTP.prototype.get = function(url, callback) {
    this.http.open("GET", url, true);

    //Arrow function version
    // this.http.onload => () {
    //     if(this.http.status === 200){ 

    //     }
    // }
    
    //ES5 version
    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200){ 
            callback(null, self.http.responseText);
        } else {
            callback("Error: " + self.http.status)
        }
    }
    this.http.send();
}


// POST METHOD
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open("POST", url, true);
    this.http.setRequestHeader("Content-type", "application/json")

    let self = this;
    this.http.onload = function() {
       callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}


// PUT METHOD
easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open("PUT", url, true);
    this.http.setRequestHeader("Content-type", "application/json")

    let self = this;
    this.http.onload = function() {
       callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

// DELETE METHOD //
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open("DELETE", url, true);

    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200){ 
            callback(null, "Post deleted");
        } else {
            callback("Error: " + self.http.status)
        }
    }
    this.http.send();
}