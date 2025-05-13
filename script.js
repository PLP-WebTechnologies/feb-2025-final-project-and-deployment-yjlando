// Example of basic form validation for contact form
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let message = document.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        alert('Message sent!');
    } else {
        alert('Please fill out all fields.');
    }
});
