/* Copyright © 2019 Anthony PILLOT */

function printCurrentMonthYear() {
    let date = new Date(), month;
    // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    month = date.toLocaleDateString("fr-FR", {
        month: 'long'
    });
    month = month.charAt(0).toUpperCase().concat(month.substring(1, month.length));

    return month.concat(' ' + date.getFullYear().toString());
}