let main_div = document.createElement('div');
main_div.className = "main_box";
document.body.append(main_div);
let scrin = document.createElement('div');
scrin.className = "scrin";
main_div.append(scrin);
let keyboard = document.createElement('div');
keyboard.className = "keyboard";
main_div.append(keyboard);
let ant=[1025, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48,
     45, 61, 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 92, 
     1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, 1071, 1063,
     1057, 1052, 1048, 1058, 1068, 1041, 1070, 46];
let ret =[96, 49, 50, 51, 52, 53, 
    54, 55, 56, 57, 48, 45, 61,
     81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 
     91, 93, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 92, 92, 90,
      88, 67, 86, 66, 78, 77, 44, 46, 47]
function init(){
    let out ='';
    for(let i=0; i< ant.length; i++){
        if(i==13){
            out+='<div class="antyui">' + 'Backspase' + '</div>'
            out+='<div class="guni">' + 'Tab' + '</div>'  
        }
        if(i==26){
            out+='<div class="antyu">' + 'Del' + '</div>'
            out+='<div class="antyui">' + 'CapsLock' + '</div>'  
        }
        if(i==37){
            out+='<div class="enter">' + 'Enter' + '</div>'
            out+='<div class="antyui">' + 'Shift' + '</div>'  
        }
            out+='<div class="an" data="' + ant[i] + '">' + (String.fromCharCode(ant[i])).toLowerCase() + '</div>'
    }
            out+='<div class="antyu">' + '&uarr;' + '</div>'
            out+='<div class="enter">' + 'Shift' + '</div>'
            out+='<div class="antyu">' + 'Cntr' + '</div>'
            out+='<div class="antyu">' + 'Win' + '</div>'
            out+='<div class="antyu">' + 'Alt' + '</div>'
            out+='<div class="probel"></div>' 
            out+='<div class="antyu">' + 'Alt' + '</div>'
            out+='<div class="antyu">' + '&larr;' + '</div>'
            out+='<div class="antyu">' + '&darr;' + '</div>'
            out+='<div class="antyu">' + '&rarr;' + '</div>'
            out+='<div class="antyu">' + 'Cntr' + '</div>'
    keyboard.innerHTML=out
}
init()
document.onkeypress=function(event){
    console.log(event.code)
    console.log(event.keyCode)
    let pen=(String.fromCharCode(event.keyCode)).toLowerCase()
    iyp=iyp+pen
    scrin.innerHTML=iyp.toLowerCase()
}