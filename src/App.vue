<template>
  <div id="app">
    <!-- 头部 -->
    <header class="app-header">
      <el-button>撤销</el-button>
      <el-button>重做</el-button>
      <el-button>预览</el-button>
      <el-button>保存</el-button>
    </header>
    <!-- 主体部分 -->
    <main>
      <!-- 左侧组件列表 -->
      <section class="left">
        <ComponentList/>
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
import ComponentList from '@/components/ComponentList/index.vue' // 左侧列表组件
import Editor from '@/components/Editor/index.vue' // 编辑器

export default {
  name: 'App',
  components: {
    ComponentList,
    Editor
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;

  header {
        height: 64px;
        line-height: 64px;
        background: #fff;
        border-bottom: 1px solid #ddd;
    }

    main {
        height: calc(100% - 64px);
        position: relative;

        .left {
            position: absolute;
            height: 100%;
            width: 200px;
            left: 0;
            top: 0;
            padding-top: 10px;
        }

        .right {
            position: absolute;
            height: 100%;
            width: 262px;
            right: 0;
            top: 0;
        }

        .center {
            margin-left: 200px;
            margin-right: 262px;
            background: #f5f5f5;
            height: 100%;
            overflow: auto;
            padding: 20px;

            .content {
                height: 100%;
                overflow: auto;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

    .placeholder {
        text-align: center;
        color: #333;
    }

    .el-scrollbar__view {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding-left: 14px;

        .animate > div {
            width: 100px;
            height: 60px;
            background: #f5f8fb;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 12px;
            margin-bottom: 10px;
            font-size: 12px;
            color: #333;
            border-radius: 3px;
            user-select: none;
            cursor: pointer;
        }
    }

    .el-tag {
        display: block;
        width: 50%;
        margin: auto;
        margin-bottom: 10px;
    }

    .div-animation {
        text-align: center;

        & > div {
            margin-top: 20px;
        }
    }

    .insert {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #FFF;
        border: 1px solid #DCDFE6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        margin-left: 10px;

        &:active {
            color: #3a8ee6;
            border-color: #3a8ee6;
            outline: 0;
        }

        &:hover {
            background-color: #ecf5ff;
            color: #3a8ee6;
        }
    }

    .canvas-config {
        display: inline-block;
        margin-left: 10px;
        font-size: 14px;
        color: #606266;

        input {
            width: 50px;
            margin-left: 10px;
            outline: none;
            padding: 0 5px;
            border: 1px solid #ddd;
            color: #606266;
        }

        span {
            margin-left: 10px;
        }
    }

    .div-events {
        text-align: center;
        padding: 0 20px;
        
        .el-button {
            display: inline-block;
            margin-bottom: 10px;
        }
    }

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
