module.exports = (string) => {
  let charArray = string.split('');
  charArray.sort((a, b) => {
    return b.charCodeAt() - a.charCodeAt();
  });
  return charArray.join('');
}