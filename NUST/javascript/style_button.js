
function change_style_free() {
    var free_button = document.getElementById('free');
    var breast_button = document.getElementById('breast');
    var fly_button = document.getElementById('fly');
    var back_button = document.getElementById('back');
    var IM_button = document.getElementById('IM');
    var relay_button = document.getElementById('relay');


    free_button.checked=true;
    breast_button.checked=false;
    fly_button.checked=false;
    back_button.checked=false;
    IM_button.checked=false;
    relay_button.checked=false;

    var freeContent = document.getElementById('freeContent');
    var breastContent = document.getElementById('breastContent');
    var flyContent = document.getElementById("flyContent");
    var backContent = document.getElementById('backContent');
    var IMContent = document.getElementById('IMContent');
    var relayContent = document.getElementById('relayContent');
    
    freeContent.style.display = 'block';
    breastContent.style.display = 'none';
    flyContent.style.display = 'none';
    backContent.style.display = 'none';
    IMContent.style.display = 'none';
    relayContent.style.display = 'none';

    }


function change_style_breast()  {
    var free_button = document.getElementById('free');
    var breast_button = document.getElementById('breast');
    var fly_button = document.getElementById('fly');
    var back_button = document.getElementById('back');
    var IM_button = document.getElementById('IM');
    var relay_button = document.getElementById('relay');


    free_button.checked=false;
    breast_button.checked=true;
    fly_button.checked=false;
    back_button.checked=false;
    IM_button.checked=false;
    relay_button.checked=false;

    var freeContent = document.getElementById('freeContent');
    var breastContent = document.getElementById('breastContent');
    var flyContent = document.getElementById('flyContent');
    var backContent = document.getElementById('backContent');
    var IMContent = document.getElementById('IMContent');
    var relayContent = document.getElementById('relayContent');
    
    freeContent.style.display = 'none';
    breastContent.style.display = 'block';
    flyContent.style.display="none";
    backContent.style.display="none";
    IMContent.style.display="none";
    relayContent.style.display="none";


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

function change_style_fly() {
    var free_button = document.getElementById('free');
    var breast_button = document.getElementById('breast');
    var fly_button = document.getElementById('fly');
    var back_button = document.getElementById('back');
    var IM_button = document.getElementById('IM');
    var relay_button = document.getElementById('relay');


    free_button.checked=false;
    breast_button.checked=false;
    fly_button.checked=true;
    back_button.checked=false;
    IM_button.checked=false;
    relay_button.checked=false;

    var freeContent = document.getElementById('freeContent');
    var breastContent = document.getElementById('breastContent');
    var flyContent = document.getElementById('flyContent');
    var backContent = document.getElementById('backContent');
    var IMContent = document.getElementById('IMContent');
    var relayContent = document.getElementById('relayContent');
    
    freeContent.style.display = 'none';
    breastContent.style.display = 'none';
    flyContent.style.display="block";
    backContent.style.display="none";
    IMContent.style.display="none";
    relayContent.style.display="none";

    var fly_distance_50 = document.getElementById('50_fly');
    var fly_distance_100 = document.getElementById("100_fly");
    var fly_distance_200 = document.getElementById("200_fly");
  

    fly_distance_50.checked=true;
    fly_distance_100.checked=false;
    fly_distance_200.checked=false;
  

    var flyContent_50 = document.getElementById("fly_50_content");
    var flyContent_100 = document.getElementById("fly_100_content");
    var flyContent_200 = document.getElementById('fly_200_content');
 
    flyContent_50.style.display = 'flex';
    flyContent_100.style.display = 'none';
    flyContent_200.style.display = 'none';

  
    }
function change_style_back() {
    var free_button = document.getElementById('free');
    var breast_button = document.getElementById('breast');
    var fly_button = document.getElementById('fly');
    var back_button = document.getElementById('back');
    var IM_button = document.getElementById('IM');
    var relay_button = document.getElementById('relay');


    free_button.checked=false;
    breast_button.checked=false;
    fly_button.checked=false;
    back_button.checked=true;
    IM_button.checked=false;
    relay_button.checked=false;

    var freeContent = document.getElementById('freeContent');
    var breastContent = document.getElementById('breastContent');
    var flyContent = document.getElementById('flyContent');
    var backContent = document.getElementById('backContent');
    var IMContent = document.getElementById('IMContent');
    var relayContent = document.getElementById('relayContent');
    
    freeContent.style.display = 'none';
    breastContent.style.display = 'none';
    flyContent.style.display="none";
    backContent.style.display="block";
    IMContent.style.display="none";
    relayContent.style.display="none";

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
function change_style_IM() {
    var free_button = document.getElementById('free');
    var breast_button = document.getElementById('breast');
    var fly_button = document.getElementById('fly');
    var back_button = document.getElementById('back');
    var IM_button = document.getElementById('IM');
    var relay_button = document.getElementById('relay');


    free_button.checked=false;
    breast_button.checked=false;
    fly_button.checked=false;
    back_button.checked=false;
    IM_button.checked=true;
    relay_button.checked=false;

    var freeContent = document.getElementById('freeContent');
    var breastContent = document.getElementById('breastContent');
    var flyContent = document.getElementById('flyContent');
    var backContent = document.getElementById('backContent');
    var IMContent = document.getElementById('IMContent');
    var relayContent = document.getElementById('relayContent');
    
    freeContent.style.display = 'none';
    breastContent.style.display = 'none';
    flyContent.style.display="none";
    backContent.style.display="none";
    IMContent.style.display="block";
    relayContent.style.display="none";

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

function change_style_relay() {
    var free_button = document.getElementById('free');
    var breast_button = document.getElementById('breast');
    var fly_button = document.getElementById('fly');
    var back_button = document.getElementById('back');
    var IM_button = document.getElementById('IM');
    var relay_button = document.getElementById('relay');


    free_button.checked=false;
    breast_button.checked=false;
    fly_button.checked=false;
    back_button.checked=false;
    IM_button.checked=false;
    relay_button.checked=true;

    var freeContent = document.getElementById('freeContent');
    var breastContent = document.getElementById('breastContent');
    var flyContent = document.getElementById('flyContent');
    var backContent = document.getElementById('backContent');
    var IMContent = document.getElementById('IMContent');
    var relayContent = document.getElementById('relayContent');
    
    freeContent.style.display = 'none';
    breastContent.style.display = 'none';
    flyContent.style.display="none";
    backContent.style.display="none";
    IMContent.style.display="none";
    relayContent.style.display="block";

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

   