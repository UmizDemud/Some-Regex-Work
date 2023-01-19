/**
 * @param {string} text
 *
 * @returns {string[]}
 */
function getTopThree(text) {
  const record = {};
  const words = text.toLowerCase()
    .split(/\s|\\|,|\.|&|\$|\(|\)|\?|#|:/)
    .filter(word => word && word.length);

  for (const word of words) {
    if (word in record) {
      record[word] += 1;
    } else {
      record[word] = 1;
    }
  }

  const list = Object.entries(record)
    .sort(([_word1, count1], [_word2, count2]) => count2 - count1)
    .slice(0, 3)
    .map(item => item[0]);

  return list;
}
