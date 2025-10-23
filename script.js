// script.js

// Slider otomatis di halaman Home
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;
  slides.forEach((s, i) => s.style.display = i === slideIndex ? "block" : "none");
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 3000); // ganti gambar tiap 3 detik
}
document.addEventListener("DOMContentLoaded", function() {
  showSlides();
});

// Validasi form kontak
function validateForm() {
  const nama = document.getElementById("nama").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (nama === "" || pesan === "") {
    alert("Harap isi semua kolom!");
    return false;
  }
  alert("Pesan berhasil dikirim!");
  return true;
}
