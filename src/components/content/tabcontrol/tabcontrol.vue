<template>
    <div class="tabcontrol">
        <div v-for="(item,index) in titles" :key="index" class="tabcontrolitem" :class="{active: index === crrentindex}"
         @click="itemclick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
            crrentindex: 0
        }
    },
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        itemclick(index) {
            this.crrentindex = index,
            this.$emit('tabclick',index)
        }
    }
}
</script>

<style>
.tabcontrol{
    display: flex;
    text-align: center;
    font-size: 14px;
    z-index: 9;
}
.tabcontrolitem{
    flex: 1;
    height:40px;
    line-height: 40px;
    
}
.active{
    color: var(--color-high-text);
}
.active span{
    padding:5px;
    border-bottom: 2px solid var(--color-tint);
}
</style>