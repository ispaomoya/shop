<template>
<div class="tabbaritem" @click="tabbarclick">
    <div v-if="!isactive"><slot name='tabbaritemicon'></slot></div>
    <div v-else><slot name='tabbaritemiconact'></slot></div>
    <!-- <div :class="{tabbaritemtext:isactive}"><slot name='tabbaritemtext'></slot></div> -->
    <div :style="isactivestyle"><slot name='tabbaritemtext'></slot></div>
</div>
</template>

<script>
export default {
    props:{
        path: String,
        isactivecolor: {
            type: String,
            default: '#f24f6b'
        }
    },
    data () {
    return {
    //   boolean: true,
    }
  },
  computed:{
      isactive () {
          return this.$route.path.indexOf(this.path) !== -1
      },
      isactivestyle () {
          return this.isactive ? {color: this.isactivecolor} : {}
      }
  },
  methods:{
    tabbarclick(){
        this.$router.replace(this.path).catch(err => {err})
        console.log(this.path,'点击监听的路径')
        
    }
  }
}
</script>

<style>
    .tabbaritem{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  cursor: pointer;
}
.tabbaritem img{
    width: 24px;
    height: 24px;
    margin-top:3px;
    vertical-align: middle;
}
.tabbaritemtext{
    color: #ff8198;
}
</style>