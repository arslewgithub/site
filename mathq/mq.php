<?php $mode = $_GET['mode']; ?>
<?php $qrange = $_GET['qrange']; ?>
<?php $qcount = $_GET['qcount']; ?>
<?php $qbreak = $_GET['qbreak']; ?>
<script>
    if ('<?php echo $mode; ?>' == '' || '<?php echo $qrange; ?>' == '' || '<?php echo $qcount; ?>' == '' || '<?php echo $qbreak; ?>' == '') {
        document.head.remove()
        document.body.remove()
        localStorage.setItem('formerror', 'notfindformvalue');
        location.replace('mq.html')
    }
</script>
<?php
print "
<!DOCTYPE html>
<html>

<head>
    <meta charset=\"utf-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
    <title>好玩的數學</title>
    <style>
        input[type=\"button\"],
        input#subbt,
        button {
            background-color: #fff3;
            border-radius: 5px;
            border: 1px solid #999999;
            margin: 5px;
            padding: 5px 10px 5px 10px;
            transition: 0.2s;
            cursor: pointer;
        }

        input[type=\"button\"]:hover,
        button:hover {
            background-color: #ffffff80;
        }

        input[type=\"number\"]:focus {
            box-shadow: inset 0px 0px 0px 1px #398af5;
        }


        input[type=\"number\"]:focus-visible {
            outline: 0;
        }

        input#subbt {
            float: right;
            background-color: #398af5;
            color: white;
            border: 1px solid #398af580;
            width: 70px;
            height: 40px;
            margin-top: 20px;
        }

        input#subbt:hover {
            background-color: #398bf5d0;
        }

        body {
            background-image: linear-gradient(77deg, #d9faff, #c9dfff, #c7d8ff, #ffdbff);
        }

        @keyframes flipInX {
            0% {
                transform: perspective(400px) rotateX(90deg) translate(-50%, -50%);
                opacity: 0
            }

            40% {
                transform: perspective(400px) rotateX(-10deg) translate(-50%, -50%);
            }

            70% {
                transform: perspective(400px) rotateX(10deg) translate(-50%, -50%);
            }

            100% {
                transform: perspective(400px) rotateX(0deg) translate(-50%, -50%);
                opacity: 1
            }
        }

        .bodycenter {
            position: absolute;
            width: 1200px;
            height: 600px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 10px;
            background: #ffffff55;
            z-index: 10;
            box-shadow: 3px 3px 5px 0 #0003;
            padding: 25px;
            animation: flipInX 1s;
        }

        div.framemargin {
            margin: 20px;
            width: calc(100% - 40px);
            height: calc(100% - 40px);
        }

        .line1,
        .line2,
        .line3,
        .line4 {
            float: left;
            user-select: none;
        }

        .line1 {
            border: 0;
            width: calc(70% - 2px);
            height: calc(60% - 2px);
        }

        .line2 {
            border-left: 1px solid #000;
            width: calc(30% - 2px);
            height: calc(60% - 2px);
        }

        .line3 {
            border-top: 1px solid #000;
            height: calc(40% - 2px);
            width: calc(34% - 2px);
        }

        .line4 {
            border-top: 1px solid #000;
            border-left: 1px solid #000;
            height: calc(40% - 2px);
            width: calc(66% - 2px);
        }

        .rounded-rectangle {
            border-radius: 8px;
            border: 1px solid #999999;
        }

        .rectangle {
            border: 1px solid #999999;
        }

        .line1>div.framemargin {
            margin-top: 0px;
            margin-left: 0px;
            width: calc(100% - 20px);
            height: calc(100% - 20px);
        }

        .line2>div.framemargin:first-child {
            margin-top: 0px;
            margin-right: 0px;
            width: calc(100% - 20px);
            height: calc(80% - 20px);
        }

        .line2>div.framemargin:last-child {
            margin-top: 0px;
            margin-right: 0px;
            width: calc(100% - 20px);
            height: calc(20% - 20px);
        }

        .line3>div.framemargin {
            margin-bottom: 0px;
            margin-left: 0px;
            width: calc(100% - 20px);
            height: calc(100% - 20px);
        }

        .line4>div.framemargin {
            margin-bottom: 0px;
            margin-right: 0px;
            width: calc(100% - 20px);
            height: calc(100% - 20px);
        }

        .line1>div.framemargin,
        .line2>div.framemargin,
        .line3>div.framemargin,
        .line4>div.framemargin {
            background-color: #fff4;
            user-select: text;
        }

        .line3>div.framemargin.rectangle>div p {
            font-size: 20px;
            display: inline-block;
            margin: 14px 0 14px 28px;
        }

        .line4>div.framemargin.rectangle>div p {
            font-size: 20px;
            display: inline-block;
            margin: 14px 0 14px 14px;
        }

        .line4>div.framemargin.rectangle>div b {
            font-size: 20px;
        }

        .line4>div.framemargin.rectangle>div {
            display: inline-block;
        }

        .info1 {
            margin-left: 25px;
            margin-top: 20px;
            float: left;
        }

        .info2 {
            margin-right: 40%;
            margin-top: 26px;
            float: right;
        }

        * {
            font-family: DFKai-sb;
        }

        input[type=\"button\"].question-submit {
            float: right;
            background-color: #398af5;
            color: white;
            border: 1px solid #398af580;
            border-radius: 0px 20px 20px 0px;
            width: 20%;
            margin: 0;
            height: 40px;
        }

        input[type=\"button\"].question-submit:hover {
            background-color: #398bf5d0;
        }

        input[type=\"number\"].question-input {
            background-color: #fffa;
            background-image: linear-gradient(777deg, #e5fbff, #dfebff, #d6e3ff, #ffeeff);
            border-radius: 20px 0px 0px 20px;
            border: 0;
            border-bottom: 1px solid #999999;
            padding-left: 20px;
            transition: 0.5s;
            width: 80%;
            float: left;
            height: 40px;
        }

        div.line1>div.framemargin.rounded-rectangle>div {
            padding: 40px;
        }

        #tomenu {
            float: left;
            background-color: #0000;
            color: #000;
            border: 1px solid #ff9bb9;
            border-radius: 20px;
            width: 100%;
            margin: 0;
            margin-top: 25px;
            height: 43px;
        }

        #tomenu:hover {
            background-color: #ffb5cb;
            color: #ffffff;
            border: 1px solid #ff9bb980;
        }

        input[type=\"number\"]::-webkit-outer-spin-button,
        input[type=\"number\"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }


        @font-face {
            font-family: 'FtpFont';
            src: url('ftpf.ttf') format(\"truetype\")
        }

        .question-title {
            background-color: #fff3;
            border-radius: 10px;
            border: 1px solid #999999;
            margin: 5px;
            padding: 10px 25px;
            transition: 0.2s;
            height: 100px;
            margin-bottom: 25px;
            text-align: center;
            font-size: 75px;
            font-family: FtpFont;
        }

        #true_or_false {
            transition: .5s;
            transform: scale(0);
            width: 100%;
            height: 100%;
        }

        #true_or_false.true{
            transform: scale(.8);
            background: round url(c.png);
        }

        #true_or_false.false{
            transform: scale(.8);
            background: round url(e.png);
        }

        input[type=\"button\"].question-submit:disabled {
            background-color: #9ec2f3;
            color: white;
            border: 1px solid #9ec2f380;
            cursor: not-allowed;
        }

        input[type=\"number\"].question-input:disabled{
            cursor: not-allowed;
        }
        
        input[type=\"button\"]:active {
            animation: btmodown .25s;
            border: 1px solid #398af5;
            background-color: #398af580;
            transform: scale(0.98);
        }

        @keyframes btmodown {
            0% {
                transform: scale(1);
            }

            100% {
                transform: scale(0.98);
            }
        }

        #printanswer {
            padding-top: 12px;
            transition: 0.2s;
            height: 100%;
            text-align: center;
            font-size: 23px;
        }
    </style>
