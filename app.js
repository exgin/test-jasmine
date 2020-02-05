function calTaxes (income) {
    if (!Number.isFinite(income)) {
        throw new Error ('BAD INCOME');
    } 

    if (income > 30000) {
        return income * 0.25;
    } else {
        return income * 0.15;
    }
}

function removeDups(val) {
    return [...new Set(val)];
}


let usernames = [];
let nameInput = document.querySelector('#username');
function submitForm() {
    usernames.push(nameInput.value);
}