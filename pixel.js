window.onload = function() {

let canvas = document.querySelector('#canvas');
let palette = document.querySelector('#palette');
let currentColor = '#ffd300';
canvas.style.display = 'grid';
canvas.style.gridTemplate = 'repeat(20, 1fr) / repeat(20, 1fr)';

// Grid
for(let i = 0; i < 400; i++) {
    let pixel = document.createElement('span');
    pixel.style.border = '1px solid white';
    pixel.style.height = '18px';
    pixel.style.width = '18px';
    pixel.style.borderRadius ='2px';
    pixel.addEventListener('click',function(event){
        pixel.style.backgroundColor = currentColor;
    }
    )
    canvas.appendChild(pixel);
}
document.body.appendChild(canvas);

// Palette
let colorChoices = ['#833ab4', '#fd1d1d', '#ffd300', '#fcb045', '#3ed69d', '#008146'];
palette.style.display = 'grid';
palette.style.gridTemplate = 'repeat(1, 1fr) / repeat(6, 1fr)';
palette.style.width = '60px';
for(let color of colorChoices) {
  // Code to create each box of the pallet here...
    let colorPalette = document.createElement('span')
    colorPalette.style.border = '1px solid white';
    colorPalette.style.height = '18px';
    colorPalette.style.width = '18px';
    colorPalette.style.borderRadius ='2px';
    colorPalette.style.backgroundColor = color;
    palette.appendChild(colorPalette);
    colorPalette.addEventListener('click',function(event){
        currentColor = colorPalette.style.backgroundColor;
    }
    )
}
}
