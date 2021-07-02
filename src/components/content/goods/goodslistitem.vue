<template>
    <div class="goods-item" @click="itemclick">
        <img :src="goodsitem.show.img" alt="">
        <div class="goods-info">
            <p>{{goodsitem.title}}</p>
            <span class="price">{{goodsitem.price}}</span>
            <span class="collect">{{goodsitem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        goodsitem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
      itemclick() {
        //router文件夹下面的index.js路由配置里面，detail/:id，，，，要带/:id这个参数，不然下面这条带参数过去会让页面空白
        //后面跟什么参数名，就写什么参数名，例，带iid参数，就写/:iid
        this.$router.push('/detail/' + this.goodsitem.iid)
      }
    }
}
</script>

<style scoped>
 .goods-item {
    position: relative;
    padding-bottom: 40px;
    width: 47%;
    
  }
  .goods-item img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 12px;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    padding-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url(../../../assets/img/common/collect.svg) 0 0/14px 14px;
  }
</style>