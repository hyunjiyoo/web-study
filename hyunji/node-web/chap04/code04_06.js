/* Query String 모듈 */
var url = require('url');
var querystring = require('querystring');

var parsedObject = url.parse('http://www.hanbit.co.kr/media/books/book_view.html?p_code=B9267655530');
console.log(querystring.parse(parsedObject.query));