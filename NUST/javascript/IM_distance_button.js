// 距離のボタン
function IM_distance_100(){
    var IM_distance_100 = document.getElementById('100_IM');
    var IM_distance_200 = document.getElementById("200_IM");
    var IM_distance_400 = document.getElementById("400_IM");
  

    IM_distance_100.checked=true;
    IM_distance_200.checked=false;
    IM_distance_400.checked=false;
  

    var IMContent_100 = document.getElementById("IM_100_content");
    var IMContent_200 = document.getElementById("IM_200_content");
    var IMContent_400 = document.getElementById('IM_400_content');
 
    IMContent_100.style.display = 'flex';
    IMContent_200.style.display = 'none';
    IMContent_400.style.display = 'none';

}

function IM_distance_200(){
    var IM_distance_100 = document.getElementById('100_IM');
    var IM_distance_200 = document.getElementById("200_IM");
    var IM_distance_400 = document.getElementById("400_IM");
  

    IM_distance_100.checked=false;
    IM_distance_200.checked=true;
    IM_distance_400.checked=false;
  

    var IMContent_100 = document.getElementById("IM_100_content");
    var IMContent_200 = document.getElementById("IM_200_content");
    var IMContent_400 = document.getElementById('IM_400_content');
 
    IMContent_100.style.display = 'none';
    IMContent_200.style.display = 'flex';
    IMContent_400.style.display = 'none';
}


function IM_distance_400(){
    var IM_distance_100 = document.getElementById('100_IM');
    var IM_distance_200 = document.getElementById("200_IM");
    var IM_distance_400 = document.getElementById("400_IM");
  

    IM_distance_100.checked=false;
    IM_distance_200.checked=false;
    IM_distance_400.checked=true;
  

    var IMContent_100 = document.getElementById("IM_100_content");
    var IMContent_200 = document.getElementById("IM_200_content");
    var IMContent_400 = document.getElementById('IM_400_content');
 
    IMContent_100.style.display = 'none';
    IMContent_200.style.display = 'none';
    IMContent_400.style.display = 'flex';

}



