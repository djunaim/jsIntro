console.log("arrays");

const bubbleTea = [
    {
        type: 'thai',
        description: 'orange',
    },
    {
        type: 'vietnameseCoffee',
        description: 'brown',
    },
    {
        type: 'honeydew',
        description: 'green',
    }
];

const printToDOM = (id, textPrint) => {
    const selectDiv = document.getElementById(id); 
    selectDiv.innerHTML = textPrint;
}

const buildBoba = () => {
    let bobaType = '';
    for (let i=0; i < bubbleTea.length; i++) {
        bobaType += `<div class="tea">`
        bobaType += `<h3>${bubbleTea[i].type}</h3>`;
        bobaType += `<p>${bubbleTea[i].description}</p>`
        bobaType += `</div>`
    }
    printToDOM('boba', bobaType);
}

buildBoba();