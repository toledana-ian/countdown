<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="css/index.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/main.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/util.css" media="screen" />

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="plugins/countdowntime/moment.min.js"></script>
    <script src="plugins/countdowntime/moment-timezone.min.js"></script>
    <script src="plugins/countdowntime/moment-timezone-with-data.min.js"></script>
    <script src="plugins/countdowntime/countdowntime.js"></script>

    <script src="js/particle.js"></script>
    <script src="js/index.js"></script>
</head>
<body style="position: relative;">
<div id="countdown-container" class="flex-col-c-m p-l-15 p-r-15 p-t-50 p-b-120" style="height: 100px;
  width: 100%;
  position: absolute;
  left: 50%;
  margin-left: -50%;
  top: 50%;
  margin-top: -50px;
  display: none;
">
<!--    <h3 class="l1-txt1 txt-center p-b-40 respon1">-->
<!--        Coming Soon-->
<!--    </h3>-->

    <div class="flex-w flex-c-m cd100">
        <div class="flex-col-c wsize1 m-b-30" style="width: 275px;">
            <span class="l1-txt2 p-b-9 days goldtextcss">000</span>
            <span class="s1-txt1 where1 p-l-35">Days</span>
        </div>

        <div class="flex-col-c wsize1 m-b-30">
            <span class="l1-txt2 p-b-9 hours goldtextcss">00</span>
            <span class="s1-txt1 where1 p-l-35">Hours</span>
        </div>

        <div class="flex-col-c wsize1 m-b-30">
            <span class="l1-txt2 p-b-9 minutes goldtextcss">00</span>
            <span class="s1-txt1 where1 p-l-35">Minutes</span>
        </div>

        <div class="flex-col-c wsize1 m-b-30">
            <span class="l1-txt2 p-b-9 seconds goldtextcss">00</span>
            <span class="s1-txt1 where1 p-l-35">Seconds</span>
        </div>
    </div>
</div>
<canvas id="countdown-background"></canvas>


</body>
</html>