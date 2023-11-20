// 距離のボタン
function fr_distance_50(){
    var fr_distance_50 = document.getElementById('50_fr');
    var fr_distance_100 = document.getElementById("100_fr");
    var fr_distance_200 = document.getElementById("200_fr");
    var fr_distance_400 = document.getElementById("400_fr");
    var fr_distance_800 = document.getElementById("800_fr");
    var fr_distance_1500 = document.getElementById("1500_fr");

    fr_distance_50.checked=true;
    fr_distance_100.checked=false;
    fr_distance_200.checked=false;
    fr_distance_400.checked=false;
    fr_distance_800.checked=false;
    fr_distance_1500.checked=false;

    var freeContent_50 = document.getElementById("fr_50_content");
    var freeContent_100 = document.getElementById("fr_100_content");
    var freeContent_200 = document.getElementById('fr_200_content');
    var freeContent_400 = document.getElementById('fr_400_content');
    var freeContent_800= document.getElementById('fr_800_content');
    var freeContent_1500 = document.getElementById('fr_1500_content');
    
    freeContent_50.style.display = 'flex';
    freeContent_100.style.display = 'none';
    freeContent_200.style.display = 'none';
    freeContent_400.style.display = 'none';
    freeContent_800.style.display = 'none';
    freeContent_1500.style.display = 'none';
}

function fr_distance_100(){
    var fr_distance_50 = document.getElementById('50_fr');
    var fr_distance_100 = document.getElementById("100_fr");
    var fr_distance_200 = document.getElementById("200_fr");
    var fr_distance_400 = document.getElementById("400_fr");
    var fr_distance_800 = document.getElementById("800_fr");
    var fr_distance_1500 = document.getElementById("1500_fr");

    fr_distance_50.checked=false;
    fr_distance_100.checked=true;
    fr_distance_200.checked=false;
    fr_distance_400.checked=false;
    fr_distance_800.checked=false;
    fr_distance_1500.checked=false;

    var freeContent_50 = document.getElementById("fr_50_content");
    var freeContent_100 = document.getElementById("fr_100_content");
    var freeContent_200 = document.getElementById('fr_200_content');
    var freeContent_400 = document.getElementById('fr_400_content');
    var freeContent_800= document.getElementById('fr_800_content');
    var freeContent_1500 = document.getElementById('fr_1500_content');
    
    freeContent_50.style.display = 'none';
    freeContent_100.style.display = 'flex';
    freeContent_200.style.display = 'none';
    freeContent_400.style.display = 'none';
    freeContent_800.style.display = 'none';
    freeContent_1500.style.display = 'none';
}

function fr_distance_200(){
    var fr_distance_50 = document.getElementById('50_fr');
    var fr_distance_100 = document.getElementById("100_fr");
    var fr_distance_200 = document.getElementById("200_fr");
    var fr_distance_400 = document.getElementById("400_fr");
    var fr_distance_800 = document.getElementById("800_fr");
    var fr_distance_1500 = document.getElementById("1500_fr");

    fr_distance_50.checked=false;
    fr_distance_100.checked=false;
    fr_distance_200.checked=true;
    fr_distance_400.checked=false;
    fr_distance_800.checked=false;
    fr_distance_1500.checked=false;

    var freeContent_50 = document.getElementById("fr_50_content");
    var freeContent_100 = document.getElementById("fr_100_content");
    var freeContent_200 = document.getElementById('fr_200_content');
    var freeContent_400 = document.getElementById('fr_400_content');
    var freeContent_800= document.getElementById('fr_800_content');
    var freeContent_1500 = document.getElementById('fr_1500_content');
    
    freeContent_50.style.display = 'none';
    freeContent_100.style.display = 'none';
    freeContent_200.style.display = 'flex';
    freeContent_400.style.display = 'none';
    freeContent_800.style.display = 'none';
    freeContent_1500.style.display = 'none';
}



function fr_distance_400(){
    var fr_distance_50 = document.getElementById('50_fr');
    var fr_distance_100 = document.getElementById("100_fr");
    var fr_distance_200 = document.getElementById("200_fr");
    var fr_distance_400 = document.getElementById("400_fr");
    var fr_distance_800 = document.getElementById("800_fr");
    var fr_distance_1500 = document.getElementById("1500_fr");

    fr_distance_50.checked=false;
    fr_distance_100.checked=false;
    fr_distance_200.checked=false;
    fr_distance_400.checked=true;
    fr_distance_800.checked=false;
    fr_distance_1500.checked=false;

    var freeContent_50 = document.getElementById("fr_50_content");
    var freeContent_100 = document.getElementById("fr_100_content");
    var freeContent_200 = document.getElementById('fr_200_content');
    var freeContent_400 = document.getElementById('fr_400_content');
    var freeContent_800= document.getElementById('fr_800_content');
    var freeContent_1500 = document.getElementById('fr_1500_content');
    
    freeContent_50.style.display = 'none';
    freeContent_100.style.display = 'none';
    freeContent_200.style.display = 'none';
    freeContent_400.style.display = 'flex';
    freeContent_800.style.display = 'none';
    freeContent_1500.style.display = 'none';
}

function fr_distance_800(){
    var fr_distance_50 = document.getElementById('50_fr');
    var fr_distance_100 = document.getElementById("100_fr");
    var fr_distance_200 = document.getElementById("200_fr");
    var fr_distance_400 = document.getElementById("400_fr");
    var fr_distance_800 = document.getElementById("800_fr");
    var fr_distance_1500 = document.getElementById("1500_fr");

    fr_distance_50.checked=false;
    fr_distance_100.checked=false;
    fr_distance_200.checked=false;
    fr_distance_400.checked=false;
    fr_distance_800.checked=true;
    fr_distance_1500.checked=false;

    var freeContent_50 = document.getElementById("fr_50_content");
    var freeContent_100 = document.getElementById("fr_100_content");
    var freeContent_200 = document.getElementById('fr_200_content');
    var freeContent_400 = document.getElementById('fr_400_content');
    var freeContent_800= document.getElementById('fr_800_content');
    var freeContent_1500 = document.getElementById('fr_1500_content');
    
    freeContent_50.style.display = 'none';
    freeContent_100.style.display = 'none';
    freeContent_200.style.display = 'none';
    freeContent_400.style.display = 'none';
    freeContent_800.style.display = 'flex';
    freeContent_1500.style.display = 'none';
}
function fr_distance_1500(){
    var fr_distance_50 = document.getElementById('50_fr');
    var fr_distance_100 = document.getElementById("100_fr");
    var fr_distance_200 = document.getElementById("200_fr");
    var fr_distance_400 = document.getElementById("400_fr");
    var fr_distance_800 = document.getElementById("800_fr");
    var fr_distance_1500 = document.getElementById("1500_fr");

    fr_distance_50.checked=false;
    fr_distance_100.checked=false;
    fr_distance_200.checked=false;
    fr_distance_400.checked=false;
    fr_distance_800.checked=false;
    fr_distance_1500.checked=true;

    var freeContent_50 = document.getElementById("fr_50_content");
    var freeContent_100 = document.getElementById("fr_100_content");
    var freeContent_200 = document.getElementById('fr_200_content');
    var freeContent_400 = document.getElementById('fr_400_content');
    var freeContent_800= document.getElementById('fr_800_content');
    var freeContent_1500 = document.getElementById('fr_1500_content');
    
    freeContent_50.style.display = 'none';
    freeContent_100.style.display = 'none';
    freeContent_200.style.display = 'none';
    freeContent_400.style.display = 'none';
    freeContent_800.style.display = 'none';
    freeContent_1500.style.display = 'flex';
}



