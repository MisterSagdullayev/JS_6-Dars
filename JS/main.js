/* localStorage in JS */

/*localStorage.setItem('ism','Islom');
localStorage.setItem('familiya','Toshkandov');
localStorage.setItem('yoshi','20 yoshda')

localStorage['ism'] = "Shaxzoda";
localStorage['familiya'] = "Toshkandova";
localStorage['yoshi'] = "22 yoshda"*/

/*localStorage.removeItem('ism');
localStorage.removeItem('familiyasi');
localStorage.removeItem('yoshi')*/

/*localStorage.clear();*/

/*let uningIsmi = localStorage.getItem('ism');
let uningFamiliyasi = localStorage.getItem('familiya')
let uningYoshi = localStorage.getItem('yoshi')*/

/*console.log(uningIsmi,uningFamiliyasi,uningYoshi);*/



/* https request in JS */

/*let sorov = new XMLHttpRequest();
sorov.open("get","https://getty.uz/serverdan/malumot/olish");
sorov.send();

sorov.onload = function () {
    console.log(sorov.responseText);
}*/



/* JSON in JS */

/*let jsFile = {ism: "Shaxzoda", yoshi: 22};*/          /* JS Object */
/*let jsonFile = '{"ism": "Islom","yoshi":22}';*/       /* JSON */

/*console.log(JSON.stringify(jsFile));*/
/*console.log(JSON.parse(jsonFile));*/

/*
let sorov = new XMLHttpRequest();
sorov.open("get","jsonFile.json");
sorov.send();

sorov.onload = function () {
    console.log(JSON.parse(sorov.responseText));
}*/

/* indexOf in JS (matn ichidan matn belgilarning index tartib raqamini topish) */

/*let matn = "sen gapir sen men esa sen bilan yozib boraman!";

let birinchiSenIndeksi = matn.indexOf('sen');

console.log(matn.indexOf('sen',birinchiSenIndeksi + 1));*/


let matn = "Salom hammaga! salom berdim hammaga. salom";


let yangiMatn = matn.replace(/salom|hammaga/gi,function (soz) {
    if (soz == "Salom" || soz == "salom"){
        return "alik";
    }else if (soz == "hammaga"){
        return "barchaga";
    }
})

console.log(yangiMatn);