<template>
    <div class="scroll" ref="scroll">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import bscroll from 'better-scroll'
export default {
    data() {
        return {
            scroll: null,
            aaa: '1111'
        }
    },
    props: {
        probetype: {
            type:Number,
            default: 0
        },
        pullupload: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        //1创建bscroll对象
        this.scroll = new bscroll(this.$refs.scroll,{
            click: true,
            //属性probeType的t一定要大写
            probeType: this.probetype,
            pullUpLoad: this.pullupload
        })
        //2监听滚动的位置
        this.scroll.on('scroll' , (position) => {
            //位置
            //console.log(position)
            this.$emit('scroll', position)
        })
        //3监听上拉事件pullingUp,的U一定要大写，一定要这个单词
        this.scroll.on('pullingUp', () => {
            this.$emit('aaa')
        })
    },
    methods: {
        scrollTo(x, y, time = 500) {
            this.scroll.scrollTo(x,y,time)
        },
        finishPullUp() {
            this.scroll.finishPullUp()
        }
    }
}
</script>

<style scoped>

</style>