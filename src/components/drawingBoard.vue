<template>
  <div>
    <h1 class="title animate__animated animate__fadeIn">Drawing Board</h1>
    <div class="todoBox animate__animated animate__fadeIn">
      <input type="text" placeholder="What to do?" @keyup="add" autofocus />
    </div>
  </div>
</template>

<script>
export default {
  //数据区
  data() {
    return {}
  },
  //方法区
  methods: {
    add() {},
  },
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
@import '../basecss/global.less';
.title {
  color: @mycolor;
  font-size: 120px;
  display: flex;
  justify-content: center;
  text-shadow: 5px 5px 4px #ccc;
}
.todoBox {
  width: 800px;
  height: 600px;
  background: rgb(218, 221, 186);
  border-radius: 18px;
  margin: 0 auto;
  input {
    width: 100%;
    border: none;
    outline: none;
    overflow: hidden;
    padding: 16px 16px 16px 36px;
    box-sizing: border-box;
    font-size: 20px;
    background: rgb(161, 151, 151);
  }
}
</style>
