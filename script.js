const colors = document.querySelectorAll('.color');
const colorsContainer = document.querySelector('.colors');
const output = document.querySelector('.output');
const input = document.querySelector('.picker-container-input-text');
const btn = document.querySelector('.picker-container-input-button');
const listColor = [];
const outputCode = document.querySelector('.output-code');


// Je parcours les gommettes et je les ajoute dans un tableau
colors.forEach(color => {
    // Je récupère la couleur de la gommette
    let colorName = color.dataset.color;

    // Je change la couleur de fond de la div output
    color.style.backgroundColor = colorName;

    // Je rajoute la couleur dans le tableau ListColor
    listColor.push(colorName);
});

// Je parcours le tableau et je change la couleur de fond de la div output

    // Je parcours le tableau
    colors.forEach(color => {
    // Je change la couleur de fond de la div output au click
    color.addEventListener('click', () => {
        output.style.backgroundColor = color.dataset.color;
    });
    // Je supprime la gommette au double click
    color.addEventListener('dblclick', () => {
        color.remove();
        listColor.splice(listColor.indexOf(color.dataset.color), 1);
    });
});


// Je change la couleur de fond de la div output en fonction de la valeur de l'input
input.addEventListener("input", (event) => {
    output.style.backgroundColor = input.value;
    outputCode.innerHTML = input.value;
});

//Je rajoute une nouvelle gommette dans la div colors si celle ci n'existe pas déja, et je lui ajoute un event listener
btn.addEventListener('click', () => {
 if(listColor.includes(input.value)){
    console.log('Color already exists')
 }else{
    listColor.push(input.value);

    console.log(input.value);
    var newColor = document.createElement("div");
   newColor.classList.add('color');
   newColor.dataset.color = input.value;
   newColor.style.backgroundColor = input.value;
   
   //au click, je change la couleur de fond de la div output
   newColor.addEventListener('click', () => {
    output.style.backgroundColor = newColor.dataset.color;
   });

    //au double click, je supprime la gommette
   newColor.addEventListener('dblclick', () => {
    newColor.remove();
    listColor.splice(listColor.indexOf(newColor.dataset.color), 1);
});

   colorsContainer.appendChild(newColor);

 }
   
});

