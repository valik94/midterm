// Client facing scripts here
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

})
