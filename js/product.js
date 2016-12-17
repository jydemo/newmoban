var transitionstext = new Array;

transitionstext[0] = "progid:DXImageTransform.Microsoft.GradientWipe(duration=0.5)"; /** 浠庡乏寰€鍙虫笎鍙樺嚭 */

transitionstext[1] = "progid:DXImageTransform.Microsoft.Fade(duration=1)"; /** 鏁翠綋娓愬彉鍑� */

transitionstext[2] = "progid:DXImageTransform.Microsoft.Blinds(Duration=0.7,bands=20)"; /** 妯悜鐧惧彾绐� */

transitionstext[3] = "progid:DXImageTransform.Microsoft.Checkerboard(Duration=0.7,squaresX=20,squaresY=20)"; /** 鏂瑰潡鐧惧彾绐� */

transitionstext[4] = "progid:DXImageTransform.Microsoft.RandomDissolve(Duration=0.7,orientation=vertical)"; /** 闅忔満鐐� */

transitionstext[5] = "progid:DXImageTransform.Microsoft.RandomBars(Duration=0.7,orientation=vertical)"; /** 闅忔満绔栫嚎 */



var MaxImg;

var NowImg = 1;

var begin;

var interval = 4000;  /** 鍒囨崲闂撮殧 */

var hasNum=false;  /** 鏄惁鏈夋暟瀛楀揩鎹峰垏鎹㈢殑鍒ゆ柇 */



function initMax(){  /** 淇鎬绘暟骞惰Е鍙戝姩浣� */

  for (var i=1;i<=20;i++){

    if(!document.getElementById("pic"+i)){

      MaxImg=i-1;

      break;

    }else{

      addMouseActions(document.getElementById("pic"+i));

    }

  }  



  if(document.getElementById("num1")) hasNum=true;

  if(MaxImg > 0)

    playit();  /**   绗竴娆″紑濮嬭鏃� */

}



function initialization(){   /**  鑷姩鍒囨崲 */

  if(NowImg == MaxImg) 

    next = 1;

  else

   next = NowImg + 1;



  document.getElementById("pic" + next).style.display="";

  filterShowIt(document.getElementById("pic" + next));

  document.getElementById("pic" + NowImg).style.display="none";



  if(hasNum) {

    for (var i=1;i<=MaxImg;i++){

       document.getElementById("num"+i).className="link";

      if(i == next){

        document.getElementById("num"+i).className="current";

      }

    }      

  }



  if(NowImg == MaxImg) 

    NowImg = 1;

  else

    NowImg++;    



  playit();    /**  鏂扮殑璁℃椂 */



}



function showit(x){    /**   鎵嬪姩鍒囨崲 */

  if(NowImg==x)return;

  if(MaxImg > 1){

    stopit();

    for (var i=1;i<=MaxImg;i++){

      document.getElementById("pic" + i).style.display="none";

      if(hasNum)

        document.getElementById("num"+i).className="link";

      if(i == x){

        document.getElementById("pic" + i).style.display="block";

        if(hasNum)

          document.getElementById("num"+i).className="current";

        filterShowIt(document.getElementById("pic" + i));

      }    

    }  

    NowImg=x;

  }

}



function playit(){  /**  閲嶆柊寮€濮嬭嚜鍔ㄨ鏃� */

  if(MaxImg > 1){

    clearTimeout(begin); 

    begin = setTimeout('initialization()', interval);  

  }

}



function stopit(){   /**  鍋滄璁℃椂 */

  if(MaxImg > 1)

    clearTimeout(begin); 

}



function filterShowIt(crosstick){    /**  娣诲姞鍒囨崲鐨勬护闀滄晥鏋� */

  if(document.body.getAttribute('cms:paFlag') )return;

  if (!crosstick.filters)return;

  var innerHtml = crosstick.innerHTML;

  crosstick.innerHTML="";

  crosstick.style.filter=transitionstext[Math.floor(Math.random() * (transitionstext.length))];

  crosstick.filters[0].Apply();

  crosstick.innerHTML =innerHtml; 

  crosstick.filters[0].play();

}



function addMouseActions(obj){  /**  缁欏璞″鍔犻紶鏍囦簨浠讹細绉诲叆鍋滄銆佺Щ鍑哄紑濮� */

  obj.onmouseover=function(){

    stopit();

  }



  obj.onmouseout=function(){

    playit();

  }

}



if(document.all)

window.attachEvent('onload',initMax);

else

window.addEventListener('load',initMax,false);