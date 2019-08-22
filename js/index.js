function test1(){
    $(function() {
        var controller = new ScrollMagic.Controller();

        var blockTween = new TweenMax.to('#block',1, {
            backgroundColor: 'red'
        });

        var containerScene = new ScrollMagic.Scene({
            triggerElement: '#container',
            duration: 300
        })
            .setTween(blockTween)
            .addIndicators()
            .addTo(controller);


    });
}

function test2() {
    $(function () {
        var controller = new ScrollMagic.Controller();

        /*manage curtain code block*/{
            let curtainDuration = 1000;
            var imgInitTween = new TweenMax.to('#curtain-container > img', 1, {
                width: '0vw'
            });
            new ScrollMagic.Scene({
                triggerElement: '#curtain',
                duration: curtainDuration
            })
                .setTween(imgInitTween)
                .addIndicators()
                .addTo(controller);
            new ScrollMagic.Scene({
                triggerElement: '#curtain',
                duration: curtainDuration
            })
                .setTween(imgInitTween)
                .addIndicators()
                .addTo(controller);
        }
        /*manage confetti  code block*/{



        }



    });
}

test2();