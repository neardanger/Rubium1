var crypto = require('crypto');



exports.createSalt = function(){
  return crypto.randomBytes(130).toString('base64');
}

exports.hashPwd=function(salt,pwd){
  var hmac = crypto.createHmac('sha1',salt)
  hmac.setEncoding('hex')
  hmac.write(pwd)
  hmac.end();
  return hmac.read()
}
