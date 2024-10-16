
function add(a, b){
    let result = a + b;
    return result;
}

const result = add(6,7)
console.log(result);

function getReceipt(amountPaid, changeDue){
    const total = 100;
    // const text = String(amountPaid) + changeDue;
    const text= `
AMOUNT PAID: ${amountPaid}
CHANGE DUE: ${changeDue}

TOTAL COST: ${total}
        `;
        return text;
}


console.log(getReceipt(10, 3));