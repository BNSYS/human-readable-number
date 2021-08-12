module.exports = function toReadable (number) {
    let strOut = ``; 
    let intNumber = parseInt(number);
    let strNumber = `${number}`;
    let strNumbersArr = [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`, `ten`,
    `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`, 
    `twenty`, `thirty`, `forty`, `fifty`, `sixty`, `seventy`, `eighty`, `ninety`, `hundred`];
//1 digit + 2digit up to 19
if((intNumber >= 0) && (intNumber < 20)) { 
    strOut = strNumbersArr[intNumber];
} else 
// 2 digit 20-99, 20 = 21
if (intNumber > 19 && intNumber < 100){
    if (parseInt(strNumber.charAt(1)) === 0){
    strOut = strNumbersArr[20+(parseInt(strNumber.charAt(0))-2)];
    } else {
    strOut = strNumbersArr[20+(parseInt(strNumber.charAt(0))-2)] +" "+ strNumbersArr[parseInt(strNumber.charAt(1))];    
    }
} else
//3 digit 
if (intNumber > 99 && intNumber < 1000){
    if (parseInt(strNumber.charAt(1)) === 0 && parseInt(strNumber.charAt(2)) === 0 ){
        strOut = strNumbersArr[parseInt(strNumber.charAt(0))]+` `+strNumbersArr[28];
        } 
        else if (parseInt(strNumber.slice(1)) > 0 && parseInt(strNumber.slice(1)) < 20){
            strOut = strNumbersArr[parseInt(strNumber.charAt(0))]+` `+strNumbersArr[28]+` `+strNumbersArr[parseInt(strNumber.slice(1))];
        } else if (parseInt(strNumber.charAt(2)) === 0){
            strOut = strNumbersArr[parseInt(strNumber.charAt(0))]+` `+strNumbersArr[28]+` `+strNumbersArr[20+(parseInt(strNumber.charAt(1))-2)];    
        }
        else{
        strOut = strNumbersArr[parseInt(strNumber.charAt(0))]+` `+strNumbersArr[28]+` `+strNumbersArr[20+(parseInt(strNumber.charAt(1))-2)] +" "+ strNumbersArr[parseInt(strNumber.charAt(2))];
        }
}
return strOut;
}
