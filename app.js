// Declaration of default values.
// Initialy everything declared in main, but was too much of a hasstle.
// Kept only GridXY that way, since it already worked...
let mouseHold =false;
let brushColor = "black";
let brushMode = 0;
let brushModeText;

switch(brushMode){
    case 0:
        brushModeText="Plain Color";
        break;
    case 1:
        brushModeText="Gradient Mode";
        break;
    case 2:
        brushModeText="Rainbow Mode";
        break;
};

//----------------------------------------
//  Functions
//----------------------------------------

// Setup Menu options
function setupMenu(gridXY){
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
        setupGrid(gridXY);
    });
    menuGridXY.appendChild(inputGridXY);

    // Create a button for brushMode
    const btnBrushMode = document.createElement("button");
    btnBrushMode.textContent=brushModeText;
    btnBrushMode.setAttribute("id","brushMode");
    btnBrushMode.addEventListener('click', ()=>{
        switch(brushMode){
            case 0:
                brushMode=1;
                brushModeText="Rainbow Mode";
                break;
            case 1:
                brushMode=2;
                brushModeText="Gradient Mode";
                break;
            case 2:
                brushMode=0;
                brushModeText="Plain Color";
                break;
        };
        btnBrushMode.textContent=brushModeText;
    });
    menuDiv.appendChild(btnBrushMode);


    // Create a button for brushColor
    //<input type="color" id="favcolor" name="favcolor" value="#ff0000">
    const colorDiv = document.createElement("div");
    colorDiv.setAttribute("class","rounded");
    colorDiv.style.backgroundColor=brushColor;
    menuDiv.appendChild(colorDiv);
    const inputBrushColor = document.createElement("input");
    inputBrushColor.setAttribute("type","color");
    inputBrushColor.setAttribute("id","inputBrushColor");
    inputBrushColor.setAttribute("value",brushColor);
    inputBrushColor.addEventListener("change", () =>{
        brushColor=inputBrushColor.value;
        colorDiv.style.backgroundColor=brushColor;
    })
    colorDiv.appendChild(inputBrushColor);

}

// Create a grid
function setupGrid(gridXY){
    const appContainer= document.querySelector(".appContainer");

    //clears grid if exists.
    const gridExists = document.querySelector(".etchASketch");
    if(gridExists!=null){appContainer.removeChild(gridExists);};

    const etchASketch = document.createElement("div");
    etchASketch.setAttribute("class","etchASketch");
    //Events
    etchASketch.addEventListener('mousedown', (e)=>{
        mouseHold=true;
        colorGrid(e.target);
    });
    etchASketch.addEventListener('mouseup', (e)=>{
        mouseHold=false;
    });
    etchASketch.addEventListener("mouseover", (e) => {
        colorGrid(e.target);
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

function colorGrid(grid){
    if(mouseHold==true && grid.getAttribute("class")=="gridPixel"){
        if(brushMode==0){
            grid.style.backgroundColor=brushColor;
        }
        else if(brushMode==1){
            grid.style.backgroundColor=randomColor();
        }
        else{

            grid.style.backgroundColor=brushColor;
            if(!grid.style.opacity){
                grid.style.opacity='0.1';
            }
            else if(grid.style.opacity<1){
                grid.style.opacity=parseFloat(grid.style.opacity)+0.1;
            }
            console.log(grid.style.opacity);
        }
    }
}

function randomColor(){
    const randR = Math.floor(Math.random()*255);
    const randG = Math.floor(Math.random()*255);
    const randB = Math.floor(Math.random()*255);

    return `rgb(${randR},${randG},${randB})`;
}

// Main application - 
function main(gridXY=16){
    // Populate Menu with all the defined variables
    setupMenu(gridXY);
    // Draw the grid.
    setupGrid(gridXY);
}

main();