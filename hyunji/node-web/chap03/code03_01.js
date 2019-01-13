/* __filename : 현재 실행중인 코드의 파일 경로 */
console.log('filename:', __filename);
/* __dirname: 현재 실행중인 코드의 폴더 경로 */
console.log('dirname:', __dirname);

/* 특수문자 활용한 출력결과 */
console.log('%d + %d = %d', 273, 52, 273 + 52, 52273);
console.log('%d + %d = %d & %d', 273, 52, 273 + 52);
/* 273 + 52 = 325 52273
   273 + 52 = 325 & %d */