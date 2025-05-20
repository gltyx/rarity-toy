function format(amount) {   // formats number to be displayed as "X.XXeX" if log10 of number is greater than 2
    let power = Math.floor(Math.log10(amount));
    let mantissa = amount / Math.pow(10, power);
    if (power < 9) return amount.toLocaleString();
    return mantissa.toFixed(2) + "e" + power;
}

function tormat(amount) {   // formats number to be displayed as "X.XXeX" if log10 of number is greater than 2
    let power = Math.floor(Math.log10(amount));
    let mantissa = amount / Math.pow(10, power);
    if (power < 6) return amount.toFixed(3);
    return mantissa.toFixed(2) + "e" + power;
}

function sormat(amount) {   // formats number to be displayed as "X.XXeX" if log10 of number is greater than 2
    let power = Math.floor(Math.log10(amount));
    let mantissa = amount / Math.pow(10, power);
    if (power < 6) return amount.toFixed(1);
    return mantissa.toFixed(2) + "e" + power;
}

function pormat(amount) {   // formats number to be displayed as "X.XXeX" if log10 of number is greater than 2
    let power = Math.floor(Math.log10(amount));
    let mantissa = amount / Math.pow(10, power);
    if (power < 6) return amount.toFixed(0);
    return mantissa.toFixed(2) + "e" + power;
}