<template>
    <div class="navtab">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>

</script>

<style>
.navtab{
    width: 100%;
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    box-shadow: 0 -1px 5px rgba(100,100,100,.2);     
}
.left,.right{
    width:60px;
}
.center{
    flex: 1;
}
</style>