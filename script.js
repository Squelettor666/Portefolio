const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // empêche le rechargement
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            message.style.display = 'block'; // montre le message
            form.reset(); // réinitialise le formulaire
        } else {
            response.json().then(data => {
                message.textContent = "Une erreur est survenue, veuillez réessayer.";
                message.style.display = 'block';
            });
        }
    }).catch(error => {
        message.textContent = "Une erreur est survenue, veuillez réessayer.";
        message.style.display = 'block';
    });
});
