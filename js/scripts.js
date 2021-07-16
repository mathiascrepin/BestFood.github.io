$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $('#carouselBoutton').children('span').removeClass('fa-pause');
            $('#carouselBoutton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $('#carouselBoutton').children('span').removeClass('fa-play');
            $('#carouselBoutton').children('span').addClass('fa-pause');
        }
    });
    $("#loginModalToggle").click(function(){
        $("#loginModal").modal('toggle');
    })
    $("#reserveModalToggole").click(function() {
        $("#reserveModal").modal('toggle');
    })
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});