// 距離のボタン
function relay_distance_200(){
    var relay_distance_200 = document.getElementById('200_relay');
    var relay_distance_400 = document.getElementById("400_relay");
    var relay_distance_800 = document.getElementById("800_relay");
    var medley_relay_distance = document.getElementById("medley_relay");
  

    relay_distance_200.checked=true;
    relay_distance_400.checked=false;
    relay_distance_800.checked=false;
    medley_relay_distance.checked=false;

    var relayContent_200 = document.getElementById("relay_200_content");
    var relayContent_400 = document.getElementById("relay_400_content");
    var relayContent_800 = document.getElementById("relay_800_content");
    var relayContent_medley = document.getElementById("medley_content");

    relayContent_200.style.display = 'flex';
    relayContent_400.style.display = 'none';
    relayContent_800.style.display = 'none';
    relayContent_medley.style.display = 'none';
}

function relay_distance_400(){
    var relay_distance_200 = document.getElementById('200_relay');
    var relay_distance_400 = document.getElementById("400_relay");
    var relay_distance_800 = document.getElementById('800_relay');
    var medley_relay_distance = document.getElementById('medley_relay');
  

    relay_distance_200.checked=false;
    relay_distance_400.checked=true;
    relay_distance_800.checked=false;
    medley_relay_distance.checked=false;

    var relayContent_200 = document.getElementById("relay_200_content");
    var relayContent_400 = document.getElementById("relay_400_content");
    var relayContent_800 = document.getElementById("relay_800_content");
    var relayContent_medley = document.getElementById("medley_content");
    
 
    relayContent_200.style.display = 'none';
    relayContent_400.style.display = 'flex';
    relayContent_800.style.display = 'none';
    relayContent_medley.style.display = 'none';
}

function relay_distance_800(){
    var relay_distance_200 = document.getElementById("200_relay");
    var relay_distance_400 = document.getElementById("400_relay");
    var relay_distance_800 = document.getElementById("800_relay");
    var medley_relay_distance = document.getElementById("medley_relay");
  

    relay_distance_200.checked = false;
    relay_distance_400.checked = false;
    relay_distance_800.checked = true;
    medley_relay_distance.checked = false;

    var relayContent_200 = document.getElementById("relay_200_content");
    var relayContent_400 = document.getElementById("relay_400_content");
    var relayContent_800 = document.getElementById("relay_800_content");
    var relayContent_medley = document.getElementById("medley_content");
    
 
    relayContent_200.style.display = 'none';
    relayContent_400.style.display = 'none';
    relayContent_800.style.display = 'flex';
    relayContent_medley.style.display ='none';
}
function medley_relay(){
    var relay_distance_200 = document.getElementById("200_relay");
    var relay_distance_400 = document.getElementById("400_relay");
    var relay_distance_800 = document.getElementById("800_relay");
    var medley_relay_distance = document.getElementById("medley_relay");
  

    relay_distance_200.checked = false;
    relay_distance_400.checked = false;
    relay_distance_800.checked = false;
    medley_relay_distance.checked = true;

    var relayContent_200 = document.getElementById("relay_200_content");
    var relayContent_400 = document.getElementById("relay_400_content");
    var relayContent_800 = document.getElementById('relay_800_content');
    var relayContent_medley = document.getElementById('medley_content');
    
 
    relayContent_200.style.display = 'none';
    relayContent_400.style.display = 'none';
    relayContent_800.style.display = 'none';
    relayContent_medley.style.display='flex';
}