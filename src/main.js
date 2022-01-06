let div1 = dom.createHTML("<div><p>div1</p></div>");
let div2 = dom.createHTML("<td>div2</td>");
let div3 = dom.createHTML("<div>div3</div>");
let div4 = dom.create("div");
let p = dom.createHTML("<p>这是p的内容</p>");
let childDiv = document.querySelector(".childDiv");

let body = document.querySelector("body");

div1.style =
  "border:1px solid blue;width:100px;height:100px;margin-bottom:5px;";

div2.style = "border:1px solid red;width:100px;height:100px;";

div3.style = "border:1px solid blue;width:100px;height:100px;margin-top:5px";

div4.style = "border:1px solid orange;width:100px;height:100px;margin-top:5px;";

p.style = "background-color:red;height:100px;";

body.appendChild(div1);
body.appendChild(div2);
body.appendChild(div3);
dom.child(body, div4);

// 如果父节点没有在页面上呢
// dom.child(p,childDiv)
dom.newParent(childDiv, p);
dom.remove(body);

// dom.remove(div1);
// dom.remove(div2);
// dom.remove(div3);
// dom.remove(p);

// div2.parentNode.insertBefore(div3, div2.nextSibling);
