function goToSVGMap() {
    window.location.href = "Frontend/svgmap.html";
}
function goToPlaces(){
    window.location.href = "krl.html";
}
function goToRajasthan(){
    window.location.href="rajsthn_1.html";
}
function goToSikkim(){
    window.location.href ="skm.html";
}
const options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    
    arrowShape: {
        x0: 1,
        x1: 58,
        y1: 62,
        x2: 55,
        y2: 48,
        x3: 18
    }
};
function setBgPosition(slide, index) {
    const x = -(slide.target + flkty.x) / 3;
    slides[index].style.backgroundPosition = `${x}px`;
}

const carousel = document.querySelector('[carousel]');
const slides = Array.from(document.getElementsByClassName('carousel-cell'));
const flkty = new Flickity(carousel, options);

flkty.on('scroll', () => {
    flkty.slides.forEach(setBgPosition);
});

