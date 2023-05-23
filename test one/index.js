function countVowels(inputString) {
  let vowelCount = 0;
  let vowelList = "aeiouAEIOU";

  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    if (vowelList.indexOf(char) !== -1) {
      vowelCount += 1;
    }
  }

  return vowelCount;
}

// Example usage
let givenString = "Ostad mern stack batch tWo";
let result = countVowels(givenString);
console.log(`Number of vowels in ${givenString} is ${result}`);


// function traverseString(inputString, charactersToFind) {
//   let count = 0;
//   if(typeof(charactersToFind) === 'string') {
//     charactersToFind = charactersToFind.split('');
//   }

//   for (let i = 0; i < inputString.length; i++) {
//     let char = inputString[i];
//     if (charactersToFind.includes(char)) {
//       count += 1;
//     }
//   }

//   return count;
// }

// // Example usage
// let myString = "Hello, world!";
// // let charactersToCount = ["l"];
// // let charactersToCount = "l";
// const vowelList = "aeiouAEIOU";
// const vowelListArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// let count = traverseString(myString, vowelList);
// console.log(`Number of occurrences of characters ${vowelList} in '${myString}' is ${count}`);
