// bug: cant move the script on the about.html to here.
/*progress bar*/
function updateProgressBar() {
    // get all the checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let totalValue = 0;

    // iterate over the checkboxes and add their values if they are checked
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            totalValue += Number(checkbox.dataset.value)*2;
        }
    });

    // set the width of the progress bar based on the sum of the values
    document.querySelector('.progress').style.width = `${totalValue}%`;
}

window.onload = () => {
    updateProgressBar();
}