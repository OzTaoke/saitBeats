 // меню
 const open = document.querySelector('#open');
 const body = document.body;

 open.addEventListener( 'click', e => {
     const overlayElement = document.createElement("div");
     overlayElement.classList.add('humburger__menu');

     const conteinerElement = document.createElement('ul');
     conteinerElement.classList.add('humburger__menu-block');

     const contentElement1 = document.createElement('li');
     contentElement1.classList.add('humburger__menu-item');

     const linkElement1 = document.createElement('a');
     linkElement1.classList.add('humburger__menu-link');
     linkElement1.innerHTML = 'О нас';

     const contentElement2 = document.createElement('li');
     contentElement2.classList.add('humburger__menu-item');

     const linkElement2 = document.createElement('a');
     linkElement2.classList.add('humburger__menu-link');
     linkElement2.innerHTML = 'Наушники';


     const contentElement3 = document.createElement('li');
     contentElement3.classList.add('humburger__menu-item');

     const linkElement3 = document.createElement('a');
     linkElement3.classList.add('humburger__menu-link');
     linkElement3.innerHTML = 'Команда';

     const contentElement4 = document.createElement('li');
     contentElement4.classList.add('humburger__menu-item');

     const linkElement4 = document.createElement('a');
     linkElement4.classList.add('humburger__menu-link');
     linkElement4.innerHTML = 'Цвета';


     const contentElement5 = document.createElement('li');
     contentElement5.classList.add('humburger__menu-item');

     const linkElement5 = document.createElement('a');
     linkElement5.classList.add('humburger__menu-link');
     linkElement5.innerHTML = 'Отзывы';


     const contentElement6 = document.createElement('li');
     contentElement6.classList.add('humburger__menu-item');

     const linkElement6 = document.createElement('a');
     linkElement6.classList.add('humburger__menu-link');
     linkElement6.innerHTML = 'Как мы работаем';

     const contentElement7 = document.createElement('li');
     contentElement7.classList.add('humburger__menu-item');

     const linkElement7 = document.createElement('a');
     linkElement7.classList.add('humburger__menu-link');
     linkElement7.innerHTML = 'Контакты';


     const closeElement = document.createElement('div');
     closeElement.classList.add('humburger__closer');

     closeElement.addEventListener('click', e => {
         body.removeChild(overlayElement);
         body.classList.remove('body__closed');
     });

     linkElement1.addEventListener('click', e => {
        body.removeChild(overlayElement);
        body.classList.remove('body__closed');
     });

     linkElement2.addEventListener('click', e => {
        body.removeChild(overlayElement);
        body.classList.remove('body__closed');
    });

    linkElement3.addEventListener('click', e => {
        body.removeChild(overlayElement);
        body.classList.remove('body__closed');
    });

    linkElement4.addEventListener('click', e => {
        body.removeChild(overlayElement);
        body.classList.remove('body__closed');
    });

    linkElement5.addEventListener('click', e => {
        body.removeChild(overlayElement);
        body.classList.remove('body__closed');
    });

    linkElement6.addEventListener('click', e => {
        body.removeChild(overlayElement);
        body.classList.remove('body__closed');
    });

    linkElement7.addEventListener('click', e => {
        body.removeChild(overlayElement);
        body.classList.remove('body__closed');
    });


     overlayElement.appendChild(conteinerElement);
     conteinerElement.appendChild(contentElement1);
     conteinerElement.appendChild(contentElement2);
     conteinerElement.appendChild(contentElement3);
     conteinerElement.appendChild(contentElement4);
     conteinerElement.appendChild(contentElement5);
     conteinerElement.appendChild(contentElement6);
     conteinerElement.appendChild(contentElement7);
     conteinerElement.appendChild(closeElement);
     contentElement1.appendChild(linkElement1);
     contentElement2.appendChild(linkElement2);
     contentElement3.appendChild(linkElement3);
     contentElement4.appendChild(linkElement4);
     contentElement5.appendChild(linkElement5);
     contentElement6.appendChild(linkElement6);
     contentElement7.appendChild(linkElement7);
     body.appendChild(overlayElement);
     body.classList.add('body__closed');

     
 })

//  отзывы

