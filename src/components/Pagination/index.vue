<template>
  <div>
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
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    total: {
      type: Number,
      default: 0
    }
  }
}
</script>
