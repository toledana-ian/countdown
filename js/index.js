$(function() {
    let endYear = 2020;
    let endMonth = 7;
    let endDate = 31;
    let endHour = 19;
    let endMin = 0;
    let endSec = 0;

    let start = moment(new Date($.now()));
    let end = moment(new Date(endYear+"-"+endMonth+"-"+endDate+" "+endHour+":"+endMin+":"+endSec));

    let duration = moment.duration(end.diff(start));

    console.log(duration);

    let diffInDays = end.diff(start, 'days');
    let diffInHours = duration.hours();
    let diffInMins = duration.minutes();
    let diffInSecs = duration.seconds();

    //if(diffInHours<10) diffInHours = '0'+diffInHours;

    $('.days').text(diffInDays);
    $('.hours').text(diffInHours<10 ? '0'+diffInHours : diffInHours);
    $('.minutes').text(diffInMins<10 ? '0'+diffInMins : diffInMins);
    $('.seconds').text(diffInSecs-2<10 ? '0'+diffInSecs-2 : diffInSecs-2);

    $('body').on('dblclick', function (){
        $('body').off();

        document.getElementById("myAudio").play();

        $('#countdown-container').fadeIn(2000, function () {
            $('.cd100').countdown100({
                /*Set Endtime here*/
                /*Endtime must be > current time*/
                endtimeYear: endYear,
                endtimeMonth: endMonth,
                endtimeDate: endDate,
                endtimeHours: endHour,
                endtimeMinutes: endMin,
                endtimeSeconds: endSec,
                timeZone: ""
                // ex:  timeZone: "America/New_York"
                //go to " http://momentjs.com/timezone/ " to get timezone
            });
        });

        const canvas = $('#countdown-background')[0];
        const context = canvas.getContext( '2d' );
        let width = window.innerWidth;
        let height = window.innerHeight;

        let particles = [];

        // change body bg color
        // const changeBgColor = () => {
        //     const hue = Math.floor( Math.random() * 360 );
        //     document.body.style.backgroundColor = "hsl("+ hue +", 50%, 5%)";
        // };

        // update canvas size
        const updateSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        // create confetti particles
        const createParticles = () => {
            particles = [];
            let total = 100;

            if ( width > 1080 ) { total = 400; } else
            if ( width > 760 )  { total = 300; } else
            if ( width > 520 )  { total = 200; }

            for ( let i = 0; i < total; ++i ) {
                particles.push( new ConfettiParticle( context, width, height ) );
            }
        };

        // animation loop function
        const animationFunc = () => {
            requestAnimationFrame( animationFunc );
            //if ( Math.random() > 0.98 ) changeBgColor();
            context.clearRect( 0, 0, width, height );

            for ( let p of particles ) {
                p.width = width;
                p.height = height;
                p.update();
                p.draw();
            }
        };

        // on resize
        // window.addEventListener( 'resize', e => {
        //     updateSize();
        //     createParticles();
        // });

        // start
        updateSize();
        createParticles();
        //changeBgColor();
        animationFunc();


    });

});
