<template>
  <div>
    <change-nav></change-nav>
    <transition name="bounce" mode="out-in"
      ><router-view></router-view
    ></transition>
    <h1>HAVE A NICE DAY</h1>
  </div>
</template>

<script>
import todoList from './components/todoList.vue'
import changeNav from './components/changeNav.vue'

export default {
  components: { todoList, changeNav },
}
</script>
<style lang="less" scoped>
.bounce-enter-active {
  animation: backInDown 1s;
}
.bounce-leave-active {
  animation: backOutLeft 1.5s;
}
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  color: red;
  font-size: 80px;
  font-weight: bold;
}
</style>
