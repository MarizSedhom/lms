function signUp() {
  var user = document.getElementById("newuser").value;
  var pwd = document.getElementById("newpwd").value;
  var isAdmin = document.getElementById("adminCheck").checked; // Get the state of the checkbox

  // Store user data as an object
  var userData = {
      password: pwd,
      type: isAdmin ? "admin" : "user" // If checkbox is checked, user type is "admin", otherwise "user"
  };

  // Convert object to string and store in localStorage
  localStorage.setItem(user, JSON.stringify(userData));

  var curruser = document.getElementById("newuser").value;
  localStorage.setItem("currentUser", curruser);
  window.location.href = "home.html";
}
function login() {
  var user = document.getElementById("username").value;
  var pwd = document.getElementById("pwd").value;
  var isAdmin = document.getElementById("adminCheck").checked; // Get the state of the checkbox
  console.log(isAdmin)
  // Get user data from localStorage and convert back to object
  var storedData = JSON.parse(localStorage.getItem(user));
  var storedPwd = storedData ? storedData.password : null;
  console.log(storedPwd)
  var userType = storedData ? storedData.type : null;
  console.log(userType)
  //var storedPwd = localStorage.getItem(user);
  
  if(pwd == storedPwd && ((isAdmin && userType == "admin") || (!isAdmin && userType == "user"))){
      console.log("is admin")
      localStorage.setItem("currentUser", user); // Store the username of the logged-in user
      localStorage.setItem("userType", userType); // Store the type of the logged-in user
      window.location.href = "home.html"; // Redirect to home page
  } else {
      alert("Login failed");
  }
}
  
  function showLogin() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
  }
  
  function showSignUp() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
  }