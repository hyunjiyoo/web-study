/* crypto 모듈을 사용한 해시 */
var crypto = require('crypto');

var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

console.log('crypto_hash:', output);