function open_menu(){
    document.getElementById('menu_mob').style.visibility= 'visible';
    document.getElementById('nav_bar').style.visibility= 'hidden';
    document.getElementById('cuerpo').style.visibility= 'hidden';
    document.getElementById('info_pag').style.visibility= 'hidden';
    document.getElementById('body').style.overflow= 'hidden';
}

function close_menu(){
    document.getElementById('menu_mob').style.visibility= 'hidden';
    document.getElementById('nav_bar').style.visibility= 'visible';
    document.getElementById('cuerpo').style.visibility= 'visible';
    document.getElementById('info_pag').style.visibility= 'visible';
    document.getElementById('body').style.overflow= 'visible';
    

}