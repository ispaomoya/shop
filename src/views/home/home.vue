<template>
    <div id="home">
        <navbar class="homenav">
            <div slot="center">购物街</div>
        </navbar>
        <backtop @click.native="backtopclick" v-show="isshowbacktop"/>
        <scroll class="content" ref="scroll"  :probetype="3"  @scroll="contentscroll" :pullupload="true" @aaa="loadmore">
            <homeswiper :banner="banner" class="banner"></homeswiper>
        <recommendview :recommend="recommend"></recommendview>
        <featureview></featureview>
        <tabcontrol :titles="['流行','新款','精选']" class="tabcontrol" @tabclick="tabclick"/>
        <goodslist :goods="showgoods"></goodslist>
        </scroll>
    </div>
</template>

<script>
import homeswiper from './childComps/homeswiper'
import recommendview from './childComps/recommendview'
import featureview from './childComps/featureview'

import navbar from '../../components/common/navtab/navtab'
import scroll from '../../components/common/scroll/scroll'
import tabcontrol from '../../components/content/tabcontrol/tabcontrol'
import goodslist from '../../components/content/goods/goodslist'
import backtop from '../../components/content/backtop/backtop'

import {gethomemultidata, gethomegoods} from '../../network/home'

export default {
    components: {
        homeswiper,
        recommendview,
        featureview,
        navbar,
        scroll,
        tabcontrol,
        goodslist,
        backtop
    },
    computed:{
        showgoods() {
            return this.goods[this.currenttype].list
        }
    },
    data() {
        return {
            banner: [],
            recommend: [],
            goods: {
                'pop': {page: 0, list: []},
                'new': {page: 0, list: []},
                'sell': {page: 0, list: []}
            },
            currenttype: 'pop',
            isshowbacktop: false
        }
    },
    created() {
        //1. 请求多个数据
        // gethomemultidata().then(res => {
        //     console.log('首页数据',res)
        //     console.log(res.data.banner)
        //     this.banner = res.data.banner.list
        //     this.recommend = res.data.recommend.list
        // })
        this.gethomemultidata()
        //2. 请求商品数据
        // gethomegoods('pop',1).then(res => {
        //     console.log('商品数据',res)
        // })
        this.gethomegoods('pop')
        this.gethomegoods('new')
        this.gethomegoods('sell')
        
    },
    methods: {
        //1.事件监听方法
        tabclick(index) {

            switch(index) {
                case 0:
                    this.currenttype = 'pop'
                    break
                case 1:
                    this.currenttype = 'new'
                    break
                case 2:
                    this.currenttype = 'sell'
                    break
            }
        },
        //2.网络请求方法
        gethomemultidata(){
            gethomemultidata().then(res => {
            console.log('首页数据',res)
            this.banner = res.data.banner.list
            this.recommend = res.data.recommend.list
            })
        },
        gethomegoods(type) {
            const page = this.goods[type].page + 1
            gethomegoods(type, page).then(res => {
                // console.log('商品数据',res)
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1
                //finishPullUp这个方法在scroll文件先封装
                this.$refs.scroll.finishPullUp()
            })
        },
        backtopclick() {
            //用滚轮使用不了这个，要用鼠标拖,取到当前页面的ref属性，的scroll，然后拿到子组件的scroll数据，执行scrollTo（）
            // this.$refs.scroll.scroll.scrollTo(0, 0, 500);
            //调用子组件里面的方法
            this.$refs.scroll.scrollTo(0,0)
        },
        contentscroll(position) {
            // console.log(position)
            this.isshowbacktop = (- position.y) > 500
        },
        loadmore() {
           this.gethomegoods(this.currenttype)
            //scroll先加载30个图片的高度，然后异步加载的数据滚动会卡顿，因为开始只加载30图片高度，加下面这个
           this.$refs.scroll.scroll.refresh()
        }
        
    }
}
</script>

<style scoped>
#home{
    padding-top:44px;
    height:100vh;
}
.homenav{
    background-color: var(--color-tint);
    color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
}
.tabcontrol{
    position: sticky;
    top: 44px;
    background-color: #ffffff;
}
.content{
    height: 100%;
}
</style>