$(document).ready(() => {

    const findBlockByAlias = alias => {
        return $('.reviews__item').filter((ndx, item) => {
            return $(item).attr("data-open") == alias
        });
    };

    $('.reviews__select-image').click (e => {
        e.preventDefault();

        const $this = $(e.currentTarget);
        const target = $this.attr('data-check');
        const itemToShow = findBlockByAlias(target);
        const curItem = $this.closest('.reviews__select-item');

        itemToShow.addClass('reviews__item--active').siblings().removeClass('reviews__item--active');
        curItem.addClass('reviews__select-item--active').siblings().removeClass('reviews__select-item--active');
    });
});


// аккордеон команда 

const openItem = item => {
    const conteinerTeam = item.closest('.team__item');
    const contentTeam = conteinerTeam.find('.team__accordion');
    const textTeam = contentTeam.find('.team__accordion-block');
    const reqHeight = textTeam.height();

    conteinerTeam.addClass('team__item--active');
    contentTeam.height(reqHeight);
};

const closeEveryItem = conteinerTeam => {
    const itemsTeam = conteinerTeam.find('.team__accordion');
    const itemConteiner = conteinerTeam.find('.team__item');

    itemConteiner.removeClass('team__item--active');
    itemsTeam.height(0); 
};

$('.team__content').click(e => {
    const $that = $(e.currentTarget);
    const conteinerTeam = $that.closest('.team__block');
    const elemConteiner = $that.closest(".team__item");

    if(elemConteiner.hasClass('team__item--active')) {
        closeEveryItem(conteinerTeam);
    } else {
        closeEveryItem(conteinerTeam);
        openItem($that);
    };
});


// const openItemColors = itemsColors => {
//     const conteinerColors = itemsColors.closest('.colors__item');
//     const contentColors = conteinerColors.find('.colors__overflow');
//     const textColors = contentColors.find('.colors__overflow-text');
//     const reqWidth = textColors.width();

//     conteinerColors.addClass('colors__item--active');
//     contentColors.width(reqWidth);
// };

// const closeEveryItemColors = conteinerColors => {
//     const itemsColors = conteinerColors.find('.colors__overflow');
//     const itemsConteinerColors = conteinerColors.find('.colors__item');

//     itemsConteinerColors.removeClass('colors__item--active');
//     itemsColors.width(0); 
// };

// $('.colors__item').click(e => {
//     const $thatColors = $(e.currentTarget);
//     const conteinerColors = $thatColors.closest('.colors__blocks');
//     const elemConteinerColors = $thatColors.closest(".colors__item");

//     if(elemConteinerColors.hasClass('colors__item--active')) {
//         closeEveryItemColors(conteinerColors);
//     } else {
//         closeEveryItemColors(conteinerColors);
//         openItemColors($thatColors);
//     };
// });



// вертикальный аккордеон

const mesureWidth = item => {
    let reqItemWidth = 0;
    const screenWidth = $(window).width();
    const container = item.closest('.colors__blocks');
    const buttonBlocks = container.find('.colors__button');
    const buttonWidth = buttonBlocks.width() * buttonBlocks.length;

    const textContainer = item.find('.colors__overflow-text');
    const paddingLeft = parseInt(textContainer.css('padding-left'));
    const paddingRight = parseInt(textContainer.css('padding-right'));

    const isTablet = window.matchMedia("(max-width: 768px)").matches;
    
    if (isTablet) {
        reqItemWidth = screenWidth - buttonWidth;
    } else {
        reqItemWidth = 400;
    } 

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingLeft - paddingRight
    }
};

const openItemColor = (item) => {
    const hiddenContent = item.find('.colors__overflow');
    const reqWidth = mesureWidth(item);
    const textBlock = item.find('.colors__overflow-text');

    item.addClass('colors__item--active');
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);
};

const closeItemColor = (conteiner) => {
    const itemColor = conteiner.find('.colors__item');
    const contentColor = conteiner.find('.colors__overflow');

    itemColor.removeClass('colors__item--active');
    contentColor.width(0);
}

