var count = 1;

setInterval( function(){
    document.getElementById('slide' + count).checked = true;
    count ++;
    if (count > 4){
        count = 1;
    }
},1700 );