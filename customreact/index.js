const container = document.querySelector("#root")
const reacElement = {
  type :'a',
 props :{
href :"https://google.com",
target :"_blank"
 } ,
 Children: "click me to visit"
}

function reactcontainer(container,reacElement){
const elem  = document.createElement(reacElement.type)
elem.innerHTML = reacElement.Children,
elem.setAttribute("class","newOne")
elem.setAttribute("href",reacElement.props.href)
container.appendChild(elem)
}
reactcontainer(container,reacElement)