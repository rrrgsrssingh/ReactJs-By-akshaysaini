/*alert("Hello");
prompt("please enter a number");
const s=React.createElement("h1",{id:"heading"},"hello React");
const k=React.createRoot(document.getElemenrById("root"));
k.render(s);*/
// Creation of Nested tag
const p=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},(React.createElement("h1",{},"I am h1 taggh"))));
const s=ReactDOM.createRoot(document.getElementById("root"));
s.render(p);
console.log(p);
