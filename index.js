let match ={
    'A' : '.-',
    'B' : '-...',
    'C' : '-.-.',
    'D' : '-..',
    'E' : '.',
    'F' : '..-.',
    'G' : '--.',
    'H' : '....',
    'I' : '..',
    'J' : '.---',
    'K' : '-.-',
    'L' : '.-..',
    'M' : '--',
    'N' : '-.',
    'O' : '---',
    'P' : '.--.',
    'Q' : '--.-',
    'R' : '.-.',
    'S' : '...',
    'T' : '-',
    'U' : '..-',
    'V' : '...-',
    'W' : '.--',
    'X' : '-..-',
    'Y' : '-.--',
    'Z' : '--..'
}

function a (){
let input = document.getElementById('input').value;
input = input.toUpperCase();
let arr = input.split(" ");
console.log(arr);
let arr1 = arr.map(x =>{
    if (match[x]){
        return match[x];

    }
    
    
})
    let arr2 = arr1.join(" ");
    document.getElementById('output').value = arr2;
    console.log(arr2);
}