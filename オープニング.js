myColor = [
    "000000","101010","202020","303030",
    "404040","505050","606060","707070",
    "808080","909090","A0A0A0","B0B0B0",
    "C0C0C0","D0D0D0","E0E0E0","FFFFFF"
];

const $body =document.getElementById("body"); 
let count=0;
function opening(){
    if(count!==16){
        $body.style.backgroundColor ='#'+myColor[count];
        myTime = (count == 0 || count ==15) ? 1000 : 50;
        setTimeout(opening,myTime);
        count++
    }else{
        document.write("<img src='https://imgc.eximg.jp/i=https%253A%252F%252Fs.eximg.jp%252Fexnews%252Ffeed%252FOtapol%252FOtapol_201510_post_4309_1.jpg,zoom=600,quality=70,type=jpg' style=width:100%; height:100;>");
    };
};
onload= opening;
