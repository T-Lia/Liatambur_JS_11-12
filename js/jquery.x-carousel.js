(function ($) {

    $.fn.xcarousel = function () {

        var leftArrow = $('.x-carousel_control_prev');
        var rightArrow = $('.x-carousel_control_next');
        var elementsList =$('.x-carousel_list');

        var picNumber = 0;
        var picsCount = elementsList.find('li').length;

        function showPicture(num) {
            var offset = -644*num;
            elementsList.animate({left : offset + "px"}, 500);
        }

        leftArrow.on('click', function () {
            if (picNumber <= 0)
                return;

            picNumber--;
            showPicture(picNumber);
        });

        rightArrow.on('click', function () {
            picNumber++;

            if (picNumber >= picsCount)
                picNumber = 0;

            showPicture(picNumber);
        });
    };
})(jQuery);