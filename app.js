// Setup Menu options
function setupMenu(gridXY,brushMode,brushColor){
    const body=document.querySelector("body");

    // Create a div for the menu
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("class","menu");
    body.appendChild(menuDiv);

    // Create a div, a label and input for gridXY
    const menuGridXY = document.createElement("div");
    menuGridXY.setAttribute("class","menuGridXY");
    menuDiv.appendChild(menuGridXY);
    
    const lblGridXY = document.createElement("p");
    lblGridXY.setAttribute("class","lblGridXY");
    lblGridXY.textContent=`Grid size: ${gridXY}x${gridXY}`;
    menuDiv.appendChild(lblGridXY);

    const inputGridXY = document.createElement("input");
    inputGridXY.setAttribute("class","inputGridXY");
    inputGridXY.setAttribute("type","range");
    inputGridXY.setAttribute("id","gridXY");
    inputGridXY.setAttribute("min","1");
    inputGridXY.setAttribute("max","64");
    menuDiv.appendChild(inputGridXY);

    // Create a button for brushMode

    // Create a button for brushColor
}

// Create a grid

// Clean the grid

// Define the brush size

// Define the brush mode
// Default: click and paint
// Option: Move and paint
// Option: Erase Mode

// Define the brush color
// Default: chosen colour
// Option: opacity - click to increase 10%



// Main application - 
function main(gridXY=16,brushMode=0,brushColor="black"){
    // Populate Menu with all the defined variables
    setupMenu(gridXY,brushMode,brushColor);
    // Draw the grid.
    //setupGrid(gridXY);
}

main();