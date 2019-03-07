
function generateNumber(size) {
  let value = '0123456789';
  return Array(size)
    .join()
    .split(',')
    .map(() => value.charAt(Math.floor(Math.random() * value.length)))
    .join('');
}

module.exports = {
	generateNumber,
};