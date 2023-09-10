// script.js

// Fungsi untuk mengubah warna latar belakang secara acak
function changeBackgroundColor() {
    const colors = ["#FF5733", "#FFC300", "#FF5733", "#C70039", "#900C3F"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Fungsi untuk memutar gambar ketika mouse diarahkan ke atasnya
function rotateImage() {
    const img = document.querySelector('.imgBox img');
    img.style.transform = "rotate(20deg)";
}

// Fungsi untuk mengembalikan gambar ke posisi semula saat mouse meninggalkannya
function resetImage() {
    const img = document.querySelector('.imgBox img');
    img.style.transform = "rotate(0deg)";
}

// Event listener untuk tombol "Bark"
const barkButton = document.querySelector('.bark');
barkButton.addEventListener('click', () => {
    alert("Woof woof!");
});

// Event listener untuk tombol "Change Background"
const changeBackgroundButton = document.querySelector('.change-background');
changeBackgroundButton.addEventListener('click', () => {
    changeBackgroundColor();
});

// Event listener untuk gambar
const imgBox = document.querySelector('.imgBox');
imgBox.addEventListener('mouseover', () => {
    rotateImage();
});

imgBox.addEventListener('mouseout', () => {
    resetImage();
});
