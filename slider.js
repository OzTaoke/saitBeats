const slider = $(".slider__block").bxSlider({
        pager: false,
        controls: false
    });
    
    $('.slider__pointer-item-left').click(e => {
        e.preventDefault();
        slider.goToPrevSlide();
    });
    $('.slider__pointer-item--right').click(e => {
        e.preventDefault();
        slider.goToNextSlide();
});
