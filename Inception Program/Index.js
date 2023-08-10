const heading = React.createElement("h1",{style : { background:"red" ,  padding:"100px "}},"Hey There! I am h1")

const heading2 = React.createElement("h2", {style : {background: "blue" , padding:"100px"}} , "I am H2 ");

const container = React.createElement("div",{id:"container"},[heading,heading2])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(container);