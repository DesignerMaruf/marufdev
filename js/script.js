//    Menu action on active   
$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active')
});
// MIXITUP
var mixer = mixitup('.portfolio-work-container', {
    animation: {
        duration: 400
    }
});
