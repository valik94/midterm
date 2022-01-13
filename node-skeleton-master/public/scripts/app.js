// Client facing scripts here
let userId;
$(() => {
  const $login = $('#login-form');
  $login.on('submit', function(event) {
    event.preventDefault();
    console.log('Hello');

    const email = $('#username').val();
    const password = $('#password').val();
    // const data = $(this).serialize();
    $.ajax({ method: 'POST',
    url: '/login',
    data: { email: email, password: password }})
    .then(function(response) {

      if (response.status === "Success") {
        res.render('dashboard')
      } else {
        res.redirect('/')
      }
    });

  });

  const $signUp = $('#signup')
  $signUp.on('submit', function(event) {
    event.preventDefault();

    const data = $(this).serialize();
    signUp(data)
  })
  function signUp(data) {
    return $.ajax({
      method: "POST",
      url: "/passwords",
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
  console.log("ready")
  $("#lgn-btn").on("submit",submitForm)

  const submitForm = function(){
    console.log('Sign up clicked!');

  $.get("/api/users")
  .then(data =>{
    console.log('My data is:', data);
    renderUsers(data.users)
  });
}

const renderUsers = function(users){
  const $container = $("#lgn-btn");
  $container.empty();
  for (const user of users){
    $container.append(`<li>${user.email}</li>`);
  }
}
});
