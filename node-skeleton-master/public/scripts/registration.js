  const $signUp = $("#signup-form");
  $signUp.on("submit", function (event) {
    event.preventDefault();

    const data = $(this).serialize();
    console.log("Data", data);
    signUp(data);
  });
  function signUp(data) {
    return $.ajax({
      method: "POST",
      url: "/users",
      data,
    });
  }