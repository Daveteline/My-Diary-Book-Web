window.addEventListener("mouseover",play);

window.addEventListener("click",play);

function play(){ document.getElementById("myAudio").play();
}

function changeLeft(x,z){
    document.getElementById(x).style.transform ="rotateY(0deg)";
    setTimeout(function(){
        document.getElementById(x).style.zIndex=z;
    },500);
    document.getElementById(x).style.color = 'black';
}

function changeRight(y,z){
    document.getElementById(y).style.transform ="rotateY(-90deg)";
    setTimeout(function(){
        document.getElementById(y).style.zIndex=z;
    },500);
    document.getElementById(y).style.color = 'transparent';
}

function waterMark(wh, left, top,fontSize){
    var mark = document.createElement("div");
    var link = document.createElement("a");
    document.getElementById("firstPage").appendChild(link);
    link.href="https://github.com/Daveteline";
    link.appendChild(mark);
    mark.style=`
        position:absolute;
        left:${left};
        top:${top};
        width:${wh};
        height:${wh};
        border-radius:50%;
        background:url(${"https://avatars.githubusercontent.com/u/91396491"} );
        background-size:cover;
        background-position:center;
        text-align:center;
        line-height:${wh};
        color:white;
        font-size:${fontSize};
        opacity:1;
        box-shadow:0 0 1px black;
        transform:translate(-50%, -50%)
        `;
    mark.innerText="Original";
}

window.onload = function(){
    waterMark("25vmin", "50%", "50%", "3.5vmin");
};


var position = false;
function secretPage(){
    if(position === false){
        document.getElementById("secretPaper").style.top="-100vh";
    document.getElementById("secretPaper").style.transform ="rotate(0deg)";
    document.getElementById("lastArrow").style.display="none";
    setTimeout(function(){
        document.getElementById("secretPaper").style.top="30%";
        document.getElementById("secretPaper").style.zIndex = "2";
        position = true;
        },1500);
    }
    else{
        document.getElementById("secretPaper").style.top="-100vh";
    document.getElementById("secretPaper").style.transform ="rotate(8deg)";
    setTimeout(function(){
        document.getElementById("secretPaper").style.top="30%";
        document.getElementById("secretPaper").style.zIndex = "-1";
        document.getElementById("lastArrow").style.display="block";
        position = false;
    },1500);
    }
}

function star_brust(event){

    

    let sick_line_bro_0x1e4f = ['scale(0.4)',
        'clientX',
        'clientY',
        '.star-brust',
        'show',
        'scale(0.7)',
        'css'];

    (function (_0x2f184b, _0x150adb) {

        let _0x66a54d = (_0x51fe1d) => {
            while (--_0x51fe1d) {
                _0x2f184b['push'](_0x2f184b['shift']());
            }
        };
        _0x66a54d(++_0x150adb);
    }(sick_line_bro_0x1e4f,
        0x10b));

    let sick_line_bro_0x456e = (_0x481068, _0x2b6af) => {
        _0x481068 = _0x481068 - 0x0;
        let _0x3068f4 = sick_line_bro_0x1e4f[_0x481068];
        return _0x3068f4;
    };

    let xPos = event[sick_line_bro_0x456e('0x0')],
        yPos = event[sick_line_bro_0x456e('0x1')];

    $(sick_line_bro_0x456e('0x2'))[sick_line_bro_0x456e('0x3')]()['css']({
        'left': xPos,
        'top': yPos,
        'transform': sick_line_bro_0x456e('0x4'),
        'opacity': 0x1
    });

    if (timer) {
        clearTimeout(timer);
        timer = null;
    }

    timer = setTimeout(() => {
        $(sick_line_bro_0x456e('0x2'))[sick_line_bro_0x456e('0x5')]({
            'transform': sick_line_bro_0x456e('0x6'),
            'opacity': 0x0
        });
    }, 0x4b0);
}