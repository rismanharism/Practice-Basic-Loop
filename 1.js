// ============== 1 ===============
/*
Buatlah kode javascript menggunakan pseudocode di bawah ini

STORE mobil WITH 7
STORE motor WITH 3
STORE range WITH mobil PLUS motor

FOR i FROM 0 TO range INCREMENT BY 1
    IF i LESS THAN mobil
        DISPLAY "ini mobil"
    ELSE 
        DISPLAY "ini motor"
    END IF
END FOR
*/

let mobil = 7;
let motor = 3;
let range = mobil + motor

for (let i = 0 ; i < range; i++){
    if (i < mobil)
    console.log("ini mobil");
    else{
        console.log("ini motor");
    }
}