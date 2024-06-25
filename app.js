
/* <div class="parent">
    <div class="child1">
        <h1 class="sibling1"></h1>
        <h2 class="sibling2"></h2>
    </div>
    <div class="child2">
        <h1 class="sibling3"></h1>
        <h2 class="sibling4"></h2>
    </div>
</div> */


//Creating a react element (javascript object)
const heading=React.createElement(
    "div",
    {id: "parent"},
    [React.createElement("div",{id: "child1"},[
        React.createElement("h1",{id: "sibling1"},"Manshi Yadav"),
        React.createElement("h3",{id: "sibling2"},"-My name")]),
        React.createElement("div",{id: "child2"},[
        React.createElement("h1",{id : "sibling3"},"CSJM University"),
        React.createElement("h3",{id: "sibling4"},"-My college name")
    ])
]);

//Creating a root (Root is a place where all the react code will work)
const root=ReactDOM.createRoot(document.querySelector(".root"));

//Putting the heading inside the root
root.render(heading);     
