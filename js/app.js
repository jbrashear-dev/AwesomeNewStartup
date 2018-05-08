$('document').ready(function() {
  let url = "https://randomuser.me/api/?results=12";
  let photoSmall;
  let firstName;
  let lastName;
  let email;
  let cell;
  let streetAddress;
  let city;
  let state;
  let birthday;

$('.modal').hide();
  function displayEmployees(data){
    let employeeHTML = '<ul>';
    $.each(data.results, function(i, employee){
      photoSmall = employee.picture.thumbnail;
      firstName = employee.name.first;
      lastName = employee.name.last;
      email = employee.email;
      city = employee.location.city;
      state = employee.location.state;
      employeeHTML += '<li>' + '<img class="smallImg" src='+ photoSmall +'><br><br><span class="name" id="name">'
      + firstName + ' ' + lastName +'</span>'
      + '<br> <span>' + email +'</span> <br>'
      employeeHTML += '<span>' + city + ' ' + state + '</span><br><br></li>';
    })
    employeeHTML += '</ul>';
    $('.employeeData').html(employeeHTML);

    $('li').click(function(evt){
      $('#employeeMain').css({'opacity' :.25});
      let index = ($('li').index(this));
      let employeeFocus = data.results[index];
      let birthDate = employeeFocus.dob.split(' ')[0];
      let modalHTML = '<img class="largeImg" src='+employeeFocus.picture.large+'></li>'
      modalHTML += '<br><span class="name">' + employeeFocus.name.first + ' ' + employeeFocus.name.last + '</span><br>'
                + '<span>' + employeeFocus.email + '</span><br><span>' + employeeFocus.location.city + '</span><br>'
                + '<span style="border-top: 2px solid lightgrey;"><br>' + employeeFocus.phone + '</span><br>'
                + '<span>' + employeeFocus.location.street + '</span><br>'
                + '<span>' + 'Birthday:' + birthDate + '</span>'
                + '<span class="close" id="close">&times</span>';

      $('.modal').html(modalHTML);
      $('.modal').show();
      $('#close').click(function(evt){
        $('.modal').hide('slow');
        $('#employeeMain').css({'opacity' :1});
      });
    });

  }
  $.getJSON(url, displayEmployees)
}); // end of ready
