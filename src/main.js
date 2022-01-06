let div1 = dom.createHTML("<div><p>div1</p></div>");
let div2 = dom.createHTML("<td>div2</td>");
let div3 = dom.createHTML("<div>div3</div>");
let div4 = dom.create("div");
let p = dom.createHTML("<p>这是p的内容</p>");
let childDiv = document.querySelector(".childDiv");

let body = document.querySelector("body");

// div1.classList.add("block");
// div2.classList.add("block");
// div3.classList.add("block");
// div4.classList.add("block");
// p.classList.add("block");

// body.appendChild(div1);
// body.appendChild(div2);
// body.appendChild(div3);
// dom.child(body, div4);

// 如果父节点没有在页面上呢
// dom.child(p,childDiv)
// dom.newParent(childDiv, p);
// dom.remove(body);

// dom.remove(div1);
// dom.remove(div2);
// dom.remove(div3);
// dom.remove(p);

// div2.parentNode.insertBefore(div3, div2.nextSibling);

// 相当于const  childNodes = empty.childNodes
// const { chiildNodes } = node;

// 这是删除整个empty，包括其后代元素
// dom.remove(empty);

// 这是仅仅消除其内部的内容，本身还存在
// dom.empty(empty);

// console.log(empty);

// console.log(empty.firstChild);

let empty = document.querySelector("#empty");

// dom.text(empty, "给它添加文本内容");

// 设置title
dom.attribute(empty, "title", "设置title");

// 得到它的id
// console.log(dom.attribute(empty, "id"));

dom.addClass(empty, "whatEver");

// dom.removeClass(e1, "inner-block");

let fn = () => console.log("clicked!");

dom.on(empty, "click", fn);

// 如果要remove掉一个函数，需要有函数名，因为如果分开写函数，虽然长得一样，但实际上是不同地址的函数对象
dom.off(empty, "click", fn);

// 注意这里面不能有;
dom.style(e1, "border", "5px solid green");

dom.style(e2, { border: "1px solid red", padding: "10px" });

dom.style(e3, "border:3px solid blue; width:10px");
