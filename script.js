const getColor = () =>
{
    const randomNumber =  Math.floor(Math.random() * 1677215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('generatedColor').innerText = randomCode;
    console.log(randomNumber, randomCode);
}
document.getElementById("genrateButton").addEventListener(
    "click", getColor
)

getColor();


const colorInput = document.getElementById('colorInput');
const gererateButton = document.getElementById('genrateButton');
const colorDisplay = document.getElementById('colorDisplay');
const generatedColor = document.getElementById('generatedColor');