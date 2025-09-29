//menerima input dari CLI pada kata ke 3 (saya gatau julukannya apa)
const input3 = process.argv[2];
let orderedChar = [];

//Fungsi untuk memotong strings jadi array of character
//Meski saya tau ada built-in JS berupa split(), saya mau belajar logikanya
function spliceArray(arr){
    let contentArray = [];
    for (let i = 0; i < arr.length; i++){
        contentArray.push(arr[i]);
    }
    return contentArray;
}

//Fungsi Shuffling (saya ambil dari proyek sebelumnya dan memodif sedikit)
function fisherYates (arrai) {
    const isidata = arrai.length;
    for (let i = isidata - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arrai[i];
        arrai[i] = arrai[j];
        arrai[j] = temp;
    }
    return arrai;
}
if(!input3){
    console.error("Mohon masukkan kata yang ingin di acak!");
    return;
} else {
    //Executing Fungsi yang telah dibuat
    orderedChar = fisherYates(spliceArray(input3));
}

//Printout hasil kembali
console.log(orderedChar.join(''));