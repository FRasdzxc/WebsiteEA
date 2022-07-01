function cMusic(music){
    document.getElementById('musicPlayer').src = music;
}
function cWebPage(url){
    window.location = url;
}
function cStatus1(){
    if(document.getElementById('item1').style.display == "none"){
        document.getElementById('item1').style.display = "flex";
        document.getElementById('item2').style.display = "flex";
        document.getElementById('item3').style.display = "flex";
        document.getElementById('item4').style.display = "flex";
        document.getElementById('item5').style.display = "flex";
        document.getElementById('item6').style.display = "flex";
        document.getElementById('item7').style.display = "flex";
    }else{
        document.getElementById('item1').style.display = "none";
        document.getElementById('item2').style.display = "none";
        document.getElementById('item3').style.display = "none";
        document.getElementById('item4').style.display = "none";
        document.getElementById('item5').style.display = "none";
        document.getElementById('item6').style.display = "none";
        document.getElementById('item7').style.display = "none";
    }
}
function cStatus2(){
    if(document.getElementById('item8').style.display == "none"){
        document.getElementById('item8').style.display = "flex";
        document.getElementById('item9').style.display = "flex";
        document.getElementById('item10').style.display = "flex";
        document.getElementById('item11').style.display = "flex";
        document.getElementById('item12').style.display = "flex";
        document.getElementById('item13').style.display = "flex";
        document.getElementById('item14').style.display = "flex";
        document.getElementById('item15').style.display = "flex";
    }else{
        document.getElementById('item8').style.display = "none";
        document.getElementById('item9').style.display = "none";
        document.getElementById('item10').style.display = "none";
        document.getElementById('item11').style.display = "none";
        document.getElementById('item12').style.display = "none";
        document.getElementById('item13').style.display = "none";
        document.getElementById('item14').style.display = "none";
        document.getElementById('item15').style.display = "none";
    }
}
function cStatus3(){
    if(document.getElementById('item16').style.display == "none"){
        document.getElementById('item16').style.display = "flex";
        document.getElementById('item17').style.display = "flex";
    }else{
        document.getElementById('item16').style.display = "none";
        document.getElementById('item17').style.display = "none";
    }
}
var already = 0;
window.addEventListener('resize', function(event){
    if(window.innerWidth <= 800){
        if(already == 0){
            if(document.getElementById('item1').style.display == "flex"){
                cStatus1();
            }
            if(document.getElementById('item8').style.display == "flex"){
                cStatus2();
            }
            if(document.getElementById('item16').style.display == "flex"){
                cStatus3();
            }
            already = 1;
        }
    }
    if(window.innerWidth > 800){
        if(already == 1){
            if(document.getElementById('item1').style.display == "none"){
                cStatus1();
            }
            if(document.getElementById('item8').style.display == "none"){
                cStatus2();
            }
            if(document.getElementById('item16').style.display == "none"){
                cStatus3();
            }
            already = 0;
        }
    }
});