const sections = $('section');
const display = $('.maincontent');
const sideMenu = $('.dots__block');
const menuItems = sideMenu.find('.dots__item');

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass('active');

const countSectionPosition = sectionEq => { // Функция для рассчета позиции секции
    const position = sectionEq * -100;
    if (isNaN(position)) {
        console.error('передано неверное значение позиции(countSectionPosition)');
        return 0;
    }
    return position;
};

const changeMenuTheme = sectionEq => { // Функция для смены темы бокового меню
    const currentSection = sections.eq(sectionEq);
    const menuTheme = currentSection.attr('data-sidemenu-theme');

    if (menuTheme == 'black') {
        sideMenu.addClass('dots__block--black');
    } else {
        sideMenu.removeClass('dots__block--black');
        sideMenu.removeClass('dots__block--white');
    } if (menuTheme == 'white') {
        sideMenu.addClass('dots__block--white');
    }
};

const resetActiveClassForItem = (items, itemEq, activeClass) => { // Функция для смены классов
    items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
}

const perfomTransition = sectionEq => { // Общая функция для скролла
    if (inScroll) return;

    const transitionIver = 400;
    const mouseInertiaOver = 300;

    inScroll = true;
    const position = countSectionPosition(sectionEq);

    changeMenuTheme(sectionEq);

    display.css({
        transform: `translateY(${position}%)`
    });

    resetActiveClassForItem(sections, sectionEq, 'active');

    setTimeout(() => {
        inScroll = false;
        resetActiveClassForItem(menuItems, sectionEq, 'dots__item--active');
    }, transitionIver + mouseInertiaOver);
    };

const viewpotrScroller = () => { // Функция скролла
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    return {
        next() {
            if (nextSection.length) {
                perfomTransition(nextSection.index());
            };
        },
        prev() {
            if (prevSection.length) {
                perfomTransition(prevSection.index());
            };
        },
    };
};



$(window).on('wheel', e => { // Обработчик события скролла
    const deltaY = e.originalEvent.deltaY;
    const scroller = viewpotrScroller();

    if(deltaY > 0) {
        //next
        scroller.next();
    }
    if(deltaY < 0) {
        //prev
        scroller.prev();
    };
});

$(window).on('keydown', e => { // Обработчик события использования клавиш ↓ и ↑
    const tagName = e.target.tagName.toLowerCase();
    const userTypingInInputs = tagName == 'input' || tagName == 'textarea';
    const scroller = viewpotrScroller();

    if (userTypingInInputs) return;

    switch (e.keyCode) { 
        case 38: //prev
            scroller.prev();
            break;
    
        case 40: //next
            scroller.next();
            break
    }
});

$('.wrapper').on('touchmove', e => e.preventDefault());

$('[data-scroll-to]').click(e => { // Обработчик события клика по пункту меню
    e.preventDefault();

    const $there = $(e.currentTarget);
    const target = $there.attr('data-scroll-to');
    const reqSection = $(`[data-section-id=${target}]`)

    perfomTransition(reqSection.index());
});

if(isMobile) {
    $("body").swipe({ // функция свайпа для мобильных устройств // https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
        swipe: function (event, direction) {
            const scroller = viewpotrScroller();
            let scrollDirection = '';
    
            if (direction == 'up') scrollDirection = 'next';
            if (direction == 'down') scrollDirection = 'prev';
            
            scroller[scrollDirection]();
        },
    });
}


  
