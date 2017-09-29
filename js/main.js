(function ($) {
    $(document).ready(function(){
        // $('.single-item').slick();
        $('#scroll_top_btn').click(function() {
            $('html, body').animate({scrollTop: 0},500);
            return false;
        });

        $(".single-item").slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay:false,
            arrows:false,
            centerPadding: '0px'
        });

        // $('.single-item').slick({
        //     dots: true,
        //     infinite: false,
        //     speed: 300,
        //     slidesToShow: 4,
        //     slidesToScroll: 4,
        //     responsive: [
        //         {
        //             breakpoint: 1024,
        //             settings: {
        //                 slidesToShow: 3,
        //                 slidesToScroll: 3,
        //                 infinite: true,
        //                 dots: true
        //             }
        //         },
        //         {
        //             breakpoint: 600,
        //             settings: {
        //                 slidesToShow: 2,
        //                 slidesToScroll: 2
        //             }
        //         },
        //         {
        //             breakpoint: 480,
        //             settings: {
        //                 slidesToShow: 1,
        //                 slidesToScroll: 1
        //             }
        //         }
        //     ]
        // });


    });

}(jQuery));