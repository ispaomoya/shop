<template>
    <div class="goodslist">
        <goodslistitem class="goodslist" v-for="(item,index) in goods" :key="index" :goodsitem="item">
        </goodslistitem>
    </div>
</template>

<script>
import goodslistitem from './goodslistitem'
export default {
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        goodslistitem
    }
}
</script>

<style scoped>
.goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    padding-bottom: 50px;
}
</style>