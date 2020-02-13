(function($){    
    // Sticky menu 
    $(window).scroll(function(){
        
        // $(".navbar li > a.active").each(function(){
        //     var currentItemTitle = $(this).attr('title');
        //     var currentItem = $(this).text().toLowerCase();  
        //     // edit url anchor (# to \)  
        //     window.history.replaceState(currentItem, "", "/" + currentItem.replace(/\s/g,'-')); 
        //     // change section tittle 
        //     document.title =  currentItem             
        //     // change section meta description 
        //     var metaDescription = document.getElementsByTagName("META");
        //     if(document.title === currentItem){
        //         metaDescription[3].setAttribute("content", currentItemTitle);
        //     }            
        // })

        if ($(window).scrollTop() >= 110) {
            $('body').addClass('scrolled');
            $('.contentNav').addClass('fixed-header');
        }
        else {
            $('.contentNav').removeClass('fixed-header');
        }
    });
    
    $('.logo-light').on('click', function(){
        $('.navbar-collapse').removeClass('show');
        $('#btnMenu').attr('aria-expanded', 'false')
        $('body').removeClass('noScroll')
    })
    
    // toggleClass (show) on click list menu 
    $('.nav-link').on('click', function(){
        $('.navbar-collapse').toggleClass('show');
        // remove scroll on body if navmenu active
        $('body').toggleClass('noScroll')
        $('#btnMenu').attr('aria-expanded', 'false')
    })
    
    // remove scroll on body if navmenu active
    $('#btnMenu').on('click', function(){
        $('body').toggleClass('noScroll')
    })

    // animate scroll
    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 2000, 'swing', function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex','-1');
                        $target.focus();
                    };
                });
            }
        }
    });  

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if( isMobile.any() ) {
        $('.section.s5 .a2').removeAttr('id')
        $('.section.s5 .a2 .contact').attr('id', 'contact')
    } else {        
        $('.section.s5 .a2 .contact').removeAttr('id')
        $('.section.s5 .a2').attr('id', 'contact')
    }     
    
    // // -----------------------
    // var ctrl = new ScrollMagic.Controller();
    
    // var headerContent   = $('#campus');
    // var sectionS1_a1    = $('.section.s1 .a1');
    // var sectionS1_a2    = $('.section.s1 .a2');
    // var sectionS1_a3    = $('.section.s1 .a3');
    // var sectionS2       = $('.section.s2');
    // var sectionS3       = $('.section.s3');
    // var sectionS4_a1    = $('.section.s4 .a1');
    // var sectionS4_a2    = $('.section.s4 .a2');
    // var sectionS5_a1    = $('.section.s5 .a1');
    // var sectionS5_a2    = $('.section.s5 .a2');
    // var footer          = $('.footer');    
    
    // // Create scenes for header (start 1)
    // $(headerContent).each(function(i) {

    //     var $img_home1 = $('#campus .banner .pic img')
    //     var $img_home2 = $('#campus .picBg img')
    //     // -----------------------------------
    //     TweenMax.set($img_home1, {scale:0.8})
    //     TweenMax.set($img_home2, {scale:0.8})

    //     var tl_1 = new TimelineMax()

    //     // animations 
    //     .to(headerContent.find('.banner .pic'), 3, {autoAlpha: 1, display:"block"}, '#start')
    //     .to(headerContent.find('.resum .title'), 1, {autoAlpha: 1, top: 0}, '0.5')
    //     .to(headerContent.find('.separate'), 0.5, {autoAlpha: 1, top: 0}, '0.9')
    //     .to(headerContent.find('.resum .para'), 0.5, {autoAlpha: 1, top: 0}, '1.4')
    //     .to(headerContent.find('.picBg img'), 0.8, {autoAlpha: 1, scale: 1}, '1.4')
    //     .to(headerContent.find('.banner .pic img'), 3, {autoAlpha: 1, display:"block", scale: 1}, '#start')
    //     .to(headerContent.find('.top .logo-full'), 0.8, {autoAlpha: 1}, '0.7')
    //     .to(headerContent.find('.top .navbar'), 1, {autoAlpha: 1}, '1.5')

    //     // -----------------------------------
    
    //     new ScrollMagic.Scene({
    //         triggerElement: this,
    //         triggerHook: 0.85,
    //         reverse: false
    //     })
    //     .setTween(tl_1)
    //     .addTo(ctrl);
    // });

    // // Create scenes for section 1 a1 (start 2)
    // $(sectionS1_a1).each(function(i) {
    //     // -----------------------------------
    //     var tl_1_a1 = new TimelineMax()

    //     // animations 
    //     tl_1_a1.from(sectionS1_a1.find('.pic img'), 0.45, {autoAlpha: 0, scale: 0.8})
    //     tl_1_a1.from(sectionS1_a1.find('.resum .title'), 0.45, {autoAlpha: 0, y: 50})
    //     tl_1_a1.from(sectionS1_a1.find('.resum .para'), 0.45, {autoAlpha: 0, bottom: -50})
    //     tl_1_a1.from(sectionS1_a1.find('.contentBtn'), 0.45, {autoAlpha: 0, y: 50})
        
    //     new ScrollMagic.Scene({
    //         triggerElement: this,
    //         triggerHook: 0.85,
    //         reverse: false
    //     })
    //     .setTween(tl_1_a1)
    //     .addTo(ctrl);
    // });

    // // Create scenes for section 1 a2 (start 3)
    // $(sectionS1_a2).each(function(i) {
    //     // -----------------------------------
    //     var tl_1_a2 = new TimelineMax()

    //     // animations 
    //     .from(sectionS1_a2.find('.title'), 0.45, {autoAlpha: 0, y: 50})
    //     .from(sectionS1_a2.find('.pic img'), 2, {autoAlpha: 0, scale: 0.8})
    //     .from(sectionS1_a2.find('.resum .logo'), 0.45, {autoAlpha: 0, y: 70, scale: 0.8}, '0.5')
    //     .from(sectionS1_a2.find('.resum .para'), 0.45, {autoAlpha: 0, bottom: -50}, '0.9')
    
    //     new ScrollMagic.Scene({
    //         triggerElement: this,
    //         triggerHook: 0.85,
    //         reverse: false
    //     })
    //     .setTween(tl_1_a2)
    //     .addTo(ctrl);
    // });

    // // Create scenes for section 1 a3 (start 4)
    // $(sectionS1_a3).each(function(i) {
    //     // -----------------------------------
    //     var tl_1_a3 = new TimelineMax()

    //     // animations 
    //     .from(sectionS1_a3.find('.resum .logo'), 0.45, {autoAlpha: 0, y:70, scale: 0.8})
    //     .from(sectionS1_a3.find('.resum .para'), 0.45, {autoAlpha: 0, bottom: -70})
    //     .from(sectionS1_a3.find('.pic img'), 2, {autoAlpha: 0, scale: 0.8})
    //     .from(sectionS1_a3.find('.title'), 1, {autoAlpha: 0, y: 70}, '0.5')
    
    //     new ScrollMagic.Scene({
    //         triggerElement: this,
    //         triggerHook: 0.85,
    //         reverse: false
    //     })
    //     .setTween(tl_1_a3)
    //     .addTo(ctrl);
    // });

    // // Create scenes for section 2 (start 5)
    // $(sectionS2).each(function(i) {
    //     // -----------------------------------
    //     var tl_2 = new TimelineMax()

    //     // animations 
    //     .from(sectionS2.find('.a1 .bgPic img'), 0.45, {autoAlpha: 0})
    //     .from(sectionS2.find('.a1 .title'), 0.45, {autoAlpha: 0, y: 70})
    //     .from(sectionS2.find('.a1 .map .vLine'), 0.45, {autoAlpha: 0, height: 0})
    //     .staggerFrom(sectionS2.find('.a1 .listBtn a'), 0.3, {autoAlpha: 0, y: 50}, 0.3)
    
    //     new ScrollMagic.Scene({
    //         triggerElement: this,
    //         triggerHook: 0.85,
    //         reverse: false
    //     })
    //     .setTween(tl_2)
    //     .addTo(ctrl);
    // });

    // // Create scenes for section 3 (start 6)
    // $(sectionS3).each(function(i) {
    //     // -----------------------------------
    //     var tl_6 = new TimelineMax()

    //     // animations 
    //     .from(sectionS3.find('.a1 .resum .title'), 0.8, {autoAlpha: 0, top: 70})
    //     .from(sectionS3.find('.a1 .bgPic img'), 1, {autoAlpha: 0, scale: 0.8})
    //     .from(sectionS3.find('.a1 .contBtn .linkBtn'), 0.45, {autoAlpha: 0, y:70, scale: 0.8})
    
    //     new ScrollMagic.Scene({
    //         triggerElement: this,
    //         triggerHook: 0.85,
    //         reverse: false
    //     })
    //     .setTween(tl_6)
    //     .addTo(ctrl);
    // });

    // // Create scenes for section 4 a1 (start 7)
    // $(sectionS4_a1).each(function(i) {
    //     var tl_7 = new TimelineMax()

    //     // animations 
    //     .from(sectionS4_a1.find('.logo img'), 0.45, {autoAlpha: 0, y: 70})
    //     .from(sectionS4_a1.find('.title'), 0.45, {autoAlpha: 0, y: 70})
    //     .from(sectionS4_a1.find('.pic img'), 2, {autoAlpha: 0, scale: 0.8})
    //     .from(sectionS4_a1.find('.contentBtn'), 0.45, {autoAlpha: 0, y: 70}, '0.8')
    
    //     new ScrollMagic.Scene({
    //         triggerElement: this,
    //         triggerHook: 0.85,
    //         reverse: false
    //     })
    //     .setTween(tl_7)
    //     .addTo(ctrl);
    // });

    // // Create scenes for section 4 a2 (start 8)
    // $(sectionS4_a2).each(function(i) {
    //     var tl_8 = new TimelineMax()

    //     // animations 
    //     .from(sectionS4_a2.find('.pic img'), 1, {autoAlpha: 0, scale: 0.8})
    //     .from(sectionS4_a2.find('.para'), 0.3, {autoAlpha: 0, y: 50}, 0.3)
    
    //     new ScrollMagic.Scene({
    //         triggerElement: this,
    //         triggerHook: 0.85,
    //         reverse: false
    //     })
    //     .setTween(tl_8)
    //     .addTo(ctrl);
    // });

    // // Create scenes for section 5 a1 (start 9)
    // $(sectionS5_a1).each(function(i) {
    //     var tl_9 = new TimelineMax()

    //     // animations 
    //     .from(sectionS5_a1.find('.pic img'), 0.45, {autoAlpha: 0, scale: 0.8})
    //     .from(sectionS5_a1.find('.title'), 0.45, {autoAlpha: 0, y: 70})
    //     .from(sectionS5_a1.find('.para'), 0.45, {autoAlpha: 0, y: 70})
    
    //     new ScrollMagic.Scene({
    //         triggerElement: this,
    //         triggerHook: 0.85,
    //         reverse: false
    //     })
    //     .setTween(tl_9)
    //     .addTo(ctrl);
    // });

    // // Create scenes for section 5 a2 (start 10)
    // $(sectionS5_a2).each(function(i) {
    //     var tl_10 = new TimelineMax()

    //     // animations 
    //     .from(sectionS5_a2.find('.logo'), 0.45, {autoAlpha: 0, y: 70}, '#sTtr')
    //     .from(sectionS5_a2.find('.title'), 0.45, {autoAlpha: 0, y: 70}, '#sTtr')
    //     .from(sectionS5_a2.find('.subTitle'), 0.45, {autoAlpha: 0, y: 70}, '#start')
    //     .from(sectionS5_a2.find('.contentForm'), 0.45, {autoAlpha: 0, y: 70}, '#start')
    //     .from(sectionS5_a2.find('.para'), 0.45, {autoAlpha: 0, y: 70}, '#start')
    
    //     new ScrollMagic.Scene({
    //         triggerElement: this,
    //         triggerHook: 0.85,
    //         reverse: false
    //     })
    //     .setTween(tl_10)
    //     .addTo(ctrl);
    // });

    // // Create scenes for footer (start 11)
    // $(footer).each(function(i) {
    //     var tl_11 = new TimelineMax()

    //     // animations 
    //     .from(footer.find('.top .para'), 1, {autoAlpha: 0, scale: 0.3})
    //     .staggerFrom(footer.find('.bottom a img'), 0.3, {autoAlpha: 0, scale: 0.8, y: 70}, 0.3)
    //     .from(footer.find('.bottom .para'), 0.5, {autoAlpha: 0, y: 70}, 0.3)
    
    //     new ScrollMagic.Scene({
    //         triggerElement: this,
    //         triggerHook: 0.85,
    //         reverse: false
    //     })
    //     .setTween(tl_11)
    //     .addTo(ctrl);
    // });


})(jQuery);


            