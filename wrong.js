//  -------------------------------------- PART 2 ------------------------------------------


//  1.  The logo text of the site has the wrong color. Change it to the correct one.

    const logoText = document.querySelector(".logo-text")

    logoText.style.color = '#384241'




//  2.  The alignment of the elements inside the header element are wrong. Change it to the correct 
//      one. Hint, check the flex properties for the correct alignment.


        const header = document.querySelector("header")

        header.style.justifyContent = "flex-start"



//  3.  The header has a border at the bottom, but it has the wrong color. Change it do the correct one.


        header.style.borderBottom = "1px solid lightgrey"



//  4.  The recipe name is wrong, change it to the correct one.

    
    const recipeName = document.getElementById("recipe-name");

    recipeName.innerText = "Frozen Cheescake"



//  5.  The clock icon beneath the recipe name has disappeared and been replaced by a text instead. 
//      This can be fixed by adding a class to that element.

    const timeContainer = document.querySelector(".time-container")

    


    timeContainer.firstElementChild.classList.add("material-icons")
    


//  6.  The estimated time of the recipe is also incorrect. Change it to the correct time estimation.


    timeContainer.lastChild.innerText = "60+ min "
    console.log(timeContainer.lastChild.innerText)


//  7.  The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. 
//      The available images can be found in the assets folder.

    const image = document.querySelector("img");
    image.setAttribute("src","assets/frozen-cheesecake-slice.jpg")
    console.log(image.getAttribute("src"));




//  8.  The background color of the ingredients list container is wrong. Fix it.


    const ingredientsContainer = document.querySelector(".ingredients-container")
    
    ingredientsContainer.style.backgroundColor = "#f9f9f9"

//  9.  The ingredients are divided in to two parts, one for the bottom and one for the paste. 
//      In the list of the ingredients to the bottom, there is a text instead of two list items.
//      Remove the text and add those two list items.

    const listBottom = document.querySelector(".ingredients-list-bottom")

    const childrenBottom = listBottom.children

    listBottom.removeChild(childrenBottom[0])

    listBottom.innerHTML = `<li>${"15st digistivetex"}</li>` + `<li>${"Lite smör"}</li>`



// 10.  The third ingredient in the list of ingredients to the paste is wrong. 
//      Change that specific ingredient to the correct one.

    const listPaste = document.querySelector(".ingredients-list-paste")
    const childrenPaste = listPaste.children
    const childReplace = childrenPaste[2]

    const newListElement  = document.createElement("li")
    newListElement.innerText = "3tsk vaniljsocker"

    listPaste.replaceChild(newListElement, childReplace)


// 11.  There is also a missing ingredient in the list of ingredients to the paste. 
//      Look and see what it is and add that one the the end of the list.

    const newListElement2  = document.createElement("li")
    const node = document.createTextNode("400g naturell philadelphiaost");

    //console.log(newListElement2)
    newListElement2.appendChild(node)

    listPaste.appendChild(newListElement2)


// 12.  The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. 
//      Remove that styling.

//const element = document.querySelector(".instructions.shadow")

//styles = window.getComputedStyle(element)
//console.log(styles.boxshadow);
//element.style.removeProperty("box-shadow")

//console.log(element.innerHTML)

// 13.  Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.