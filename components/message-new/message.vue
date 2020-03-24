<template>
<transition>
    <div v-show="visible">
        {{message}}--{{msg}}
    </div>
</transition>
</template>

<script>
export default {
    props: ['msg'],
    mounted() {
        console.log(this)
        if(this.duration >= 0) {
            this.timmer = setTimeout(() => {
                this.visible = false;
                //设置一个时间，让离开的动画时间走完
                setTimeout(() => {
                    this.$destroy();//销毁当前实例
                    this.$el.parentNode.removeChild(this.$el);//销毁DOM元素
                }, 1000)
            }, this.duration);
          
        }else {
            console.warn("请输入正确的duration");
        }
    },
    data() {
        return {
            message: '',
            type: '',
            visible: false,
            duration: 3000
        }
    }
}
</script>
<style scoped>
.v-enter {
    opacity: 0;
}
.v-enter-active {
    transition: 1s linear;
}
.v-enter-to {
    opacity: 1;
}
.v-leave {
    opacity: 1;
}
.v-leave-active {
    transition: 1s linear;
}
.v-leave-to {
    opacity: 0;
}
</style>