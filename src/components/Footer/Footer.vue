<template>
  <div class="footer-container">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="msite" class="iconfont iconicon-test">外卖</mt-tab-item>
      <mt-tab-item id="search" class="iconfont iconsousuo">搜索</mt-tab-item>
      <mt-tab-item id="order" class="iconfont icon6">订单</mt-tab-item>
      <mt-tab-item id="profile" class="iconfont iconwodedangxuan">我的</mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: 'msite'
    }
  },
  created () {
    this.selected = window.sessionStorage.getItem('activeTab') || this.selected
  },
  methods: {
    show () {
      console.log('aaa')
    }
  },
  watch: {
    selected: function (val, oldVal) {
      this.$router.replace(`/${val}`).catch(data => {})
      window.sessionStorage.setItem('activeTab', val)
    }
  }
}
</script>
<style lang='less' scoped>
.footer-container {
  .active {
    color: rgb(52, 14, 158);
  }
}
</style>
