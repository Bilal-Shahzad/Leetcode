 // Anagram Groups
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]
// Example 3:

// Input: strs = [""]

// Output: [[""]]
// Constraints:

// 1 <= strs.length <= 1000.
// 0 <= strs[i].length <= 100
// strs[i] is made up of lowercase English letters.




// brainstorm:


// given a list of strings and  want to group all anagrams together

// two strings are anagrams of eachother if taking each of them and sort to see if they have the same letters

// take each one of the strings in the input and sort them 

// gather all outputs and return them as the result 

// work

function anagram(strs) {
    var anagramsCon = []

    // go through each string of the array 

    for (var s of strs) {

        var sortedS = s.split('').sort().join('');
    }
}