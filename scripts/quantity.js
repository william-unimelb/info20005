function adjustQuantity(inputId, amount, onUnderflow=null) {
    let input = document.getElementById(inputId);
    let newValue = Number(input.value) + amount;
    // Clamp the new quantity
    if (newValue < 1) {
        newValue = 1;
        // Trigger the underflow function if it is non null
        if (onUnderflow !== null) {
            onUnderflow();
        }
    }
    input.value = newValue;
}

function resetInput(inputId) {
    let input = document.getElementById(inputId);
    input.value = 1;
}
