


var userList = [{username: "abc@gmail.com", password: "abc"},{username: "dfg@gmail.com", password: "dfg"}
    //hard code users
];

var submit = document.getElementById('submit');
var signup = document.getElementById('signup');
var attempt = 3;

submit.onclick = function(){

    var usernameInput = document.getElementById("username").value;
    
    var passwordInput = document.getElementById("password").value;

    for (let i = 0;i < userList.length; i++) { 
        //console.log(userList[i].username + " " + userList[i].password);
        let output = "";
        if (usernameInput == userList[i].username && passwordInput == userList[i].password) {
            alert ("Logged in"); 
            return true;
        } 
    }
    attempt--;
    alert("Username or password invalid or non-existent. You have " + attempt + " attempts left.");
    if (attempt == 0) {
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        alert ("access denied");
        return false;
    }
    }


    signup.onclick = function(){
        var newUsername = document.getElementById("newUsername").value;
        // var firstname = document.getElementById("firstname").value;
        // var lastname = document.getElementById("lastname").value;
        var newPassword = document.getElementById("newPassword").value;
        var repeatPassword = document.getElementById("repeatPassword").value;
        // check if username already exists
 
//HELP NEEDED!!!! we're getting all the four alerts, why?

        for (let i = 0;i < userList.length; i++) {
        
            if (newUsername == userList[i].username) {
                alert ("Already existing user, please log in")
            } 

            if (newUsername === "") {
                alert ("Please enter a valid email address")
            }

           // else ??


            if (newPassword =! repeatPassword || newPassword === "") {
                alert ("Passwords must be the same")
            }
            // add the if for the email validation //

            else  (newPassword === repeatPassword && newPassword != "")
                alert ("You are signed up now");

    
    }
}
    
        
// add the if for the email validation //


 userList.push({username: newUsername, password: newPassword});


   // login();

//console.log(userList);


var submit = document.getElementById('submit');

//submit.onclick = function(){
 // console.log("Button is clicked");

  //check value using id for both username and password
 


//1. Name empty boxes - done

//2. Type in email


/* for (i = 0; ;i++) {
    var user = 20180924_indx.html.getElementById("username").value;
    var password = 20180924_index.html.getElementById("password").value;
}


// a) email is incorrect
//--> output: email or password is incomplete if email is incorrect/missing or password is incorrect/missing
//b) email is not part of the list
// --> output: email or password is incomplete if email is incorrect/missing or password is incorrect/missing
// c) mail is correct
// --> log in

//3. Type in password
// a) password is incorrect
//--> output: email or password is incomplete if email is incorrect/missing or password is incorrect/missing
//b) password is not part of the list
// --> output: email or password is incomplete if email is incorrect/missing or password is incorrect/missing
// c) password is correct
// --> log in

// 4. Implement a signup button
// --> if person signs up push email to userList and password to passwordList, first name to firstnameList, last name to lastnameList

//5. Limit tries

*/