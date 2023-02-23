// Select the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get form field values
  const name = form.querySelector('input[name="name"]').value;
  const surname = form.querySelector('input[name="surname"]').value;
  const birthday = form.querySelector('input[name="birthday"]').value;
  const gender = form.querySelector('input[name="gender"]:checked').value;
  const location = form.querySelector('select[name="location"]').value;
  const buildingType = form.querySelector('select[name="building-type"]').value;
  const budget = form.querySelector('input[name="budget"]:checked').value;

  // Send form data to email address
  const email = 'pulsbuilds@gmail.com';
  const subject = 'New building project inquiry';
  const body = 'Name: ' + name + '\n' + 'Surname: ' + surname + '\n' + 'Birthday: ' + birthday + '\n' + 'Gender: ' + gender + '\n' + 'Location: ' + location + '\n' + 'Building type: ' + buildingType + '\n' + 'Budget: ' + budget;
  window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(body);

  // Display confirmation message
  const confirmationMsg = document.getElementById('confirmation-msg');
  confirmationMsg.style.display = 'block';
});
