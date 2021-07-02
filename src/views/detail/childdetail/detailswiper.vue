<template>
    <Swiper class="aaa" name="">
        <Swiper-item v-for="(item,index) in topimages" :key="index">
            <img :src="item" alt="">
        </Swiper-item>
    </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper'
export default {
    name: 'datailswipersssss',
    props: {
        topimages: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>
.aaa{
    height: 300px;
    overflow: hidden;
}
</style>