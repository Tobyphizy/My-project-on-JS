
// Return the number of a vowel in a string

const s = "veejams got married to femi aterev she is  now mrs atere the got married in an open space with alots of guess such as lagos mass choir and the likes"
function countVowels(s) {
  const c = s.match(/[aeiou]/gi);
  return c === null ? 0 : c.length;
}
console.log(countVowels(s))



const s = "veejams got married to femi aterev she is  now mrs atere the got married in an open space with alots of guess such as lagos mass choir and the likes"
function countConsonant(s) {
  const c = s.match(/[aeiou]/gi);
  return c === null ? 0 : c.length;
}
console.log(countConsonant(s))
