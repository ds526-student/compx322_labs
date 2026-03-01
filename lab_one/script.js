const nextImage = document.getElementById("nextImage");
const moreInfo = document.getElementById("moreInfo");
const image = document.getElementById("image");
const info = document.getElementById("info");

let currentImageIndex = 0;

nextImage.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % 4;

    info.textContent = "";
    
    if (currentImageIndex === 0) {
        image.src = "assets/Auckland.jpeg";
    } else if (currentImageIndex === 1) {
        image.src = "assets/CathedralCove.jpeg";
    } else if (currentImageIndex === 2) {
        image.src = "assets/Hobbiton.jpeg";
    } else if (currentImageIndex === 3) {
        image.src = "assets/Ruapehu.jpeg";
    }
});

moreInfo.addEventListener("click", () => {
    if (currentImageIndex === 0) {
        info.textContent = "Auckland is the largest city in New Zealand, known for its vibrant culture and stunning harbor views.";
    } else if (currentImageIndex === 1) {
        info.textContent = "Cathedral Cove is a picturesque beach located on the Coromandel Peninsula, famous for its natural rock formations.";
    } else if (currentImageIndex === 2) {
        info.textContent = "Hobbiton is a movie set located in Matamata, where the Lord of the Rings and The Hobbit films were shot.";
    } else if (currentImageIndex === 3) {
        info.textContent = "Mount Ruapehu is an active stratovolcano located in the central North Island, popular for skiing and hiking.";
    }
});