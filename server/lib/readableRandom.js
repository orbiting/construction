const readableRandom = function(len) {
  var charset, i, random;
  random = '';
  charset = 'ABCDEFGHJKMNPQRSTUVWXYZ123456789';
  i = 0;
  while (i < len) {
    random += charset.charAt(Math.floor(Math.random() * charset.length));
    i++;
  }
  return random;
};

module.exports = readableRandom;
