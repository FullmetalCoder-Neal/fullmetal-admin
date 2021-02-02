import { getList } from '@/api/list'
export default {
  data() {
    return {
      rule: [
        {
          type: 'input',
          title: '姓名',
          field: 'col8_1',
          col: {
            span: 8
          }
        },
        {
          type: 'input',
          title: 'col8',
          field: 'col8_2',
          col: {
            span: 8
          }
        },
        {
          type: 'input',
          title: 'col8',
          field: 'col8_3',
          col: {
            span: 8
          }
        },
        {
          type: 'input',
          title: 'col8',
          field: 'col8_4',
          col: {
            span: 8
          }
        },
        {
          type: 'input',
          title: 'col8',
          field: 'col8_5',
          col: {
            span: 8
          }
        },
        {
          type: 'input',
          title: 'col8',
          field: 'col8_6',
          col: {
            span: 8
          }
        }
      ],
      columns: [
        {
          prop: 'name',
          label: '姓名',
          show: true
        },
        {
          prop: 'age',
          label: '年龄',
          show: true
        },
        {
          prop: 'gender',
          label: '性别',
          show: false
        }
      ],
      buttons: [
        {
          name: '审核',
          handler: 'audit'
        }
      ]
    }
  },
  created() {
  },
  watch: {
    currentPage: {
      handler(to, from) {
        this.search()
      },
      immediate: true
    }
  },
  methods: {
    audit() {
      console.log(1)
    },
    search() {
      getList({}, { page: this.currentPage, size: this.pageSize }).then(res => {
        this.dataList = res.data.dataList
        this.total = res.data.totalCount
      })
    }
  }
}
