const nama = "skilvul"; /// String
const age = 10; /// Number
const isMarried = false; /// Boolean

/// Soal - 01
/// Gunakan built-in function yang dimiliki tipe data String untuk mengubah variable name menjadi huruf besar
//const upperCase = name;
///Jawaban Soal - 01 :
console.log(nama.toUpperCase());

/// Soal - 02
/// Gunakan built-in function yang dimiliki oleh Javascript, agar kita mengetahui apa tipe data yang dimiliki oleh variable age
///Jawaban Soal - 02 :
console.log(typeof age);

/// Soal - 03
/// Gunakan built-in function yang dimiliki tipe data Number untuk mengambil 2 nilai dibelakang koma dari PI
const pi = 3.141592653589793238;
const twoDigitsOfPi = pi.toFixed(2);
///Jawaban Soal - 03 :
console.log(twoDigitsOfPi);

/// Soal - 04
/// Gunakan built-in function yang dimiliki Javascript untuk mengetahui apakah nilai dibawah ini dapat dikategorikan sebagai Number atau tidak (NaN)
const isNotNumber = "10000";
///Jawaban Soal - 04 :
console.log(isNaN(isNotNumber));

/// Soal - 05
/// Gunakan built-in function yang dimiliki oleh Javascript untuk mengubah sebuah String menjadi Number
const stringToNumber = "1000";
///Jawaban Soal - 05 :
console.log(stringToNumber.toString());