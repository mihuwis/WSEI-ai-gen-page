document.addEventListener("DOMContentLoaded", function () {
    // Animacja rozwijania nagłówka
    const header = document.getElementById("changing-header");

    // Cykl zmiany tła w nagłówku
    let currentColor = 0;
    const colors = ["red", "blue", "green"];

    setInterval(function () {
        currentColor = (currentColor + 1) % colors.length;
        header.style.color = colors[currentColor];
    }, 5000);

    // Ustawienie obiektu 3D na canvas
    const canvas = document.getElementById("canvas3d");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 200, 200);

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(150, 150);
    ctx.lineTo(50, 150);
    ctx.closePath();
    ctx.fill();

    // Interaktywna galeria
    const galleryImages = document.querySelectorAll(".gallery-image");
    const changeImageButton = document.getElementById("change-image");

    let currentImageIndex = 0;

    changeImageButton.addEventListener("click", function () {
        galleryImages[currentImageIndex].style.opacity = 0;

        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;

        setTimeout(function () {
            galleryImages[currentImageIndex].style.opacity = 1;
        }, 500);
    });
});
