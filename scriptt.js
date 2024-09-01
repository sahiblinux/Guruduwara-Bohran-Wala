// Add event listener to donate button
document.getElementById('donate-btn').addEventListener('click', function() {
    // Add your donation logic here, e.g. redirect to a payment gateway
    alert('Thank you for your donation!');
});

// Add event listener to contact form submit button
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    // Send form data to server or email
    console.log('Form submitted:', name, email, message);
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

// Add animation to text elements
var textElements = document.querySelectorAll('h2, p');
textElements.forEach(function(element) {
    element.classList.add('animate');
});