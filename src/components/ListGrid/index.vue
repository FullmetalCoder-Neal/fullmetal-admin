<template>
  <el-table
    ref="table"
    :data="dataList"
    border
    stripe
    height="100"
    :cell-style="{ paddingTop: 0, paddingBottom: 0}"
    :header-cell-style="{ paddingTop: '3px', paddingBottom: '3px'}"
    row-key="id"
  >
    <el-table-column
      type="selection"
      width="50"
      fixed="left"
    />
    <el-table-column
      label="序号"
      type="index"
      width="50"
      fixed="left"
    />
    <el-table-column
      v-for="item in cols"
      :key="item.prop"
      :column-key="item.prop"
      :prop="item.prop"
      :label="item.label"
      show-overflow-tooltip
      min-width="50px"
    />

    <el-table-column
      fixed="right"
      label="操作"
      width="100"
    >
      <template>
        <el-button type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  name: 'ListGrid',
  props: {
    columns: {
      type: Array,
      required: true
    },
    dataList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      cols: this.columns
    }
  },
  watch: {
    columns: {
      handler(to, from) {
        this.cols = to.filter(item => {
          return item.show
        })
        this.$nextTick(() => {
          this.$refs.table.doLayout()
        })
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    // this.rowDrag()
    this.columnDrag()
  },
  methods: {
    // 行拖拽
    // rowDrag() {
    //   const tbody = document.querySelector('.el-table__body-wrapper tbody')
    //   const _this = this
    //   Sortable.create(tbody, {
    //     onEnd({ newIndex, oldIndex }) {
    //       const currRow = _this.rows.splice(oldIndex, 1)[0]
    //       _this.rows.splice(newIndex, 0, currRow)
    //     }
    //   })
    // },
    // 列拖拽
    columnDrag() {
      const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          const oldItem = this.cols[evt.oldIndex - 2]
          this.cols.splice(evt.oldIndex - 2, 1)
          this.$nextTick(() => {
            this.cols.splice(evt.newIndex - 2, 0, oldItem)
          })
        }
      })
    }
  }
}
</script>
