/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// Jawaban Soal - 01 :
/// - Ada dua Variable Scope in JavaScript yaitu local scope dan global scope.
/*      - Local Scope   : Variable local scope atau variable fungsi lokal adalah variabel yang dideklarasikan di dalam fungsi pada JavaScript.
        - Global Scope  : Semua variabel yang dibuat di luar fungsi disebut variabel global JavaScript. Objek semacam itu dapat diakses di seluruh situs web.
*/
///    - implementasi sederhana VARIABLE LOCAL SCOPE :
// dibagian ini variabel 'makanan' tidak dapat diakses
function simpleFunction() {
    var makanan = "Bakso";
    // jika variabel 'makanan' ditaruh di dalam sini maka variabel 'makanan' dapat diakses
}

///    - implementasi sederhana VARIABLE GLOBAL SCOPE :
var makanan = "Bakso";
// disini kamu bisa menggunakan variabel 'makanan'
function simpleFunction() {
    // disini kamu bisa menggunakan variabel 'makanan'
}


/// WRITE YOUR ANALYSIS HERE

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///Jawaban Soal -02 :
/// - Yang akan tampil di console.log adalah "Mariah"
/// - Alasan : Karena yang di console.log adalah function(printFirstName) bukan variable name.
const name = "John Watson";

function printFirstName(name) {
    return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));