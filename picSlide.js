let currentSlide = 0;
function showSlide() {
    const slide = document.querySelector('.slide');
    const totalSlide = slide.children.length;
    if(index >= totalSlide) {
        currentSlide =0;
    }else if(index <0){
        currentSlide =totalSlide -1;
    }else {
        currentSlide = index;
    }
    const offset = -currentSlide*100;
    slide.computedStyleMap.transform = 0;
}

function changeImage(imagePath) {
    document.getElementById('mainImage').src = imagePath;
}