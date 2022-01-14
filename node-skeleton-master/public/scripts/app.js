// Client facing scripts here
// let userId;
$(() => {
  const $login = $('#login-form');
  $login.on('submit', function(event) {
    event.preventDefault();
    console.log('AAAAAAAAAAAAAAA');

    const email = $('#username').val();
    const password = $('#password').val();
    // const data = $(this).serialize();
    $.ajax({ method: 'POST',
    url: '/login',
    data: { email: email, password: password }})
    .then(function(response) {

      if (response.status === "Success") {
        // res.render('dashboard')
        console.log(response);
        window.location = response.redirect;
      } else {
        // res.redirect('/')
        console.log(response);

      }
    });

  });

  const $signUp = $('#signup-form')
  $signUp.on('submit', function(event) {
    event.preventDefault();

    const data = $(this).serialize();
    console.log("Data", data);
    signUp(data)
  })
  function signUp(data) {
    return $.ajax({
      method: "POST",
      url: "/users",
      data
    });
  }

  const $logout = $('#lgout-btn')
  $logout.on('submit', function(event) {
    event.preventDefault();
    logOut();
  })
  function logOut() {
    return $.ajax({
      method: "POST",
      url: "/logout",
    })
  }

  const $generatePassword = $('#generate')
  $generatePassword.on('submit', function(event) {
    event.preventDefault();

    const data = $(this).serialize();
    generatePassword();
  })
  function generatePassword(data) {
    return $.ajax({
      method: "POST",
      url: "/",
      data
    });
  }

   //TEST CODE - VAL
<<<<<<< Updated upstream
  console.log("ready")
  $("#lgn-btn").on("submit",submitForm)
=======
//   console.log("ready")
//   $("#Signup").on("submit",submitForm) //Signup button
//   $("#lgn-btn").on("submit", login) //login button

//   const Login = function(){
//     console.log('Login clicked!');

//   $.get("/api/users/:id")
//   .then(data =>{
//     console.log('My data is:', data);
//     renderUsers(data.users)
//   });
// }
>>>>>>> Stashed changes

//   const submitForm = function(){
//     console.log('Sign up clicked!');

//   $.get("/api/users")
//   .then(data =>{
//     console.log('My data is:', data);
//     renderUsers(data.users)
//   });
// }

// const renderUsers = function(users){
//   const $container = $("#lgn-btn");
//   $container.empty();
//   for (const user of users){
//     $container.append(`<li>${user.email}</li>`);
//   }
// }
});
