<template>
  <div class="container">
    <form-create v-model="fApi" :rule="rule" :option="options" />
    <Toolbar
      :current-page.sync="currentPage"
      :total="total"
      :page-size.sync="pageSize"
    >
      <el-button
        v-for="item in buttons"
        :key="item.handler"
        type="primary"
        size="mini"
        class="toolBtn"
        @click="fire(item.handler)"
      >{{ item.name }}</el-button>
      <template v-slot:settings>
        <el-popover
          v-model="popVisible"
          placement="bottom"
          width="150"
        >
          <template>
            <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;" />
            <el-checkbox-group v-model="checked" @change="handleCheckedChange">
              <el-checkbox v-for="item in checks" :key="item" style="display:block" :label="item" />
            </el-checkbox-group>
          </template>
          <i slot="reference" class="el-icon-setting setting" />
        </el-popover>
      </template>
    </Toolbar>
    <ListGrid :columns="columns" :data-list="dataList">
      <el-table-column
        v-if="showOperations"
        fixed="right"
        label="操作"
        width="100"
      >
        <template>
          <el-button
            v-for="item in operations"
            :key="item.handler"
            type="text"
            size="small"
            @click="fire(item.handler)"
          >{{ operations.name }}</el-button>
        </template>
      </el-table-column>
    </ListGrid>
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
      total: 0,
      pageSize: 20,
      columns: [],
      dataList: [],
      buttons: [],
      showOperations: false,
      operations: [],
      popVisible: false,
      checkAll: false,
      isIndeterminate: true
    }
  },
  computed: {
    checked: {
      get: function() {
        return this.columns.filter(item => {
          return item.show
        }).map(item => {
          return item.label
        })
      },
      set: function(newValue) {
        this.columns.forEach((item, index) => {
          if (newValue.includes(item.label)) {
            this.columns[index].show = true
          } else {
            this.columns[index].show = false
          }
        })
      }
    },
    checks() {
      return this.columns.map(item => {
        return item.label
      })
    }
  },
  methods: {
    search() {
      const formData = this.fApi.formData()
      console.log(formData)
    },
    fire(handler) {
      this[handler]()
    },
    handleCheckAllChange(val) {
      this.checked = val ? this.checks : []
      this.isIndeterminate = false
    },
    handleCheckedChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.checks.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.checks.length
    }
  }
}
</script>

<style lang="scss" scoped>
.setting {
  margin-right: 10px;
  cursor: pointer;
}
</style>
