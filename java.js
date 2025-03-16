function initMap() {
    var budapest = {lat: 47.4979, lng: 19.0402};
    var map = new google.maps.Map(document.getElementById("google"), {
        zoom: 12,
        center: budapest
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#carouselExample");
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 3000,
            wrap: true
        });
    }
});
