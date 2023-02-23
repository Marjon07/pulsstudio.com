const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get the form input values
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const buildingType = form.querySelector('#building-type').value;
  const budget = form.querySelector('#budget').value;
  const message = form.querySelector('#message').value;

  // Compose the email body
  const subject = `New Project Inquiry: ${buildingType}`;
  const body = `Name: ${name}\nEmail: ${email}\nBuilding Type: ${buildingType}\nBudget: ${budget}\nMessage: ${message}`;

  // Compose the mailto link with the email body
  const mailtoLink = `mailto:pulsbuilds@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the default email client with the mailto link
  window.location.href = mailtoLink;
});
