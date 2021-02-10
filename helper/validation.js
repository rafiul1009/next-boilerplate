export function inputNumberCheck(e){
    var invalidChars = ["-", "e", "+", "E"];
    if(invalidChars.includes(e.key)){
        e.preventDefault();
    }
}