</head>

<body>
    <div class=\"bodycenter\">
        <div class=\"line1\">
            <div class=\"framemargin rounded-rectangle\">
                <div>
                    <div class=\"question-title\"></div>
                    <input type=\"number\" class=\"question-input\" placeholder=\"請輸入答案\">
                    <input type=\"button\" class=\"question-submit\" value=\"送出\">
                    <input type=\"button\" id=\"tomenu\" value=\"回首頁\">
                </div>
            </div>
        </div>
        <div class=\"line2\">
            <div class=\"framemargin rounded-rectangle\">
                <div id=\"true_or_false\"></div>
            </div>
            <div class=\"framemargin rounded-rectangle\">
                <div id=\"printanswer\"></div>
            </div>
        </div>
        <div class=\"line3\">
            <div class=\"framemargin rectangle\">
                <div>
                    <p>時間:</p>
                    <p id=\"printtime\"></p><br>
                    <p>積分:</p>
                    <p id=\"printscore\"></p><br>
                    <p>答對:</p>
                    <p id=\"printcorrect\"></p><br>
                    <p>答錯:</p>
                    <p id=\"printerror\"></p>
                </div>
            </div>
        </div>
        <div class=\"line4\">
            <div class=\"framemargin rectangle\">
                <div class=\"info1\">
                    <img><b>資訊:</b><br>
                    <p>模式:</p>
                    <p id=\"printmode\"></p><br>
                    <p>範圍:</p>
                    <p id=\"printrange\"></p><br>
                    <p>間隔:</p>
                    <p id=\"printbreak\"></p>
                </div>
                <div class=\"info2\">
                    <br>
                    <p>總題數:</p>
                    <p id=\"printallcount\"></p><br>
                    <p>剩餘題數:</p>
                    <p id=\"printremainingcount\"></p><br>
                    <p>開發者:</p>
                    <p>&lt;&lt;Airratstrip&gt;&gt;</p>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
