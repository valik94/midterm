$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;

  // const $login = $('#login_button');
  // $login.on('click', function(event) {
  //   event.preventDefault();
  //   console.log('AAAAAAAAAAAAAAA');

  //   const email = $('#login-email').val();
  //   const password = $('#password').val();

  //   $.ajax({
  //     method: 'POST',
  //     url: '/login',
  //     data: { email: email, password: password }})
  //   .then(function(response) {

  //     if (response.status === "Success") {
  //       // res.render('dashboard')
  //       console.log(response);
  //       window.location = response.redirect;
  //     } else {
  //       // res.redirect('/')
  //       console.log(response);

  //     }
  //   });

  // });

  const $signUp = $('#signup_form')
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

  const $logout = $('#logout-button')
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

});
