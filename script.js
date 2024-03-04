var downloadCVLink = document.getElementById('downloadCV');

// Menambahkan event listener untuk mendeteksi klik pada tautan CV
downloadCVLink.addEventListener('click', function(event) {
    // Mencegah tindakan default dari tautan (mengarahkan ke file PDF)
    event.preventDefault();

    // Menampilkan alert
    alert('Apakah anda ingin melihat CV saya?');

    // Mengarahkan ke file PDF
    window.location.href = 'CV_.pdf';
});