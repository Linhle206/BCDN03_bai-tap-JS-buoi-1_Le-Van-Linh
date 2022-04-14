// Bài 5

/**
 * Khối 1: input
 *    num
 * Khối 2:
 *    Bước 1: tạo biến và gán giá trị khởi tạo
 *    Bước 2: xây dựng công thức tính toán
 *    sum = num % 10 + num / 10 - (num % 10) / 10
 *    Bước 3: hiển thị kết quả
 * Khối 3: output
 *    sum (tổng 2 kí số)
 */

//Bước 1:
var num = 26;
var sum = 0;

//bước 2:
sum = num % 10 + num / 10 - (num % 10) / 10

//Bước 3:
console.log("Bài 5:")
console.log("Tổng 2 kí số: " + sum)