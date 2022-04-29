/**
 * 树转数组
 */

function tree2array(tree, list = []) {
  if (tree.children) {
    tree.children.forEach(item => {
      list.push(item)
      tree2array(item, list)
    })
  }
  return list
}
