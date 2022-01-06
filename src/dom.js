window.dom = {
  // ---------------------------------
  // 下面是增
  // ---------------------------------

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

  // ---------------------------------
  // 下面是删
  // ---------------------------------

  remove(childNode) {
    childNode.remove();
  },

  // ---------------------------------
  // 下面是改
  // ---------------------------------

 attribute(node,attr) {
  
 }


  // ---------------------------------
  // 下面是查
  // ---------------------------------
};
