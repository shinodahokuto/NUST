// 距離のボタン
function ba_distance_50(){
    var ba_distance_50 = document.getElementById('50_ba');
    var ba_distance_100 = document.getElementById("100_ba");
    var ba_distance_200 = document.getElementById("200_ba");
  

    ba_distance_50.checked=true;
    ba_distance_100.checked=false;
    ba_distance_200.checked=false;
  

    var baContent_50 = document.getElementById("ba_50_content");
    var baContent_100 = document.getElementById("ba_100_content");
    var baContent_200 = document.getElementById('ba_200_content');
 
    baContent_50.style.display = 'flex';
    baContent_100.style.display = 'none';
    baContent_200.style.display = 'none';

}

function ba_distance_100(){
    var ba_distance_50 = document.getElementById('50_ba');
    var ba_distance_100 = document.getElementById("100_ba");
    var ba_distance_200 = document.getElementById("200_ba");

    ba_distance_50.checked=false;
    ba_distance_100.checked=true;
    ba_distance_200.checked=false;


    var baContent_50 = document.getElementById("ba_50_content");
    var baContent_100 = document.getElementById("ba_100_content");
    var baContent_200 = document.getElementById('ba_200_content');

    baContent_50.style.display = 'none';
    baContent_100.style.display = 'flex';
    baContent_200.style.display = 'none';
}

function ba_distance_200(){
    var ba_distance_50 = document.getElementById('50_ba');
    var ba_distance_100 = document.getElementById("100_ba");
    var ba_distance_200 = document.getElementById("200_ba");

    ba_distance_50.checked=false;
    ba_distance_100.checked=false;
    ba_distance_200.checked=true;


    var baContent_50 = document.getElementById("ba_50_content");
    var baContent_100 = document.getElementById("ba_100_content");
    var barContent_200 = document.getElementById('ba_200_content');

    
    baContent_50.style.display = 'none';
    baContent_100.style.display = 'none';
    barContent_200.style.display = 'flex';
}







