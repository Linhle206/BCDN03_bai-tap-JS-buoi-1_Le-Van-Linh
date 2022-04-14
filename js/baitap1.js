// Bài 1

/**
 * Khối 1: input
 *    l1N (lương 1 ngày)
 *    N ( số ngày làm)
 * Khối 2:
 *    Bước 1: tạo biến và gán giá trị khởi tạo
 *    Bước 2: xây dựng công thức tính toán
 *    l = l1N * N
 *    Bước 3: hiển thị kết quả
 * Khối 3: output
 *    l (lương)
 */

//B1
var l1N = 100000;
var N = 15;
var l = 0;

//B2 
l = l1N * N

//B3
console.log("Bài 1:")
console.log("tổng lương: " + l.toLocaleString() + " VND")

