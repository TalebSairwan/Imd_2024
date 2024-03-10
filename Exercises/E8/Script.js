document.addEventListener("DOMContentLoaded", function () {
    const ImageDog = document.getElementById("DogImg");
    const reloadButton = document.getElementById("SupriseButton");

    async function fetchRandomDog() {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            return data.message;
        } catch (error) {
            console.error("Error fetching dog picture:", error);
        }
    }

    async function updateDogPicture() {
        const imageUrl = await fetchRandomDog();
        dogImage.src = imageUrl;
    }

    updateDogPicture();

    reloadButton.addEventListener("click", updateDogPicture);
});
