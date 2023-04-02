


let sonuc ;


function Add(){
 let gün = Number(document.getElementById("gün").value);
 let ay = document.getElementById("ay").value;
 

if( gün >= 21  &&  ay == "Mart" || gün <= 20 && ay == "Nisan"){
         sonuc = " Burcunuz: Koç";               
}else if( gün >= 21 && ay == "Nisan" || gün <=20 && ay == "Mayıs" ){
                        sonuc = " Burcunuz: Boğa";
}else if( gün >= 21 && ay == "Mayıs" || gün <=20 && ay == "Haziran" ){
                        sonuc = " Burcunuz: İkizler";
}else if( gün >= 21 && ay == "Haziran" || gün <=20 && ay == "Temmuz" ){
                        sonuc = " Burcunuz: Yengeç";
}else if( gün >= 23 && ay == "Temmuz" || gün <=22 && ay == "Ağustos" ){
                        sonuc = " Burcunuz: Aslan";
}else if( gün >= 23 && ay == "Ağustos" || gün <=22 && ay == "Eylül" ){
                        sonuc = " Burcunuz: Başak";
}else if( gün >= 23 && ay == "Eylül" || gün <=22 && ay == "Ekim" ){
                        sonuc = " Burcunuz: Terazi";
}else if( gün >= 23 && ay == "Ekim" || gün <=22 && ay == "Kasım" ){
                        sonuc = " Burcunuz: Akrep";
}else if( gün >= 23 && ay == "Kasım" || gün <=21 && ay == "Aralık" ){
                        sonuc = " Burcunuz: Yay";
}else if( gün >= 22 && ay == "Aralık" || gün <=19 && ay == "Ocak" ){
                        sonuc = " Burcunuz: Oğlak";
}else if( gün >= 20 && ay == "Ocak" || gün <=18 && ay == "Şubat" ){
                        sonuc = " Burcunuz: Kova";
}else if( gün >= 19 && ay == "Şubat" || gün <=20 && ay == "Mart" ){
                        sonuc = " Burcunuz: Balık";
}

document.getElementById("lblSonuc").innerHTML = "<BR>" + sonuc;

}
