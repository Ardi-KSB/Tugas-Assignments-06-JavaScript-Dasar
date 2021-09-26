/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// Jawaban Soal - 01
/*  - Type Error        : Jika kita menggunakan nilai yang berada di luar kisaran tipe yang diharapkan.
    - Reference Error   : Jika kita menggunakan (referensi) variabel yang belum dideklarasikan.
    - Range Error       : Jika kita menggunakan angka yang berada di luar rentang nilai legal.
    - Syntax Error      : SyntaxError muncul jika kita mencoba mengevaluasi kode dengan kesalahan sintaks.
*/

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// Jawaban Soal - 02
/*  - Yang akan terjadi adalah muncul Error.
    - Termasuk katagori Reference Error.
    - Karena salaryWithVar dan salaryWithConst belum dideklarasikan terlebih dahulu.
*/

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;