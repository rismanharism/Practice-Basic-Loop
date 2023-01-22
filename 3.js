/*
Buatlah program yang digunakan untuk menghitung hasil penjumlahan dari tiap angka yang berada di dalam string

contoh input:
var stringAngka = '26321896232';

output: 44

didapat dari 2 + 6 + 3 + 2 + 1 dst
*/

// tulis code di bawah sini
var stringAngka = '26321896232';
let hasil = 0;
for( let i = 0; i < stringAngka.length; i++){
    hasil += Number(stringAngka[i])
}
console.log(hasil)