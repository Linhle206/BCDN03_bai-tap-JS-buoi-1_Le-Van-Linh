//Bài 2

/**
 * Khối 1: input
 *    num1
 *    num2
 *    num3
 *    num4
 *    num5
 * Khối 2:
 *    Bước 1: tạo biến và gán giá trị khởi tạo
 *    Bước 2: xây dựng công thức tính toán
 *    TB = (num1 + num2 + num3 + num4 + num5) / 5
 *    Bước 3: hiển thị kết quả
 * Khối 3: output
 *    TB
 */


// Bước 1
var num1 = 1.2;
var num2 = 2.6;
var num3 = 3.1;
var num4 = 7.9;
var num5 = 1.6;
var TB = 0;

//Bước 2
TB = (num1 + num2 + num3 + num4 + num5) / 5

//Bước 3
console.log("bài 2:")
console.log("số trung bình: " + TB.toFixed(2))
