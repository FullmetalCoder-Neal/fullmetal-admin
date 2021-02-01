<template>
  <div class="container">
    <form-create v-model="fApi" :rule="rule" :option="options" />
    <Toolbar :current-page.sync="currentPage" :total="total" :page-size.sync="pageSize">
      <button v-for="item in buttons" :key="item.handler" class="toolBtn" @click="fire(item.handler)">{{ item.name }}</button>
    </Toolbar>
    <ListGrid :columns="columns" :data-list="dataList" />
  </div>
</template>

<script>
export default {
  name: 'SearchList',
  data() {
    return {
      fApi: {},
      options: {
        submitBtn: false
      },
      currentPage: 1,
      total: 399,
      pageSize: 20,
      columns: [],
      dataList: [],
      buttons: []
    }
  },
  methods: {
    search() {
      const formData = this.fApi.formData()
      console.log(formData)
    },
    fire(handler) {
      this[handler]()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
