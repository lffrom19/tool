<template>
  <div>
    <h1 class="title animate__animated animate__fadeIn">TodoList</h1>
    <div class="todoBox animate__animated animate__fadeIn">
      <input
        type="text"
        placeholder="What to do?"
        autofocus
        maxlength="20"
        v-model="todo"
        @keyup.enter="add"
      />
      <el-button class="confirm" type="primary" round @click="add"
        >确定</el-button
      >
      <el-card class="box-card">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="text_item animate__animated animate__fadeInDown"
        >
          {{ item }}
          <span>{{ time[index] }}</span>
          <i class="el-icon-circle-close" @click="remove(index)"></i>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
moment.locale('zh-cn', {
  longDateFormat: {
    llll: 'HH:mm:ss M月D日YYYY年',
  },
})
export default {
  //数据区
  data() {
    return {
      todo: '',
      list: [],
      now: '',
      time: [],
    }
  },
  //方法区
  methods: {
    add() {
      if (!this.todo) return
      this.list.unshift(this.todo)
      this.todo = ''
      this.savelist()

      this.now = moment().format('llll')
      this.time.unshift(this.now)
      this.now = ''
      this.savetime()
    },
    remove(index) {
      this.list.splice(index, 1)
      this.time.splice(index, 1)
      this.savelist()
      this.savetime()
    },
    savelist() {
      let a = JSON.stringify(this.list)
      localStorage.setItem('list', a)
    },
    savetime() {
      let b = JSON.stringify(this.time)
      localStorage.setItem('time', b)
    },
  },
  //计算属性区
  computed: {},
  //父传子接收区
  props: [],
  //生命周期区
  created() {},
  mounted() {
    this.todo = sessionStorage.todo || ''
    if (localStorage.getItem('list')) {
      try {
        this.list = JSON.parse(localStorage.getItem('list'))
      } catch (e) {
        localStorage.removeItem('list')
      }
    }
    if (localStorage.getItem('time')) {
      try {
        this.time = JSON.parse(localStorage.getItem('time'))
      } catch (e) {
        localStorage.removeItem('time')
      }
    }
  },
  watch: {
    todo(newtodo) {
      sessionStorage.todo = newtodo
    },
  },
  //组件区
  components: {},
}
</script>

<style lang="less" scoped>
@import '../basecss/global.less';
.title {
  color: @mycolor;
  font-size: 120px;
  display: flex;
  justify-content: center;
  text-shadow: 5px 5px 4px #ccc;
}
.todoBox {
  display: flex;
  width: 800px;
  height: 600px;
  background: rgb(218, 221, 186);
  border-radius: 18px;
  margin: 0 auto;
  flex-direction: column;
  position: relative;
  input {
    width: 100%;
    border: none;
    outline: none;
    overflow: hidden;
    padding: 20px 20px 20px 36px;
    box-sizing: border-box;
    font-size: 20px;
    background: rgb(161, 151, 151);
  }
  .confirm {
    position: absolute;
    width: 100px;
    height: 45px;
    left: 100%;
    top: 7px;
    transform: translate(-110%);
  }
  .box-card {
    height: 100%;
    background: rgb(218, 221, 186);
    border: none;
    font-size: 25px;
    position: relative;
    overflow: auto;
    div {
      padding: 15px;
      position: relative;
      border-bottom: 2px solid #ccc;
      span {
        position: absolute;
        right: 100px;
        font-size: 16px;
        top: 50%;
        transform: translate(0, -50%);
      }
      .el-icon-circle-close {
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translate(0, -50%);
      }
      .el-icon-circle-close:hover {
        color: red;
      }
    }
    div:hover {
      color: @mycolor;
    }
  }
  .box-card::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .box-card::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
  }
  .box-card::-webkit-scrollbar-thumb {
    background: #bfbfbf;
    border-radius: 10px;
  }
  .box-card::-webkit-scrollbar-thumb:hover {
    background: #333;
  }
  .box-card::-webkit-scrollbar-corner {
    background: #179a16;
  }
}
</style>
