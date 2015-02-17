$(function() {
  $('form#address_information').submit(function(event) {


    var inputFirstName = $('#first_name').val();
    var inputLastName = $('#last_name').val();
    var inputPhoneNumber = $('#phone_number').val();
    var inputStreet = $('#street').val();
    var inputCity = $('#city').val();
    var inputState = $('#state').val();
    var inputZip = $('#zip_code').val();

    var newContact = {
      firstName: inputFirstName,
      lastName: inputLastName,
      phoneNumber: inputPhoneNumber,
      street: inputStreet,
      city: inputCity,
      state: inputState,
      zip: inputZip,
      fullName: function(){
        return this.firstName + " " + this.lastName;
      },
      fullAddress: function() {
        return this.street + ' ' + this.city + ', ' + this.state + ' ' + this.zip;
      }
    }


    $('#contacts').append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $('.contact').last().click(function() {
      $('#contact-card').show();
      $('#contact-full-name').text(newContact.fullName());
      $('#contact-phone-number').text(newContact.phoneNumber);
      $('#contact-address').text(newContact.fullAddress());
    });

    event.preventDefault();
  });
});
