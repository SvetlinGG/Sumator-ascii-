function sumator(input){
    let [ char1, char2, str, sum] = [input[0],input[1], input[2], 0];
    const startCode = Math.min(char1.charCodeAt(0), char2.charCodeAt(0))
    const endCode = Math.max(char1.charCodeAt(0), char2.charCodeAt(0))
    for ( let i=0; i <str.length; i++){
        let currLetter = str.charCodeAt(i);
        if ( currLetter>startCode && currLetter < endCode){
        sum += currLetter;
        }
        
    }
    console.log(sum);
}
sumator(['.',
'@',
'dsg12gr5653feee5']);