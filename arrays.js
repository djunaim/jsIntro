console.log("arrays");

// const bubbleTea = [
//     {
//         type: 'thai',
//         description: 'orange',
//     },
//     {
//         type: 'vietnameseCoffee',
//         description: 'brown',
//     },
//     {
//         type: 'honeydew',
//         description: 'green',
//     }
// ];

// const printToDOM = (id, textPrint) => {
//     const selectDiv = document.getElementById(id); 
//     selectDiv.innerHTML = textPrint;
// }

// const buildBoba = () => {
//     let bobaType = '';
//     for (let i=0; i < bubbleTea.length; i++) {
//         bobaType += `<div class="tea">`
//         bobaType += `<h3>${bubbleTea[i].type}</h3>`;
//         bobaType += `<p>${bubbleTea[i].description}</p>`
//         bobaType += `</div>`
//     }
//     printToDOM('boba', bobaType);
// }

// buildBoba();

const indexAndPrint = (arr, index) => {
    console.log(arr[index]);
}
const myArray = [1, 2, 8, "bee", "last", "first"];

indexAndPrint(myArray, 2);

const checker = (name) => {
    for (let i=0; i<name.length; i++) {
        if (name[i] === "greg") {
            console.log("yes");
        } else {
            console.log("sorry");
        }
    }
}

const stuff = ["greg", "monica", "joseph", 6, 10];

checker(stuff);

const palindrome = "madam";

const isItPalindrome = (arr) => {
    const arrayFromString = arr.split('')
    const reverseArray = arrayFromString.reverse()
    const opposite = reverseArray.join('')

    // const opposite = arr.split('').reverse().join('')
    if (arr === opposite) {
        return true;
    } else {
        return false;
    }
}

isItPalindrome(palindrome);