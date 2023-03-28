function difference(x, y){
 return x-y;
}

function product(x, y){
    return x*y;
}

function printDay(x){
    let day = 
    {
        1: "monday",
        2: "tuesday",
        3: "wednesday",
        4: "thursday",
        5: "friday",
        6: "saturday",
        7: "sunday",
    };
    return day[x]; 
}

function lastElement(arr){
    return arr [arr.length-1];
}

function numberCompare(x, y){
    if(x === y){
        return "Numbers are equal";
    }
    else if(x < y){
        return "Second is greater";
    }
    else(x > y){
        return "First is greater";
    }
}

function singleLetterCount(word, letter){
    let totalCount = 0;
    for(let i=0; i< word.length; i++){
    if(word[i].toLowerCase() === letter.toLowerCase()){
    totalCount++;
    }
  }
 return totalCount;
}

function multipleLetterCount(word){
    let ourObject = {};
    word = word.toLowerCase();
    for(let i = 0; i < word.length; i++){
        if(ourObject[word[i]] === undefined){
            ourObject[word[i]] = 1;
        }
        else
        {
            ourObject[word[i]]++
        }
    }
    return ourObject;
}

function arrayManipulation(arr, cmmnd, loc, val){
    if(cmmnd === "remove"){
        if(loc === "end"){
            return arr.pop();
        }
        return arr.shift();
    }
    else if(cmmnd === "add"){
        if(loc === "end"){
            arr.push(val) 
            return arr;
        }
         arr.unshift(val)
         return arr;
    }
}

function isPalindrome(word){
    for(let i =0; i<word.length; i++){
         if(word[i].toLowerCase() !== word[word.length-1-i].toLowerCase()){
            return false;
          }
        }
         return true;
}
//rock, paper, scissors