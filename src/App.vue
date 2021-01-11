<template>
  <div id="app">
    <!-- 头部 -->
    <header class="app-header">
      <button>撤销</button>
      <button>重做</button>
      <button>预览</button>
      <button>保存</button>
    </header>
    <!-- 主体部分 -->
    <main>
      <!-- 左侧组件列表 -->
      <section class="left">

      </section>
      <!-- 中间画布 -->
      <section class="center">

      </section>
      <!-- 右侧属性列表 -->
      <section class="right">

      </section>
    </main>
  </div>
</template>

<script>
import Editor from './components/Editor/index.vue'

export default {
  name: 'App',
  components: {
    Editor
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;

  .app-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ededed;

    button {
      margin: 0 5px;
    }
  }
}
</style>
