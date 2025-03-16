    event.preventDefault();

     document.getElementById('contactForm').addEventListener('submit', function(event) {
const formData = new FormData(this);

    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('responseMessage').textContent = data;
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});