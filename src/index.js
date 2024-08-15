module.exports = function check(str, bracketsConfig) {
  let openedBrackets = [];
  for (let char of str) {
    for (let [opened, closed] of bracketsConfig) {
      if (char === closed && openedBrackets[openedBrackets.length - 1] === opened) {
        openedBrackets.pop(); 
      } else if (char === opened) {
        if (opened === closed && openedBrackets[openedBrackets.length - 1] === opened) {
          openedBrackets.pop(); 
        } else {
          openedBrackets.push(char);
        }
      } else if (char === closed && openedBrackets.length === 0) {
        return false;
      }
    }
  }
  return openedBrackets.length === 0;
}