// Document Object Model (DOM)

/*
    DOM is a data representation of the objects that comprise the structure and content of a document on the web.
    It containts, but is not limited to:
        - Document
            - HTML
                - Head
                    - Meta tags
                    - Link tags
                    - Title tags
                - Body
                    - Nav
                    - Header
                    - Div's
                    - H1's and so on ...
                - And any of their attributes
*/

// Creating our first element
// let h1 = document.createElement("h1")
// h1.innerText = "My first DOM element!"
// h1.style.color = "slategray"
// h1.style.float = "right"
// document.body.appendChild(h1)

// ? OFF TOPIC: Accessing device config with DOM
// let info = navigator.oscpu
// console.log(info)

// Accessing Single element from HTML file

// getElementById selects first instance of an id "listTitle"
let listTitle = document.getElementById("listTitle")
console.log(listTitle)
listTitle.innerText = "Hermione's To-Do & Grocery List"

// Accessing elements using QuerySelector
/*
    Most verstatile of all selectors.
        - acess first element if there's more than one
        - return null if no element is found
        - access by element name, .class, or #id
*/

// let listItem = document.querySelector("ul li")
let listItem = document.querySelector(".listItem")
console.log(listItem)
listItem.style.textAlign = "center"
listItem.style.color = "red"

// Accessing Multiple Elements
/*
    - When accessing several elements, a HTMLCollection is returned
    - Not an array but works like one
        - Can loop through it
        - Can use length property to get the size of the list
    - To get element
        - Use array notation
        - Use Item Method
    - Accessing Multiple Elements requires these Methods:
        - querySelectorAll
        - getElementsByClassName
        - getElementsByTagName
*/

let grocery = document.getElementsByClassName("groceryItem")
// console.log(grocery instanceof Array) // shows that HTMLCollection is not an Array even though it acts like it
// console.log(grocery) // Prints HTMLCollection
// console.log(grocery[2]) // Prints Boom Berry Juice

// console.log(grocery.item(2)) // Prints Boom Berry Juice
grocery[0].innerText = "Finn the Mandrake"// changes grocery item at index of 0

// Accessing all li tags using HTMLCollection
let liTag = document.getElementsByTagName("li")
console.log(liTag)

// QuerySelectorAll 

let selectAll = document.querySelectorAll("ul li")
console.log(selectAll)

// Differences between HTMLCollection & Node List

let newListItem = document.createElement("li")
let groceryList = document.getElementById("groceryList")
groceryList.appendChild(newListItem)
newListItem.innerText = "Test of dynamic vs static."

/*
    Looking at console.log, our new element will show up under the HTMLCollection, but it will not show up under nodeList.
    The reason why is because HTMLCollection is dynamic whereas NodeList is static.
*/

// Accessing Nodes in a Tree

console.log(document.body.childNodes)

// Whitespace in elements is considered as text
// Text is considered to be a node
// Comments are nodes

/* 
    childNodes Property returns a collection of nodes as a NodeList object
        - they are sorted top to botoom
        - they are indexable (start at 0)
    Properties:
        - firstChild - first element of node
        - lastChild - last element of node
        - parentNode - parent element of the node
        - nextSibling - element to be accessed next
        - previousSibling - previous element to be accessed
*/

console.log(document.body.children)

let listDiv = document.getElementById("list")
console.log(listDiv.firstChild)
console.log(listDiv.firstChild.nextSibling.nextSibling)
// firstChild drops to first element of the node.
// firstChild nextSibling is in first element of the adjacent element's sibling.

// Element Iteration

for (tag of liTag) {
    // console.log(tag)
    tag.style.fontFamily = "cursive"
    tag.style.color = "#235474"
}

document.getElementsByClassName("listItem")[4].innerText = "Buy a new cauldron"

console.log(document.getElementsByClassName("groceryItem")[0].innerHTML = "Moondew Drops")

// The loop pulls each element instance from the HTMLCollection and applies these CSS properties to it.

// Event Listeners

/*
    Event Listener allows us to execute a function when a particular event occurs.
    - .addEventListener takes an event and a callback function to work.
    - Event => what happens
    - Callback function => fx that does something when the event occurs.
*/

let button = document.getElementById("clickMe")

// button.addEventListener("click", (event) => {
//     console.log(event)
//     console.log("This button has been clicked!")
// })

button.addEventListener("click", (e) => {
    let textInput = document.getElementById("listInput").value
    // Grabbing value from text input
    let newGroceryItem = document.createElement("li")
    // Created a new list item that will be added
    newGroceryItem.innerText = textInput
    // Input field item stored in textInput variable gets assigned to the new <li>'s text field
    let groceryItems  = document.getElementById("groceryList")
    // Accessed parent node where child will be added
    groceryItems.appendChild(newGroceryItem)
    // Append our fully build child node to the parent node

    // Feelin' a little extra?
    e.target.style.backgroundColor = "slategray"
    // Change button color post-click
})

// InnerHTML example
/*
    Allows us to write raw HTML inside of a string when innerText would not allow us to do so.
*/
let boldHTMLexample = document.querySelector(".listItem")
console.log(boldHTMLexample)
boldHTMLexample.innerHTML = "Hello <strong>class!</strong> How are you all?"



