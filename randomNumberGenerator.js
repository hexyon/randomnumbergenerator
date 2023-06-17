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
    let tempInput = document.createElement("input");
    tempInput.value = document.getElementById("copyButton").dataset.number;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    document.getElementById("tick").style.visibility = "visible";
    setTimeout(function() {
        document.getElementById("tick").style.visibility = "hidden";
    }, 2000);
}
