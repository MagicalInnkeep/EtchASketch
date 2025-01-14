// Setup Menu options
function setupMenu(gridXY,brushMode,brushColor){
    const body=document.querySelector("body");

//---

    //Create FlexBox Container
    const container=document.createElement("div");
    container.setAttribute("class","container");
    body.appendChild(container)
//---   

    // Create a Header
    const headerDiv = document.createElement("div");
    headerDiv.setAttribute("class","header");
    container.appendChild(headerDiv);
    const header1 = document.createElement("h1");
    header1.setAttribute("class","mainHeader");
    header1.textContent="Etch-a-Sketch"
    headerDiv.appendChild(header1);

//---

    // Create a appContainer
    const appContainer = document.createElement("div");
    appContainer.setAttribute("class","appContainer");
    container.appendChild(appContainer);

//---

    // Create a div for the menu
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("class","menu");
    appContainer.appendChild(menuDiv);

//---

    // Create a div, a label and input for gridXY
    const menuGridXY = document.createElement("div");
    menuGridXY.setAttribute("class","menuGridXY");
    menuDiv.appendChild(menuGridXY);
    
    const lblGridXY = document.createElement("p");
    lblGridXY.setAttribute("class","lblGridXY");
    lblGridXY.textContent=`Grid size: ${gridXY}x${gridXY}`;
    menuGridXY.appendChild(lblGridXY);

    const inputGridXY = document.createElement("input");
    inputGridXY.setAttribute("class","inputGridXY");
    inputGridXY.setAttribute("type","range");
    inputGridXY.setAttribute("id","inputGridXY");
    inputGridXY.setAttribute("min","1");
    inputGridXY.setAttribute("max","64");
    menuGridXY.appendChild(inputGridXY);

    // Create a button for brushMode

    // Create a button for brushColor
}

// Create a grid
function setupGrid(gridXY,brushColor){
    const appContainer= document.querySelector(".appContainer");

    const etchASketch = document.createElement("div");
    etchASketch.setAttribute("class","etchASketch");
    appContainer.appendChild(etchASketch);

    for(var i=0;i < gridXY; i++){
        for(var j=0; j<gridXY; j++){
            const divGrid = document.createElement("div");
            divGrid.setAttribute("id",`grid${i}x${j}`);
            divGrid.setAttribute("style","height:"+100/gridXY+"%;width:"+100/gridXY+"%;");
            divGrid.addEventListener("click",() =>{
                colorGrid(gridXY, divGrid, brushColor);
            });
            etchASketch.appendChild(divGrid);
        }
    }

}

function colorGrid(gridXY, divGrid, brushColor){
    console.log(divGrid.id+" and color "+brushColor);
    divGrid.setAttribute("style","height:"+100/gridXY+"%;width:"+100/gridXY+"%;background-color:"+brushColor+";");
}
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
    setupGrid(gridXY,brushColor);
}

main();