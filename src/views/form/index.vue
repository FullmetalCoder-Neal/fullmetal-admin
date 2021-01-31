<template>
  <div class="container">
    <form-create v-model="fApi" :rule="rule" :option="options" />
    <Toolbar :current-page.sync="currentPage" :total="total" :page-size.sync="pageSize">
      <button class="toolBtn">审核</button>
    </Toolbar>
    <ListGrid :columns="columns" :data-list="dataList" />
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      fApi: {},
      options: {
        submitBtn: false
      },
      rule: [
        {
          type: 'input',
          title: 'col8',
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
      currentPage: 1,
      total: 399,
      pageSize: 20,
      columns: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'gender',
          label: '性别'
        }
      ],
      dataList: [
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
    }
  },
  methods: {
    search() {
      const formData = this.fApi.formData()
      console.log(formData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
