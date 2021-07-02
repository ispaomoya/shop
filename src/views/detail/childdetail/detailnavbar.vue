<template>
    <div class="detailnavbar">
        <navbar>
            <div slot="left" class="back" @click="backclick">
                <img src="../../../assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titles" :key="index" class="titleitem"
                 @click="titleitem(index)" :class="{active: currentindex == index}">{{item}}</div>
            </div>
        </navbar>
    </div>
</template>

<script>
import navbar from '../../../components/common/navtab/navtab'
export default {
    components: {
        navbar
    },
    data() {
        return {
            titles: ['商品','推荐','评论','推荐'],
            currentindex: 0
        }
    },
    methods: {
        titleitem(index) {
            this.currentindex = index
        },
        backclick() {
            this.$router.back()
        }
    }
}
</script>

<style>
.title{
    display: flex;
}
.titleitem{
    flex: 1;
    font-size: 14px;
}
.active{
    color: var(--color-tint);
}
.back img{
    margin-top:10px;
}
</style>