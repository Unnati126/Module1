// objects in javascript contain keys (or properties) with corresponding values
const user = {
    first_name : "Sammy",
    "last_name" : "Shark",
    "age" : 25,
    "followers" : 987
    }
    // we can access properties with dot notation
    console.log(user.first_name); 
    console.log(user.age); 
    // or with square bracket notation

    //console.log(user["last_name"]);
    //console.log(user["followers"]);
    
    user.followers = 988; // we can also assign new values to object properties
    user.location = 'Pacific Ocean'; // or create new properties
    console.log(user.followers);
    console.log(user.location);