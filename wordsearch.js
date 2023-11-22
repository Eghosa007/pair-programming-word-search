const wordSearch = (letters, word) => {

  // Mapping though the ls array horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));

  // Checking if the word is included in the word search horizontally
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // Create an empty array to transpose the horizontal to vertical array
  let verticalJoin = [];


  // We need to nest a for loop inside a loop in order to iterate through the rows and columns
  // Transpose the horizontal join into the vertical join
  for (let i = 0; i < horizontalJoin.length; i++) {
    for (let j = 0; j < horizontalJoin[i].length; j++) {
      if (!verticalJoin[j]) {
        verticalJoin.push([]);
      }
      verticalJoin[j][i] = horizontalJoin[i][j];
    }
  }

  // Once we have the vertical arrays, we need to map through it to search for the words
  verticalJoin = verticalJoin.map((v) => {
    return v.join('');
  });

  // Checking if the word is included in the word search vertically
  for (v of verticalJoin) {
    if (v.includes(word)) {
      return true;
    }
  }
  // If no matches are found, return false
  return false;
};

module.exports = wordSearch;
