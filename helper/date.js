export function addMonths(date, monthToAdd){
    return date.setMonth(date.getMonth() + monthToAdd);
}

export function formatTodaysDate(){
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    //return year + "-" + month + "-" + date;
    return month + " " + date + " " + year;
}