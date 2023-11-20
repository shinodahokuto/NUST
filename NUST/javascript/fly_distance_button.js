// 距離のボタン
function fly_distance_50(){
    var fly_distance_50 = document.getElementById('50_fly');
    var fly_distance_100 = document.getElementById("100_fly");
    var fly_distance_200 = document.getElementById("200_fly");
  

    fly_distance_50.checked=true;
    fly_distance_100.checked=false;
    fly_distance_200.checked=false;
  

    var flyContent_50 = document.getElementById("50_fly_content");
    var flyContent_100 = document.getElementById("100_fly_content");
    var flyContent_200 = document.getElementById('200_fly_content');
 
    flyContent_50.style.display = 'flex';
    flyContent_100.style.display = 'none';
    flyContent_200.style.display = 'none';

}

function fly_distance_100(){
    var fly_distance_50 = document.getElementById('50_fly');
    var fly_distance_100 = document.getElementById("100_fly");
    var fly_distance_200 = document.getElementById("200_fly");

    fly_distance_50.checked=false;
    fly_distance_100.checked=true;
    fly_distance_200.checked=false;


    var flyContent_50 = document.getElementById("fly_50_content");
    var flyContent_100 = document.getElementById("fly_100_content");
    var flyContent_200 = document.getElementById('fly_200_content');

    flyContent_50.style.display = 'none';
    flyContent_100.style.display = 'flex';
    flyContent_200.style.display = 'none';
}

function fly_distance_200(){
    var fly_distance_50 = document.getElementById('50_fly');
    var fly_distance_100 = document.getElementById("100_fly");
    var fly_distance_200 = document.getElementById("200_fly");

    fly_distance_50.checked=false;
    fly_distance_100.checked=false;
    fly_distance_200.checked=true;

    var flyContent_50 = document.getElementById("fly_50_content");
    var flyContent_100 = document.getElementById("fly_100_content");
    var flyContent_200 = document.getElementById('fly_200_content');

    flyContent_50.style.display = 'none';
    flyContent_100.style.display = 'none';
    flyContent_200.style.display = 'flex';
}







