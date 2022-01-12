// Client facing scripts here
$(() => {
  const $login = $('#lgn-btn')
  $login.on('submit', function(event) {
    event.preventDefault();

    // const data = $(this).serialize();
    logIn()

  })
  function logIn() {
    return $.ajax({
      method: "POST",
      url: "api/users/login",
    });
  }

  const $signUp = $('#Signup')
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
