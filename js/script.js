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

//$('.someBlock').preloader({
//
//    // loading text
//    text: 'Loading...',
//
//    // from 0 to 100 
//    percent: '99.5',
//
//    // duration in ms
//    duration: '300',
//
//    // z-index property
//    zIndex: '999999999999999999',
//
//    // sets relative position to preloader's parent
//    setRelative: false,
//});
