// _____________________Function -> Items Number___________
function updateItemsNumber(item, price, increasingItem) {
    const itemInput = document.getElementById(item + '-number');
    let itemNumber = itemInput.value;
    if (increasingItem) {
        itemNumber = parseInt(itemNumber) + 1;
    }
    else if (itemNumber > 0) {
        itemNumber = parseInt(itemNumber) - 1;
    }

    // _________Product Amount_____________
    itemInput.value = itemNumber;
    const totalPrice = document.getElementById(item + '-total');
    totalPrice.innerText = itemNumber * price;

    // __________Calculate price & tax__________
    calculateTotal();
}
function getItem(product) {
    const itemNo = document.getElementById(product + '-number');
    return itemNo.value;
}
function calculateTotal() {
    // _____Calculate Sub Total_________
    const subAmount = getItem('phone') * 1219 + getItem('case') * 59;
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = subAmount;

    // _______Calculate 10% Tax_________
    const taxAmount = document.getElementById('tax-amount');
    const tax = subAmount / 10;
    taxAmount.innerText = tax;

    // ________Calculate Total________
    const totalAmount = document.getElementById('total-amount');
    const total = subAmount + tax;
    totalAmount.innerText = total;

}

// ___________________Handle Phone Items_________________
document.getElementById('phone-plus').addEventListener('click', function () {
    updateItemsNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateItemsNumber('phone', 1219, false);
})
// ___________________Handle Case Items_________________
document.getElementById('case-plus').addEventListener('click', function () {
    updateItemsNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateItemsNumber('case', 59, false);
})