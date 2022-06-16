function isPalindrome(word) {
    for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
        const endIndex = word.length - 1 - startIndex;
        if (word[startIndex] !== word[endIndex]) {
            return false;
        }
    }
    return true;
}

/* 
  Add your pseudocode here
iterate from the beginning of the string to the middle of the string
compare the letter we're iterating over to the corresponding letter at the end of the string
if the letters do't match,return false
*/

/*
  Add written explanation of your solution here
The code 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("mom"));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("abba"));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("utu"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("palindrome"));

    console.log("");




    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;