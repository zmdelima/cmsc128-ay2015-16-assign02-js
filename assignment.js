//ths function is for getting hamming distance of 2 strings with the same length
//the function throws a null value if error has occured
function getHammingDistance (str1, str2) {
    var inv = 0,i;
    
    //start of parameter checking
    if (typeof(str1) != "string") { //checking if variable is a string
        console.log("Error: First parameter type is not a string!");
        return null;
    }
    else if (typeof(str2) != "string") { //checking if variable is a string
        console.log("Error: Second parameter type is not a string!");
        return null;
    }
    if (str1.length<=0) { //checking string1's length 
        console.log("Error: Invalid first string parameter!");
        return null;
    }
    else if (str2.length <=0) { //checking string2's length
        console.log("Error: Invalid second string parameter!");
        return null;
    }
    //end of parameter checking
    
    //main loop for checking number of character inversions
    //count increments per character difference
    for (i=0;i<str1.length;i++) {
        if(str1[i] != str2[i]){
            inv += 1;
        }
    }
    return inv;
}

//this function is for counting substring patterns of a String substr in a String src
//the function throws a null value if error has occured
function countSubstrPattern (src, substr) {
    var count=0;
    
    //start of parameter checking
    if (typeof(src) != "string") { //checking if variable is a string
        console.log("Error: First parameter type is not a string!");
        return null;
    }
    else if (typeof(substr) != "string") { //checking if variable is a string
        console.log("Error: Second parameter type is not a string!");
        return null;
    }
    if (src.length<=0) { //checking src's length
        console.log("Error: First string parameter invalid!");
        return null;
    }
    else if (substr.length <=0) { //checking substr's length
        console.log("Error: Second string parameter invalid!");
        return null;
    }
    //end of parameter checking
    
    //check if substring is empty or has no initialmatches at all
     if (substr.length > src.length) return 0;
     else if (src.lastIndexOf(substr) < 0) return 0;

    //mainloop for checking number of pattern matches
    //starts at src[0] to src[src.length]
    //count increments per indexOf value >=0
    while (src.indexOf(substr) >=0) {
        src = src.substr(src.indexOf(substr)+1,src.length);
        count++;
    }
}

//this function is for checking a string validity, 
//given the characters of String input are all existing in String base. 
//the function throws a null value if error has occured
function isValidString(input, base){
    var i;
    
    //start of parameter checking
    if (typeof(input) != "string") { //checking if variable is a string
        console.log("Error: First parameter type is not a string!");
        return null;
    }
    else if (typeof(base) != "string") { //checking if variable is a string
        console.log("Error: Second parameter type is not a string!");
        return null;
    }
    if (input.length<=0) { //checking input's length
        return false;
    }
    else if (base.length <=0) { //checking base's length
        return false;
    }
    //end of parameter checking
    
    //main loop for the function,
    //it gets every character from input string 
    //and compares it if the character has an index in the base string
    //returns true if it has passed the checking, false otherwise
    for (i=0;i<input.length;i++) {
        if(base.lastIndexOf(input[i]) < 0) return false;
    }
    return true;
}

//this function is for getting Skew value of String strand up to position n
//the function throws a null value if error has occured
function getSkew (strand, n) {
    var count=0,i;
    
    //start of parameter checking
    if (typeof(strand) != "string") { //checking if variable is a string
        console.log("Error: First parameter type is not a string!");
        return null;
    }
    else if (typeof(n) != "number") { //checking if variable is a string
        console.log("Error: Second parameter type is not a number!");
        return null;
    }
    if (strand.length<=0) { //checking strand's length
        return null;
    }
    else if (n <= 0) { //checking if numerical input 'n' is less than or equal to zero
        console.log("Error: Second parameter  must be a positive whole number!");
        return null;
    }
    //end of parameter checking
    
    //checks strand's validity if the string parameter is a nucleotide or not
    if (!isValidString(strand,"ACGT")) {
        console.log("String parameter is not a nucleotide strand!");
        return null;
    }
    
    //mainloop that counts skew value from 0 to numerical input 'n'-1
    //count decrements if it has encountered a "C".
    //else if it has encountered a G, count increments
    for (i=0;i<n;i++) {
        if(strand[i] == "G")count++;
        else if(strand[i] == "C")count--;
    }
    return count;
}

//this function gets the maximum number of (G-C) in a nucleotide strand 'str',
//from str[0]  to str[n-1]
//the function throws a null value if error has occured
function getMaxSkewN (str, n) {
    var max=null,res,i;
    //check parameters
    
     //start of parameter checking
    if (typeof(str) != "string") { //checking if variable is a string
        console.log("Error: First parameter type is not a string!");
        return null;
    }
    
    else if (typeof(n) != "number") { //checking if variable is a number
        console.log("Error: Second parameter type is not a number!");
        return null;
    }
    
    if (str.length <= 0) { //checking str's length
        console.log("String parameter has nothing to getMaxSkewN from");
        return null;
    }
    
    else if (n <= 0) { //checking if numerical input 'n' is less than or equal to zero
        console.log("Error: Second parameter  must be a positive whole number!");
        return null;
    }
    //end of parameter checking
    
    //main loop for getting max skew value
    //the loop checks every skew value from str[0] to str[n-1]
    //then reasssigns max' value if current resulting skew is higher than the current max
    for (i=0;i<n;i++) {
        res = getSkew(str,i+1);
        if (res == null) return;
        if (max < res || max==null) {
            max = res;
        }
    }
    
    return max;
}

//this function gets the minimum number of (G-C) in a nucleotide strand 'str',
//from str[0]  to str[n-1]
//the function throws a null value if error has occured
function getMinSkewN (str, n) {
     var min=null,res,i;
    //check parameters
    
     //start of parameter checking
    if (typeof(str) != "string") { //checking if variable is a string
        console.log("Error: First parameter type is not a string!");
        return null;
    }
    
    else if (typeof(n) != "number") { //checking if variable is a number
        console.log("Error: Second parameter type is not a number!");
        return null;
    }
    
    if (str.length <= 0) { //checking str's length
        console.log("String parameter has nothing to getMaxSkewN from");
        return null;
    }
    
    else if (n <= 0) { //checking if numerical input 'n' is less than or equal to zero
        console.log("Error: Second parameter  must be a positive whole number!");
        return null;
    }
    //end of parameter checking
    
    //main loop for getting min skew value
    //the loop checks every skew value from str[0] to str[n-1]
    //then reasssigns min' value if current resulting skew is lower than the current min
    for (i=0;i<n;i++) {
        res = getSkew(str,i+1);
        if (res == null) return;
        if (min > res || min==null) {
            min = res;
        }
    }
    return min;
}