";
?>
<script id="jsc">
    var mode = <?php echo $mode; ?>;
    var qrange = <?php echo $qrange; ?>;
    var qcount = <?php echo $qcount; ?>;
    var qbreak = <?php echo $qbreak; ?>;
    var answer = 0;
    var score = 0;
    var questiontime = 0;
    var correctcount = 0;
    var errorcount = 0;
    var rqc = qcount;
    var breaktime = qbreak;
    var n1 = 0;
    var n2 = 0;
    var questioning = 0;
    document.getElementById('printtime').innerHTML = questiontime + '&nbsp;秒';
    document.getElementById('printscore').innerHTML = score + '&nbsp;分'
    document.getElementById('printcorrect').innerHTML = correctcount + '&nbsp;題'
    document.getElementById('printerror').innerHTML = errorcount + '&nbsp;題'
    document.getElementById('printbreak').innerHTML = qbreak + '&nbsp;秒';
    document.getElementById('printallcount').innerHTML = qcount + '&nbsp;題';
    if (mode == 1) {
        document.getElementById('printmode').innerHTML = '加法'
    }

    else if (mode == 2) {
        document.getElementById('printmode').innerHTML = '減法'
    }

    else if (mode == 3) {
        document.getElementById('printmode').innerHTML = '乘法'
    }

    else {
        document.getElementById('printmode').innerHTML = '未知'
        alert('未知的mode參數' + '\"' + mode + '\"')
        localStorage.setItem('formerror', 'notfindformvalue');
        location.replace('mq.html')
    }

    if (qrange == 1) {
        document.getElementById('printrange').innerHTML = '0~9'
    }

    else if (qrange == 2) {
        document.getElementById('printrange').innerHTML = '0~99'
    }

    else if (qrange == 3) {
        document.getElementById('printrange').innerHTML = '0~999'
    }

    else if (qrange == 4) {
        document.getElementById('printrange').innerHTML = '0~9999'
    }

    else if (qrange == 5) {
        document.getElementById('printrange').innerHTML = '0~99999'
    }

    else {
        document.getElementById('printrange').innerHTML = '未知'
        alert('未知的qrange參數' + '\"' + qrange + '\"')
        localStorage.setItem('formerror', 'notfindformvalue');
        location.replace('mq.html')
    }

    function qtime() {
        if (questioning == 1) {
            document.getElementById('printtime').innerHTML = questiontime + '&nbsp;秒';
            questiontime += 1;
            setTimeout('qtime()', 1000)
        }
    }

    document.getElementById('printremainingcount').innerHTML = rqc + '&nbsp;題'

    function ques() {
        questiontime = 0;
        questioning = 1;
        document.getElementById('printanswer').parentElement.style = ''
        document.getElementById('printanswer').innerHTML = ''
        document.getElementById('printtime').innerHTML = questiontime + '&nbsp;秒';
        document.getElementById('true_or_false').classList.remove('true')
        document.getElementById('true_or_false').classList.remove('false')
        document.getElementsByClassName('question-input')[0].disabled = false
        document.getElementsByClassName('question-input')[0].focus()
        document.getElementsByClassName('question-submit')[0].disabled = false
        document.getElementById('printremainingcount').innerHTML = rqc + '&nbsp;題'
        rqc -= 1;
        if (mode == 1) {
            n1 = Math.floor(Math.random() * (10 ** qrange));
            n2 = Math.floor(Math.random() * (10 ** qrange));
            answer = n1 + n2;
            document.getElementsByClassName('question-title')[0].innerHTML = n1 + '&nbsp;+&nbsp;' + n2 + '&nbsp;=&nbsp;?'
        }

        else if (mode == 2) {
            n1 = Math.floor(Math.random() * (10 ** qrange));
            n2 = Math.floor(Math.random() * (10 ** qrange));
            answer = n1 - n2;
            document.getElementsByClassName('question-title')[0].innerHTML = n1 + '&nbsp;-&nbsp;' + n2 + '&nbsp;=&nbsp;?'
        }

        else if (mode == 3) {
            n1 = Math.floor(Math.random() * (10 ** qrange));
            n2 = Math.floor(Math.random() * (10 ** qrange));
            answer = n1 * n2;
            document.getElementsByClassName('question-title')[0].innerHTML = n1 + '&nbsp;×&nbsp;' + n2 + '&nbsp;=&nbsp;?'
        }

        qtime()
    }

    function brea() {
        document.getElementsByClassName('question-input')[0].value = '';
        document.getElementsByClassName('question-input')[0].blur();
        if (breaktime > 0) {
            breaktime -= 1;
            document.getElementsByClassName('question-title')[0].innerHTML = breaktime + 1;
            document.getElementsByClassName('question-input')[0].disabled = true
            document.getElementsByClassName('question-submit')[0].disabled = true
            setTimeout('brea()', 1000)
        }

        else {
            breaktime = qbreak;
            ques()
        }
    }

    brea();

    function subm() {
        if (questioning == 1) {
            questioning = 0;
            if (document.getElementsByClassName('question-input')[0].value == answer) {
                corr();
            }
            else {
                erro();
            }
            if (rqc > 0) {
                brea();
            }
            else {
                end();
            }
        }
    }

    function keyFunction() {
        if (event.keyCode == 13) {
            subm();
        }
    }
    document.onkeydown = keyFunction;

    document.getElementsByClassName('question-submit')[0].onclick = function () {
        if (questioning == 1) {
            questioning = 0;
            if (document.getElementsByClassName('question-input')[0].value == answer) {
                corr();
            }
            else {
                erro();
            }
            if (rqc > 0) {
                brea();
            }
            else {
                end();
            }
        }
    };

    document.getElementById('tomenu').onclick = function () {
        location.replace('mq.html')
    }

    function corr() {
        correctcount += 1;
        document.getElementById('printcorrect').innerHTML = correctcount + '&nbsp;題'
        document.getElementById('true_or_false').classList.add('true')
        if (mode == 1) {
            score += ((3 * qrange) + 2) / (questiontime / (qrange ** 2))
            console.debug(n1 + ' × ' + n2 + ' = ' + answer)
            document.getElementById('printanswer').parentElement.style = 'background-color: #f0fff0;color: #afd300;'
            document.getElementById('printanswer').innerHTML = '答案: ' +  n1 + ' + ' + n2 + ' = ' + answer
        }

        else if (mode == 2) {
            score += ((3 * qrange) + 2) / (questiontime / (qrange ** 2))
            console.debug(n1 + ' × ' + n2 + ' = ' + answer)
            document.getElementById('printanswer').parentElement.style = 'background-color: #f0fff0;color: #afd300;'
            document.getElementById('printanswer').innerHTML = '答案: ' +  n1 + ' - ' + n2 + ' = ' + answer
        }

        else if (mode == 3) {
            score += ((2 * (32 ** (qrange - 1))) + 2) / (questiontime / (qrange ** 2))
            console.debug(n1 + ' × ' + n2 + ' = ' + answer)
            document.getElementById('printanswer').parentElement.style = 'background-color: #f0fff0;color: #afd300;'
            document.getElementById('printanswer').innerHTML = '答案: ' +  n1 + ' × ' + n2 + ' = ' + answer
        }
        document.getElementById('printscore').innerHTML = Math.floor(score) + '&nbsp;分'
    }

    function erro() {
        errorcount += 1;
        score -= 4;
        document.getElementById('printerror').innerHTML = errorcount + '&nbsp;題'
        document.getElementById('true_or_false').classList.add('false')
        document.getElementById('printscore').innerHTML = Math.floor(score) + '&nbsp;分'
        if (mode == 1) {
            console.error(n1 + ' + ' + n2 + ' = ' + answer)
            document.getElementById('printanswer').parentElement.style = 'background-color: #fff0f0;color: #f00;'
            document.getElementById('printanswer').innerHTML = '答案: ' +  n1 + ' + ' + n2 + ' = ' + answer
        }

        else if (mode == 2) {
            console.error(n1 + ' - ' + n2 + ' = ' + answer)
            document.getElementById('printanswer').parentElement.style = 'background-color: #fff0f0;color: #f00;'
            document.getElementById('printanswer').innerHTML = '答案: ' +  n1 + ' - ' + n2 + ' = ' + answer
        }

        else if (mode == 3) {
            console.error(n1 + ' × ' + n2 + ' = ' + answer)
            document.getElementById('printanswer').parentElement.style = 'background-color: #fff0f0;color: #f00;'
            document.getElementById('printanswer').innerHTML = '答案: ' +  n1 + ' × ' + n2 + ' = ' + answer
        }
    }

    function end() {
        rqc = 0;
        document.getElementById('printremainingcount').innerHTML = rqc + '&nbsp;題'

        setTimeout('backqf()', 100)
    }

    function backqf() {
        var backq = confirm('題目作答完畢，您的分數為' + Math.floor(score) + '分，正確率約為' + Math.floor((correctcount / qcount) * 10000) / 100 + '%。\n請問要返回首頁嗎?');

        if (backq) {
            location.replace('mq.html')
        } else {
            document.getElementsByClassName('question-submit')[0].disabled = true
            document.getElementsByClassName('question-input')[0].disabled = true
            document.getElementsByClassName('question-input')[0].value = ''
        }
    }

    document.getElementById('jsc').remove()
</script>