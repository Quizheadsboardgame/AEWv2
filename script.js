// Array of image URLs
const images = [
    "https://i.postimg.cc/YCjnbML4/1.png",
    "https://i.postimg.cc/tC8WGjmn/10.png",
    "https://i.postimg.cc/KY2T45bZ/11.png",
    "https://i.postimg.cc/rmytNFz3/12.png",
    "https://i.postimg.cc/ydf3Q4Zd/13.png",
    "https://i.postimg.cc/kGB6L1Qy/14.png",
    "https://i.postimg.cc/v8N65yy2/15.png",
    "https://i.postimg.cc/qM66LFMJ/16.png",
    "https://i.postimg.cc/7ZvGQNfg/17.png",
    "https://i.postimg.cc/RZc6rnH2/18.png",
    "https://i.postimg.cc/9fbD051p/19.png",
    "https://i.postimg.cc/jSGXcNr9/2.png",
    "https://i.postimg.cc/4d3mhLST/20.png",
    "https://i.postimg.cc/L5Y5xqSC/21.png",
    "https://i.postimg.cc/zBP3wCsH/22.png",
    "https://i.postimg.cc/D09ZH2y2/23.png",
    "https://i.postimg.cc/h46ff08H/24.png",
    "https://i.postimg.cc/FHQzxsBp/25.png",
    "https://i.postimg.cc/13ct71xQ/26.png",
    "https://i.postimg.cc/PxcrvtDm/27.png",
    "https://i.postimg.cc/xjwMWQZJ/28.png",
    "https://i.postimg.cc/9QVTQpCc/29.png",
    "https://i.postimg.cc/5tLmR04t/3.png",
    "https://i.postimg.cc/L8TPY18L/30.png",
    "https://i.postimg.cc/6QbGzxRQ/31.png",
    "https://i.postimg.cc/L6FgxTqj/32.png",
    "https://i.postimg.cc/sDPQqhSq/33.png",
    "https://i.postimg.cc/htSzBt1j/34.png",
    "https://i.postimg.cc/T3CyYvtc/35.png",
    "https://i.postimg.cc/cCyC5xJd/36.png",
    "https://i.postimg.cc/3RDWB4YL/37.png",
    "https://i.postimg.cc/TPspgqML/38.png",
    "https://i.postimg.cc/D0rZ99WL/39.png",
    "https://i.postimg.cc/hjn0WBv1/4.png",
    "https://i.postimg.cc/Ghjtq1n1/40.png",
    "https://i.postimg.cc/6pj3xLQj/41.png",
    "https://i.postimg.cc/7ZY6RQqJ/42.png",
    "https://i.postimg.cc/V6MLtxWp/43.png",
    "https://i.postimg.cc/Hn9YZbKt/44.png",
    "https://i.postimg.cc/J7NzzWnB/45.png",
    "https://i.postimg.cc/tC9C1mZv/46.png",
    "https://i.postimg.cc/28TjnFnk/47.png",
    "https://i.postimg.cc/MpT65MYy/48.png",
    "https://i.postimg.cc/jSFsFx8B/49.png",
    "https://i.postimg.cc/W37wsHJL/5.png",
    "https://i.postimg.cc/CL5sVJhX/6.png",
    "https://i.postimg.cc/J4Fc7Jtn/7.png",
    "https://i.postimg.cc/SKF6Ch6b/8.png",
    "https://i.postimg.cc/vZ674B6v/9.png"
];

// To store the randomized order of images
let imageOrder = [];

// Shuffle the images and reset the order when needed
function shuffleImages() {
    imageOrder = images.slice();
    for (let i = imageOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imageOrder[i], imageOrder[j]] = [imageOrder[j], imageOrder[i]];
    }
}

// Show the next image in the shuffled order
function showNextImage() {
    if (imageOrder.length === 0) {
        shuffleImages(); // Reshuffle if all images have been shown
    }
    const nextImage = imageOrder.pop(); // Get the next image
    const imageElement = document.getElementById("randomImage");
    imageElement.src = nextImage;

    // Animation effect for click
    imageElement.classList.remove('clicked');
    void imageElement.offsetWidth; // Trigger reflow
    imageElement.classList.add('clicked');
}

// On page load, shuffle and show the first image
window.onload = function() {
    shuffleImages();
    showNextImage();
};
