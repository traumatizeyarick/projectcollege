document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider-img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }


        slides.forEach(slide => {
            slide.classList.remove('active');
        });

       
        slides[currentIndex].classList.add('active');
    }

    
    showSlide(currentIndex);

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });
});
