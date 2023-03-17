document.addEventListener('DOMContentLoaded', ()=>{

    const overlay = document.querySelector('.confidentiality_modalOverlay');
    const slide = document.querySelector('.SlideModalBottom');

    TweenLite.set(slide, { autoAlpha: 0, y: 50 });
    TweenLite.set(overlay, { autoAlpha: 0 });

    var quickLinksTradeBTN = document.getElementById("quickLinksTradeBTN");

    quickLinksTradeBTN.onclick = function() {

        var rect = this.getBoundingClientRect();
        TweenMax.set(overlay, {
            x: rect.left,
            y: rect.top,
            height: rect.height,
            width: rect.width
        });

        var tl = new TimelineMax();

        tl.to(overlay, 0.3, {
            height: window.innerHeight,
            width: window.innerWidth,
            x: 0,
            y: 0,
            autoAlpha: 1
        });

        tl.to(slide, 0.5, {
            autoAlpha: 1,
            y: 0,
            ease: Power1.easeInOut
        });

        SlideModalBottomToggle = true;

        var modelBottomLabel = document.getElementById("modelBottomLabel");
        modelBottomLabel.visibility = "visible";

    };

    modalOverlay1.onclick = function() {
        if (SlideModalBottomToggle === true) {

            TweenLite.to(slide, 0.4, {
                autoAlpha: 0,
                y: 50,
                ease: Power1.easeInOut
            });

            TweenLite.to(overlay, 0.5, {
                autoAlpha: 0,
                ease: Power1.easeInOut
            });

            slideModalBottom = false;
        } else {
        }
    };
})
