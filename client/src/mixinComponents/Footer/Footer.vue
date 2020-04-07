<template>
  <mt-tabbar>
    <mt-tab-item v-for="item in footers" id="item.name" :key="item.name">
      <span v-on:click="()=>handleClick(item)">
        <p>{{item.title}}</p>
      </span>
    </mt-tab-item>
    <mt-tab-item>
      <span v-on:click="addFlow">
        <p>记一笔</p>
      </span>
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: 'Footer',
  data: () => {
    return {
      footers: [
        { name: 'account', icon: 'name', title: '账户', link: '' },
        { name: 'flow', icon: 'flow', title: '流水', link: '/flows' }
      ]
    }
  },

  methods: {
    handleClick: function(item) {
      if (item.link) {
        this.$router.push(item.link)
      }
    },
    addFlow: function() {
        this.$router.push('/flow/add')
    }
  }
}
</script>

<style scoped>
#header {
  background: #f0f0f0;
  line-height: 60px;
  height: 60px;
}

.sign-out-icon,
.sign-in-icon {
  float: right;
  margin-right: 0.5rem;
}
</style>
