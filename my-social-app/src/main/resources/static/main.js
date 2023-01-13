function getUserData(){
    fetch('http://localhost:8072/api/v1/current-user-details')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("fullname").innerHTML= data.name;
            document.getElementById("email").innerHTML= data.email;
            document.getElementById("profile-pic").src= data.picture;

  });
}