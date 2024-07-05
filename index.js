//  1.  What is the name of the recipe?

const recipeName = document.getElementById("recipe-name");

console.log(recipeName.innerText);

//  2.  What HTML tag is used to display the Recipe name?

console.log(recipeName.tagName);

//  3.  What is the font size of the paragraph tag with the class "description".

const paragraph = document.querySelector(".description");

const styles = window.getComputedStyle(paragraph);

console.log(styles.fontSize);

//  4.  What is the value of the alt atrribute on the image?

const image = document.querySelector("img");

console.log(image.alt);

//  5.  What is the dimensions and the url of the image?

let imageDimensions = {
  url: image.src,
  height: image.height,
  width: image.width,
};

console.log(imageDimensions);

//  6.  How many ingredients does the paste have?

const list = document.querySelector(".ingredients-list-paste");

console.log(list.childElementCount);

//  7.  Which is the forth element in the list containing the ingredients for the paste?

console.log(list.children[3].innerText);

//  8.  Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:





