/**
 * array to tree structure
 */
export interface IArrayItem {
  id: number
  name: string
  parentId: number
}

export interface ITreeNode {
  id: number
  name: string
  children?: ITreeNode[]
}

export function array2tree(nodeArr: IArrayItem[]): ITreeNode | null {
  const idToTreeNode: Map<number, ITreeNode> = new Map()
  let root = null

  nodeArr.forEach(item => {
    const { id, name, parentId } = item
    const treeNode: ITreeNode = { id, name }

    idToTreeNode.set(id, treeNode)

    const parentNode = idToTreeNode.get(parentId)
    if (parentNode) {
      if (!parentNode.children) parentNode.children = []
      parentNode.children.push(treeNode)
    }

    if (parentId === 0) root = treeNode
  })

  return root
}
