/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let result = 0;
  if ( preferences.length <= 2 ) {return result}
  else {
    for ( let i = 0; i < preferences.length; i++){
      let first = preferences[i];
      let second = preferences[first-1];
      let third = preferences[second-1];
      if ( first != second && first != third && second != third && third == i+1 ){
        result++;
      }
    }
    return result/3;
  }
};
