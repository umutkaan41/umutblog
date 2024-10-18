document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Formun varsayılan gönderimini engeller
    const rating = document.querySelector('input[name="rating"]:checked');
    const comments = document.getElementById('comments').value;

    if (rating) {
        alert(`Puan: ${rating.value}, Yorum: ${comments}`);
    } else {
        alert('Lütfen bir puan verin.');
    }
});