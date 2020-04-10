<template>
  <div class="flow-item">
    <div></div>
    <div class="flow-name">
      <p class="name">{{info.title}}</p>
      <p class="sub-title">{{info.lastest.name+''+info.lastest.amount}}</p>
    </div>
    <div class="amount">
      <p class="expense">{{info.expense}}</p>
      <p class="earn">{{info.earn}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flowItem',
  data() {
    return {}
  },
  props: {
    info: { type: Object, default: () => ({ lastest: {} }) }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flow-item {
  text-align: center;
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px #f5f5f5;
  padding: 5px;
}
.flow-item p{
  margin: 0px;
  line-height: 1.3rem;
}
.flow-name{
  width: 60%;
  text-align: left;
}
.amount{
  width: 25%;
}
.expense{
  color: orangered;
  font-size: 12px;
}
.earn{
  color: green;
  font-size: 12px;
}
.sub-title{
  color: #ccc;
}
.name {
  color: #666;
}
</style>
