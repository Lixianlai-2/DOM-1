window.dom = {
  // ------------------------
  // 下面是增
  // ------------------------

  create(node) {
    return document.createElement(node);
  },

  createHTML(string) {
    const container = document.createElement("template");
    container.innerHTML = string;
    return container.content.firstElementChild; // 因为children不返回文本节点
  },

  before(nodePrevious, node) {
    return node.parentNode.insertBefore(nodePrevious, node);
  },

  after(node, nodeNextSiblingPrevious) {
    // 在node后面插入一个节点，相当于node后面的节点(也就是node.nextSibling)往前插入一个节点
    return node.parentNode.insertBefore(
      nodeNextSiblingPrevious,
      node.nextSibling
    );
  },

  child(parent, node) {
    return parent.appendChild(node);
  },

  newParent(node, parent) {
    // 先把patent放到node前面，因为parent原本可能是不在页面上的
    dom.before(parent, node);
    dom.child(parent, node);
  },

  // -------------------------
  // 下面是删
  // -------------------------

  remove(childNode) {
    childNode.parentNode.removeChild(childNode); // 兼容ie
    // childNode.remove(); //较新的做法
    return childNode;
  },

  empty(ParentNode) {
    // 空数组，用来放被删除的后代节点
    const array = [];

    // 找到父元素当下的第一个子节点
    let x = ParentNode.firstChild;

    // 当父元素节点的第一个子节点存在的时候（非null时），执行下面的代码
    while (x) {
      // 把第一个子节点删除，然后放进array数组中
      array.push(dom.remove(ParentNode.firstChild));

      // 然后让后面的那个节点充当父节点的firstChild节点
      x = ParentNode.firstChild;
    }
  },

  // ------------------------
  // 下面是改
  // ------------------------

  // 设置属性与读取属性。根据参数的个数，写不同的代码，就是重载

  attribute(node, attrName, attrValue) {
    if (arguments.length === 3) {
      node.setAttribute(attrName, attrValue);
    } else if (arguments.length === 2) {
      // 这里记得到return
      return node.getAttribute(attrName);
    }
  },

  // attribute(node, attrName, attrValue) {
  //   if (attrValue) {
  //     node.setAttribute(attrName, attrValue);
  //   } else {
  //     // 这里记得到return
  //     return node.getAttribute(attrName);
  //   }
  // },

  // 改写文本内容。
  text(node, string) {
    if (node.innnerText) {
      node.innnerText = string;
    } else {
      node.textContent = string;
    }
  },

  // 改写HTML内容
  html(node, string) {
    node.innerHTML = string;
  },

  // 用于修改style。注意value里面不能带有;因为这个错误浪费我20分钟
  style(node, nameOrString, value) {
    if (arguments.length === 3) {
      // 注意，这里需要用[]才能表示变量，而直接用.运算符，会将内容变成字符串
      return (node.style[nameOrString] = value);
    } else if (arguments.length === 2) {
      // 注意类型是字符串
      if (typeof nameOrString === "string") {
        node.style = nameOrString;

        // instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
      } else if (nameOrString instanceof Object) {
        let Obj = nameOrString;
        for (let key in Obj) {
          node.style[key] = Obj[key];
        }
      }
    }
  },

  // 增加class
  addClass(node, string) {
    node.classList.add(string);
  },

  // 删除class
  removeClass(node, string) {
    node.classList.remove(string);
  },

  // 判断是否有class
  hasClass(node, className) {
    return node.classList.contains(className);
  },

  // 添加事件监听
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn);
  },

  // 删除事件监听
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn);
  },

  // ------------------------
  // 下面是查
  // ------------------------

  find(selector, scope) {
    // 关键在于要return，因为我需要这个值

    // 如果存在第二个scope，那么就用scope执行后面的代码，如果没有，就用document执行
    return (scope || document).querySelectorAll(selector);

    // return document.querySelector(name);
    // return document.querySelectorAll(name)[0];
  },

  parent(node) {
    return node.parentNode;
  },

  children(node) {
    return node.children;
  },

  siblings(node) {
    // 简单方法
    // return Array.from(node.parentNode.children).filter((n) => n !== node);

    // return node.parentNode.children
    let allChildren = node.parentNode.children;

    let siblingArr = [];
    for (let i = 0; i < allChildren.length; i++) {
      if (allChildren[i] !== node) {
        siblingArr.push(allChildren[i]);
      }
    }
    return siblingArr;
  },

  next(node) {
    return node.nextElementSibling;

    // 复杂的做法：
    // let x = node.nextSibling
    // while(x && x.nodeType === 3) {
    //   x = x.nextSibling
    // }

    // return x
  },

  previous(node) {
    return node.previousElementSibling;

    //复杂的做法：
    // let x = node.previousSibling
    // while(x && x.nodeType === 3) {
    //   x = x.previousSibling
    // }

    // return x
  },

  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },

  index(node) {
    // 得到node的子节点
    const list = dom.children(node.parentNode);

    let i;

    for (i = 0; 9 < list.length; i++) {
      // 当子节点中有跟node相同的时，停止代码，返回i
      if (list[i] === node) {
        break;
      }
    }
    return i;
  },
};
