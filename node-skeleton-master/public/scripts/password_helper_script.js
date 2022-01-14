$(() => {

  const createPassword = function () {
    $('#passwordLength').on('input', function () {
      $('#slider_value').html(this.value);
    });

    $('#genpass').on('click', function () {
      $('#pwordLenRange').show()
      $('#pwordOptions').show()
      $('#pwordLenRange2').hide()
    })

    $('#ownpass').on('click', function () {
      $('#pwordLenRange').hide()
      $('#pwordOptions').hide()
      $('#pwordLenRange2').show()
    })

    $('#pwordSubmission').on('click', function () {
      const errors = {
        urlempty: "Sorry. You can't leave the URL field empty. Try again!",
        checkBoxesEmpty: "Sorry. You can't generate a password with all boxes unchecked. Try again!"
      }
      const url = $('#urlInput').val();
      const passwordLength = $('#passwordLength').val();
      const upperCaseVal = document.querySelector('#upperCaseCheck').checked;
      const lowerCaseVal = document.querySelector('#lowerCaseCheck').checked;
      const numberCheckVal = document.querySelector('#numbersCheck').checked;
      const symbolVal = document.querySelector('#symbolsCheck').checked;
      const organisationName = document.querySelector('#orgName').value;
      const category = document.querySelector('#catName').value;
      console.log("category ", category);

      $.ajax({
          method: 'POST', url: '/generate-password', data: {
          url: url,
          length: passwordLength,
          uppercase: upperCaseVal,
          lowercase: lowerCaseVal,
          numbers: numberCheckVal,
          symbols: symbolVal,
          organisationName: organisationName,
          category: category,
        }
      })
    });

  }

  createPassword();
});
