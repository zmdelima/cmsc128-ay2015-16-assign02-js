function getHammingDistance (str1, str2) {
    var inv =0,i;
    
    //start of parameter checking
    if (typeof(str1) != "string") {
        console.log("Error: First parameter type is not a string!");
        return null;
    }
    else if (typeof(str2) != "string") {
        console.log("Error: Second parameter type is not a string!");
        return null;
    }
    if (str1.length<=0) {
        console.log("Error: Invalid first string parameter!");
        return null;
    }
    else if (str2.length <=0) {
        console.log("Error: Invalid second string parameter!");
        return null;
    }
    //end of parameter checking
    
    //main loop for checking number of character inversions
    for (i=0;i<str1.length;i++) {
        if(str1[i] != str2[i]){
            //console.log("\nInversion at "+str1[i]+" vs " +str2[i]);
            inv += 1;
        }
    }
    return inv;
}

function countSubstrPattern (src, substr) {
    var count=0;
    
    //start of parameter checking
    if (typeof(src) != "string") {
        console.log("Error: First parameter type is not a string!");
        return null;
    }
    else if (typeof(substr) != "string") {
        console.log("Error: Second parameter type is not a string!");
        return null;
    }
    if (src.length<=0) {
        console.log("Error: First string parameter invalid!");
        return null;
    }
    else if (substr.length <=0) {
        console.log("Error: Second string parameter invalid!");
        return null;
    }
    //end of parameter checking
    
    //check if substring is empty or has no initialmatches at all
     if (substr.length > src.length) return 0;
     else if (src.lastIndexOf(substr) < 0) return 0;

    while(src.indexOf(substr) >=0){
        src = src.substr(src.indexOf(substr)+1,src.length);
        count++;
    }
}

function isValidString(input, base){
    var i;
    
    //start of parameter checking
    if (typeof(input) != "string") {
        console.log("Error: First parameter type is not a string!");
        return null;
    }
    else if (typeof(base) != "string") {
        console.log("Error: Second parameter type is not a string!");
        return null;
    }
    if (input.length<=0) {
        return false;
    }
    else if (base.length <=0) {
        return false;
    }
    //end of parameter checking
    
    //get every character from input string and compare if it has an index in the base string
    for(i=0;i<input.length;i++){
        if(base.lastIndexOf(input[i]) < 0) return false;
    }
    return true;
}

function getSkew (strand, n) {
    var count=0,i;
    
    //start of parameter checking
    if (typeof(strand) != "string") {
        console.log("Error: First parameter type is not a string!");
        return null;
    }
    else if (typeof(n) != "number") {
        console.log("Error: Second parameter type is not a number!");
        return null;
    }
    if (strand.length<=0) {
        return null;
    }
    else if (n <= 0) {
        console.log("Error: Second parameter  must be a positive whole number!");
        return null;
    }
    //end of parameter checking
    
    //check if strand is a nucleotide
    if(!isValidString(strand,"ACGT")){
        console.log("String parameter is not a nucleotide strand!");
        return null;
    }
    for(i=0;i<n;i++){
        if(strand[i] == "G")count++;
        else if(strand[i] == "C")count--;
    }
    return count;
}

function getMaxSkewN (str, n) {
    var max=null,res,i;
    //check parameters
    
     //start of parameter checking
    if (typeof(str) != "string") {
        console.log("Error: First parameter type is not a string!");
        return null;
    }
    
    else if (typeof(n) != "number") {
        console.log("Error: Second parameter type is not a number!");
        return null;
    }
    
    if (str.length <= 0) {
        console.log("String parameter has nothing to getMaxSkewN from");
        return null;
    }
    
    else if (n <= 0) {
        console.log("Error: Second parameter  must be a positive whole number!");
        return null;
    }
    //end of parameter checking
    for(i=0;i<n;i++){
        res = getSkew(str,i+1);
        if (res == null) return;
        if (max < res || max==null) {
            max = res;
        }
    }
    
    return max;
}

function getMinSkewN (str, n) {
    var min=null,res,i;
    //check parameters
    
     //start of parameter checking
    if (typeof(str) != "string") {
        console.log("Error: First parameter type is not a string!");
        return null;
    }
    
    else if (typeof(n) != "number") {
        console.log("Error: Second parameter type is not a number!");
        return null;
    }
    
    if (str.length <= 0) {
        console.log("String parameter has nothing to getMaxSkewN from");
        return null;
    }
    
    else if (n <= 0) {
        console.log("Error: Second parameter  must be a positive whole number!");
        return null;
    }
    //end of parameter checking
    for(i=0;i<n;i++){
        res = getSkew(str,i+1);
        if (res == null) return;
        if (min > res || min==null) {
            min = res;
        }
    }
    return min;
}