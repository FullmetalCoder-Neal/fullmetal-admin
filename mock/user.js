module.exports = [
  // user login
  {
    url: '/fullmetal-admin/user/login',
    type: 'post',
    response: config => {
      const token = 'admin-token'

      return {
        'access_token': token
      }
    }
  },

  // get user info
  {
    url: '/fullmetal-admin/user/info',
    type: 'get',
    response: config => {
      return {
        errCode: 0,
        data: {
          personName: 'Neal',
          unitName: '不正常人类研究中心',
          permitSet: [
            'form:view',
            'table:view'
          ]
        }
      }
    }
  }
]
