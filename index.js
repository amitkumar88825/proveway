// Change Background and Border of Selected Input
const changeBackground = (selectedDivId) => {
    document.querySelectorAll('.option, .optionBody').forEach(div => {
        div.style.backgroundColor = 'white';
        div.style.border = '1px solid #e5e5e5';
    });
    const selectedDiv = document.getElementById(selectedDivId);
    selectedDiv.style.backgroundColor = "rgb(247, 240, 240)";
    selectedDiv.style.border = "2px solid #FF4081";
}