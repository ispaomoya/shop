<template>
    <div class="recommend">
        <div v-for="(item,index) in recommend" :key="index" class="recommenditem">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        recommend: {
            type:Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
.recommend{
    display: flex;
    font-size: 12px;
    padding: 10px 0 20px 0;
    border-bottom: 10px solid #eee;
    text-align: center;
}
.recommenditem{
    flex: 1;
}
.recommenditem img{
    width:68px;
    height:68px;
}
</style>