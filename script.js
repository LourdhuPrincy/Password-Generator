const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const lowerAlphas="abcdefghijklmnopqrstuvwxyz";
const upperAlphas="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const symbols="~!@#$%^&*(){}[]|\<>?`";

// / generating password characters
function generatePassword() {
    const length = +lengthEl.value;
    const hasLower=lowercaseEl.checked;
    const hasUpper=uppercaseEl.checked;
    const hasNumber=numbersEl.checked;
    const hasSymbol=symbolsEl.checked;
    let pwCharacters="";
    let password="";
   
    const randomCharacters =[
        [hasLower, lowerAlphas],
        [hasUpper, upperAlphas],
        [hasNumber, numbers],
        [hasSymbol, symbols],
    ];

    const values=randomCharacters.filter(el=> el[0]==true);
    
    values.forEach((el)=>pwCharacters=pwCharacters+el[1]);
    
    for(let i=0; i<=length; i++){
        val=pwCharacters[Math.floor(Math.random()*pwCharacters.length)]
        password+=val;
    }
    resultEl.innerText=password;
};

// adding event listener to generate button
generateEl.addEventListener('click', generatePassword);

// adding event listener to clipboard
clipboardEl.addEventListener('click', () => {
    if(resultEl.innerText){
        alert('password has been copied !!');
        resultEl.innerText='';
    } else{
        resultEl.innerText='Generate a password !!';
    } 
});










    