$('.colors__button').on('click', (e) => {
    const $thatColors = $(e.currentTarget);
    const itemColors = $thatColors.closest('.colors__item');
    const itemOpened = itemColors.hasClass('colors__item--active');
    const conteiner = $thatColors.closest('.colors__blocks')

    if(itemOpened) {
        closeItemColor(conteiner);
    } else {
        closeItemColor(conteiner);
        openItemColor(itemColors);
    };

});

// слайдер

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

// заказ

const form = document.querySelector('#form');
const button = document.querySelector('#sendButton');
const parent = document.querySelector('#delivery');

button.addEventListener('click', e => {
        e.preventDefault();

        if (validateForm(form)) {
            let call = '';
            let pay = '';

            if(form.elements.call.checked == true) {
                call = 'Звонок не нужен';
            } else {
                call = 'Нужен звонок';
            };

            if(form.elements.selectPay.value == 'surrender') {
                pay = 'Нужна сдача';
            } else  if(form.elements.selectPay.value == 'sendButton'){
                pay = 'Оплата по карте';
            } else {
                pay = 'Оплата наличными без сдачи'
            };

            const data = {
                name: form.elements.name.value,
                phone: form.elements.phoneNumber.value,
                street: form.elements.street.value,
                houseNumber: form.elements.houseNumber.value,
                houseBildingNumber: form.elements.houseBildingNumber.value,
                apartmentNumber: form.elements.apartmentNumber.value,
                floor: form.elements.floor.value,
                comment: form.elements.commentary.value,
                call: call,
                pay: pay,
                to: 'Drakshen@mail.ru'
            };
    
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
            xhr.addEventListener('load', () => {
                if(xhr.response.status) {
                    const sentOrder = document.createElement('div');
                    sentOrder.classList.add('sent');
                    
                    const sentConteiner = document.createElement('div');
                    sentConteiner.classList.add('sent__conteiner');
            
                    const sentText = document.createElement('div');
                    sentText.classList.add('sent__text');
                    sentText.textContent = 'Сообщение отправлено';
            
                    const sentButton = document.createElement('a')
                    sentButton.classList.add('button');
                    sentButton.textContent = 'закрыть';
            
                    sentOrder.appendChild(sentConteiner);
                    sentConteiner.appendChild(sentText);
                    sentConteiner.appendChild(sentButton);
                    body.classList.add('body__closed');
                    parent.appendChild(sentOrder);

                    sentButton.addEventListener('click', e => {
                        e.preventDefault();
            
                        
                        body.classList.remove('body__closed');
                        parent.removeChild(sentOrder);
                    })
                    } else {
                        const sentOrder = document.createElement('div');
                        sentOrder.classList.add('sent');
                        
                        const sentConteiner = document.createElement('div');
                        sentConteiner.classList.add('sent__conteiner');
                
                        const sentText = document.createElement('div');
                        sentText.classList.add('sent__text');
                        sentText.textContent = 'Ошибка отправки.Попробуйте позже';
                
                        const sentButton = document.createElement('a')
                        sentButton.classList.add('button');
                        sentButton.textContent = 'закрыть';
                
                        sentOrder.appendChild(sentConteiner);
                        sentConteiner.appendChild(sentText);
                        sentConteiner.appendChild(sentButton);
                        body.classList.add('body__closed');
                        parent.appendChild(sentOrder);
    
                        sentButton.addEventListener('click', e => {
                            e.preventDefault();
                
                            
                            body.classList.remove('body__closed');
                            parent.removeChild(sentOrder);
                        })
                }

            });
            
        };   
    });

    function validateForm(form) {
        let valid = true;

        if (!validateField(form.elements.name)) {
            valid = false;
        };
        if (!validateField(form.elements.phoneNumber)) {
            valid = false;
        };
        if (!validateField(form.elements.street)) {
            valid = false;
        };
        if (!validateField(form.elements.houseNumber)) {
            valid = false;
        };
        if (!validateField(form.elements.houseBildingNumber)) {
            valid = false;
        };
        if (!validateField(form.elements.apartmentNumber)) {
            valid = false;
        };
        if (!validateField(form.elements.floor)) {
            valid = false;
        };

        return valid;
    };

    function validateField(field) {
            field.nextElementSibling.textContent = field.validationMessage;
            return field.checkValidity();
    };

    
// карта Яндекс
