import { array2tree } from '../src/array2tree'

describe('array2tree', () => {
  it('should return a tree', () => {
    const array = [
      { id: 1, name: 'a', parentId: 0 },
      { id: 2, name: 'b', parentId: 1 },
      { id: 3, name: 'c', parentId: 1 },
      { id: 4, name: 'd', parentId: 2 },
      { id: 5, name: 'e', parentId: 2 },
      { id: 6, name: 'f', parentId: 3 },
      { id: 7, name: 'g', parentId: 3 },
    ]
    const tree = array2tree(array)
    expect(tree).toEqual({
      id: 1,
      name: 'a',
      children: [
        {
          id: 2,
          name: 'b',
          children: [
            {
              id: 4,
              name: 'd',
            },
            {
              id: 5,
              name: 'e',
            },
          ],
        },
        {
          id: 3,
          name: 'c',
          children: [
            {
              id: 6,
              name: 'f',
            },
            {
              id: 7,
              name: 'g',
            },
          ],
        },
      ],
    })
  })
})
