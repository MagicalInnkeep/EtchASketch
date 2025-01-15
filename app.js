let mouseHold =false;

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
    header1.textContent="Etch-a-Sketch";
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
    inputGridXY.value=gridXY;
    inputGridXY.addEventListener("change",()=>{
        gridXY=inputGridXY.value;
        lblGridXY.textContent=`Grid size: ${gridXY}x${gridXY}`;
        setupGrid(gridXY,brushColor);
    });
    menuGridXY.appendChild(inputGridXY);

    // Create a button for brushMode

    // Create a button for brushColor
}

// Create a grid
function setupGrid(gridXY,brushColor){
    const appContainer= document.querySelector(".appContainer");

    //clears grid if exists.
    const gridExists = document.querySelector(".etchASketch");
    if(gridExists!=null){appContainer.removeChild(gridExists);};

    const etchASketch = document.createElement("div");
    etchASketch.setAttribute("class","etchASketch");
    //Events
    etchASketch.addEventListener('mousedown', (e)=>{
        mouseHold=true;
        colorGrid(e.target,brushColor);
    });
    etchASketch.addEventListener('mouseup', (e)=>{
        mouseHold=false;
    });
    etchASketch.addEventListener("mouseover", (e) => {
        colorGrid(e.target,brushColor);
    });

    appContainer.appendChild(etchASketch);


    for(var i=0;i < gridXY; i++){
        for(var j=0; j<gridXY; j++){
            const divGrid = document.createElement("div");
            divGrid.setAttribute("class","gridPixel");
            divGrid.setAttribute("id",`grid${i}x${j}`);
            divGrid.setAttribute("style","height:"+100/gridXY+"%;width:"+100/gridXY+"%;");
            etchASketch.appendChild(divGrid);
        }
    }

}

function colorGrid(grid,brushColor){
    if(mouseHold==true && grid.getAttribute("class")=="gridPixel"){
    grid.style.backgroundColor=brushColor;
    }
}

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