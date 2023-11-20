// 距離のボタン
function br_distance_50(){
    var br_distance_50 = document.getElementById('50_br');
    var br_distance_100 = document.getElementById("100_br");
    var br_distance_200 = document.getElementById("200_br");
  

    br_distance_50.checked=true;
    br_distance_100.checked=false;
    br_distance_200.checked=false;
  

    var brContent_50 = document.getElementById("br_50_content");
    var brContent_100 = document.getElementById("br_100_content");
    var brContent_200 = document.getElementById('br_200_content');
 
    brContent_50.style.display = 'flex';
    brContent_100.style.display = 'none';
    brContent_200.style.display = 'none';

}

function br_distance_100(){
    var br_distance_50 = document.getElementById('50_br');
    var br_distance_100 = document.getElementById("100_br");
    var br_distance_200 = document.getElementById("200_br");

    br_distance_50.checked=false;
    br_distance_100.checked=true;
    br_distance_200.checked=false;


    var brContent_50 = document.getElementById("br_50_content");
    var brContent_100 = document.getElementById("br_100_content");
    var brContent_200 = document.getElementById('br_200_content');

    brContent_50.style.display = 'none';
    brContent_100.style.display = 'flex';
    brContent_200.style.display = 'none';
}

function br_distance_200(){
    var br_distance_50 = document.getElementById('50_br');
    var br_distance_100 = document.getElementById("100_br");
    var br_distance_200 = document.getElementById("200_br");

    br_distance_50.checked=false;
    br_distance_100.checked=false;
    br_distance_200.checked=true;


    var brContent_50 = document.getElementById("br_50_content");
    var brContent_100 = document.getElementById("br_100_content");
    var brContent_200 = document.getElementById('br_200_content');

    
    brContent_50.style.display = 'none';
    brContent_100.style.display = 'none';
    brContent_200.style.display = 'flex';
}







