<template>
  <div class="wrap flex flex-between flex-mid">
    <div class="toolbar">
      <el-button v-if="showAdd" type="primary" size="mini" class="toolBtn">新增</el-button>
      <el-button v-if="showDel" type="primary" size="mini" class="toolBtn">删除</el-button>
      <el-button v-if="showSearch" type="primary" size="mini" class="toolBtn">查询</el-button>
      <slot />
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 20, 25, 50, 100]"
        :page-size="pageSize"
        layout="slot, prev, jumper, next"
        :total="total"
        @prev-click="handlePrevClick"
        @next-click="handleNextClick"
      >
        <!-- eslint-disable-next-line -->
      <button class="first-pager" :disabled="currentPage===1" @click="jumpPage('1')">|<<</button>
      </el-pagination>
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 20, 25, 50, 100]"
        :page-size="pageSize"
        layout="slot, sizes"
        :total="total"
        @size-change="handleSizeChange"
      >
        <button
          class="last-pager"
          :disabled="currentPage===Math.ceil(total/pageSize)"
          @click="jumpPage('0')"
        >>>|</button>
      </el-pagination>
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 20, 25, 50, 100]"
        :page-size="pageSize"
        layout="slot, total"
        :total="total"
      >
        <div class="total-pages">共 {{ Math.ceil(total/pageSize) }} 页</div>
      </el-pagination>
    </div>
    <slot name="settings" />
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    showAdd: {
      type: Boolean,
      default: true
    },
    showDel: {
      type: Boolean,
      default: true
    },
    showSearch: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    jumpPage(val) {
      switch (val) {
        case '1':// 跳转到首页
          this.$emit('update:currentPage', 1)
          break
        case '0':// 跳转到末页
          this.$emit('update:currentPage', Math.ceil(this.total / this.pageSize))
          break
      }
    },
    handleSizeChange(val) {
      this.$emit('update:pageSize', val)
    },
    handlePrevClick() {
      this.$emit('update:currentPage', this.currentPage - 1)
    },
    handleNextClick() {
      this.$emit('update:currentPage', this.currentPage + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
}

.toolbar {
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: auto;
}
.first-pager, .last-pager {
  font-size: 13px;
  line-height: 28px;
  cursor: pointer;
  &:hover {
    color:#409EFF;
  }
  &:disabled {
    &:hover {
      color:#C0C4CC;
    }
  }
}
.total-pages {
  font-size: 13px;
  line-height: 28px;
  display: inline-block;
  font-weight: normal !important;
  margin-right: 5px;
  color: #606266;
}

.el-pagination {
  padding: 2px 0;
}
</style>
