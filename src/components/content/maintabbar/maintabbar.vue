<template>
<div id="tabbar">
  <tabbar>
    <tabbaritem path="/home">
      <img slot="tabbaritemicon" src="~@/assets/img/tabbar/home.svg" alt="">
      <img slot="tabbaritemiconact" src="~@/assets/img/tabbar/homeAct.svg" alt="">
      <div slot="tabbaritemtext">首页</div>
    </tabbaritem>
    <tabbaritem path="/classify">
      <img slot="tabbaritemicon" src="../../../assets/img/tabbar/classify.svg" alt="">
      <img slot="tabbaritemiconact" src="../../../assets/img/tabbar/classifyAct.svg" alt="">
      <div slot="tabbaritemtext">分类</div>
    </tabbaritem>
    <tabbaritem path="/shopcart">
      <img slot="tabbaritemicon" src="../../../assets/img/tabbar/shopcart.svg" alt="">
      <img slot="tabbaritemiconact" src="../../../assets/img/tabbar/shopcartAct.svg" alt="">
      <div slot="tabbaritemtext">购物车</div>
    </tabbaritem>
    <tabbaritem path="/profile">
      <img slot="tabbaritemicon" src="../../../assets/img/tabbar/profile.svg" alt="">
      <img slot="tabbaritemiconact" src="../../../assets/img/tabbar/profileAct.svg" alt="">
      <div slot="tabbaritemtext">我的</div>
    </tabbaritem>
  </tabbar>
</div>
</template>

<script>
import TabBar from '../../common/tabbar/tabbar'
import tabbaritem from '../../common/tabbar/tabbarItem'
export default {
    components:{
        tabbar: TabBar,
        tabbaritem
    }
}
</script>

<style>
#tabbar{
  z-index: 10;
} 
</style>