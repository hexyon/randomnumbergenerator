function generateRandomNumber() {
    let min = Math.ceil(1e11);  // Minimum value is 100000000000
    let max = Math.floor(1e12); // Maximum value is 999999999999
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayRandomNumber() {
    let randomNumber = generateRandomNumber();
    document.getElementById("randomNumber").innerHTML = randomNumber;
    document.getElementById("copyButton").dataset.number = randomNumber;
}

function copyToClipboard() {
    var randomNumber = document.getElementById('randomNumber').textContent;
    var tempInput = document.createElement('input');
    tempInput.style = 'position: absolute; left: -1600px; top: -1600px';
    tempInput.value = randomNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    document.getElementById('copiedNumber').textContent = randomNumber;
}
