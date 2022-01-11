// Client facing scripts here
$(() => {
  const $login = $('#lgn-btn')
  $login.on('submit', function(event) {
    event.preventDefault();

    const data = $(this).serialize();
    logIn(data)

  })
  function logIn(data) {
    return $.ajax({
      method: "POST",
      url: "/login",
      data
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

})
