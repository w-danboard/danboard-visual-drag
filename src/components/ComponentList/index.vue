<template>
  <div class="component-list" @dragstart="handleDragStart">
    <div class="list" v-for="(item, index) in componentList" :key="index"
      :data-index="index" draggable>
      <i :class="item.icon"></i>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<script>
import componentList from '@/custom-component/component-list' // 左侧列表数据

export default {
  name: 'component-list',
  data () {
    return {
      componentList
    }
  },
  methods: {
    handleDragStart (e) {
      console.log(e, '===>')
      e.dataTransfer.setData('index', e.target.dataset.index)
    }
  }
}
</script>

<style lang="scss" scoped>
.component-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;

    .list {
        width: 45%;
        border: 1px solid #ddd;
        cursor: grab;
        margin-bottom: 10px;
        text-align: center;
        color: #333;
        padding: 2px 5px;
    }
}
</style>