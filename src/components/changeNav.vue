<template>
  <div class="changeNav">
    <button><router-link to="/todolist">TodoList</router-link></button>
    <button>
      <router-link to="/Bookkeeping">记账</router-link>
    </button>
    <button>
      <router-link to="/drawingBoard">画板</router-link>
    </button>
    <button>尽情期待</button>
  </div>
</template>

<script>
export default {
  //数据区
  data() {
    return {}
  },
  //方法区
  methods: {},
  //计算属性区
  computed: {},
  //父传子接收区
  props: [],
  //生命周期区
  created() {},
  mounted() {},
  //组件区
  components: {},
}
</script>

<style lang="less" scoped>
.changeNav {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translate(0, -50%);
  button {
    width: 100px;
    height: 100px;
    font-size: 19px;
    padding: 10px;
    margin-bottom: 30px;
    border: none;
    font-family: YouYuan;
    font-weight: bold;
    border-radius: 15px;
    background: #fec89a;
    outline: none;
    a {
      text-decoration: none;
      color: #000;
    }
    a:hover {
      color: brown;
    }
  }
}
</style>
