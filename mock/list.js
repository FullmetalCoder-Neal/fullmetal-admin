const { pagination } = require('./utils')

module.exports = [
  // get dataList
  {
    url: '/fullmetal-admin/rs/list',
    type: 'post',
    response: config => {
      const list = [
        {
          id: 0,
          name: 'Neal',
          age: 30,
          gender: 'male'
        },
        {
          id: 1,
          name: 'Peter',
          age: 30,
          gender: 'male'
        },
        {
          id: 2,
          name: 'Neal',
          age: 30,
          gender: 'male'
        },
        {
          id: 3,
          name: 'Peter',
          age: 30,
          gender: 'male'
        },
        {
          id: 4,
          name: 'Neal',
          age: 30,
          gender: 'male'
        },
        {
          id: 5,
          name: 'Peter',
          age: 30,
          gender: 'male'
        },
        {
          id: 6,
          name: 'Neal',
          age: 30,
          gender: 'male'
        },
        {
          id: 7,
          name: 'Peter',
          age: 30,
          gender: 'male'
        },
        {
          id: 8,
          name: 'Neal',
          age: 30,
          gender: 'male'
        },
        {
          id: 9,
          name: 'Peter',
          age: 30,
          gender: 'male'
        },
        {
          id: 10,
          name: 'Neal',
          age: 30,
          gender: 'male'
        },
        {
          id: 11,
          name: 'Peter',
          age: 30,
          gender: 'male'
        },
        {
          id: 12,
          name: 'Neal',
          age: 30,
          gender: 'male'
        },
        {
          id: 13,
          name: 'Neal',
          age: 30,
          gender: 'male'
        },
        {
          id: 14,
          name: 'Peter',
          age: 30,
          gender: 'male'
        },
        {
          id: 15,
          name: 'Neal',
          age: 30,
          gender: 'male'
        },
        {
          id: 16,
          name: 'Neal',
          age: 30,
          gender: 'male'
        },
        {
          id: 17,
          name: 'Peter',
          age: 30,
          gender: 'male'
        },
        {
          id: 18,
          name: 'Neal',
          age: 30,
          gender: 'male'
        },
        {
          id: 19,
          name: 'Neal',
          age: 30,
          gender: 'male'
        },
        {
          id: 20,
          name: 'Peter',
          age: 30,
          gender: 'male'
        },
        {
          id: 21,
          name: 'Neal',
          age: 30,
          gender: 'male'
        }
      ]
      const { page, size } = config.query

      const dataList = pagination(list, page, size)
      return {
        errCode: 0,
        data: {
          dataList,
          totalCount: list.length
        }
      }
    }
  }
]
