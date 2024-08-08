  document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Form validation
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var course = document.getElementById('course').value;
    var message = document.getElementById('message').value;
    var price = document.getElementById('price').value;
    if(fname && lname && email && phone && course && message&&price) {
        alert('Form submitted successfully!');
        // You can add your form submission logic here (e.g., sending the data to a server)
    } else {
        alert('Please fill in all the fields.');
    }
}); 