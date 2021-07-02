<template>
    <div id="detail">
        <detailnavbar class="d_navbar"></detailnavbar>
        <scroll class="content">
            <detailswiper :topimages="topimages"></detailswiper>
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
            <detail-goods-info :detailInfo="detailInfo"/>
            <DetailParamInfo :paramInfo="paramInfo"/>
            <DetailCommentInfo :commentInfo="commentInfo"/>
        </scroll>
    </div>
</template>

<script>
    
    import detailnavbar from './childdetail/detailnavbar'
    import detailswiper from './childdetail/detailswiper'
    import DetailBaseInfo from './childdetail/DetailBaseInfo'
    import DetailShopInfo from './childdetail/DetailShopInfo'
    import DetailGoodsInfo from './childdetail/DetailGoodsInfo'
    import DetailParamInfo from './childdetail/DetailParamInfo'
    import DetailCommentInfo from './childdetail/DetailCommentInfo'

    import scroll from '../../components/common/scroll/scroll'
    import goodslist from '../../components/content/goods/goodslist'

    import {getdetail, goods, Shop, GoodsParam, getRecommend} from '../../network/detail'
export default {
    name: 'detailsssss',
    data() {
        return {
            iid: null,
            topimages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            commentInfo: {}
        }
    },
    components: {
        detailnavbar,
        detailswiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        scroll,
        goodslist
    },
    created() {
        //1保存传入的iid
        this.iid = this.$route.params.iid
        //2根据iid请求详细数据
        getdetail(this.iid).then(res => {
            const data = res.result
            // console.log('根据id获取的数据',res)
            this.topimages = data.itemInfo.topImages
            //2获取商品信息,new一个对象
            this.goods = new goods(data.itemInfo, data.columns, data.shopInfo.services)
            //3获取店铺信息的对象
            this.shop = new Shop(data.shopInfo)
            //4获取商品详情信息
            this.detailInfo = data.detailInfo
            //5获取参数信息
            this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
            //6取出评论信息
            if(data.rate.cRate !== 0) {
                this.commentInfo = data.rate.list[0]
            }
        })
        getRecommend().then(res => {
            console.log(res)
        })
        
    } 
}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 15;
    background-color: #ffffff;
    height: 100vh;
}
.d_navbar{
    position: relative;
    z-index: 11;
    background-color: #ffffff;
}
.content{
    height: calc(100% - 44px);
}
</style>