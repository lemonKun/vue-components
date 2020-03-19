<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
export default {
    name: 'el-form',
    provide() {
        return {elForm: this}
    },
    props: {
        model: {
            type: Object,
            default: () => ({})
        },
        rules: Object
    },
    methods: {
        async validate(cb) {
            //需要看一下所有的el-form-item是否符合规范
            //调用一下所有的form-item的validate方法
            let children = this.$children;
            let arr = [];
            function findFormItem(children) {
                children.forEach(child => {
                    if(child.$options.name === 'el-form-item') {
                        arr.push(child);
                    }else {
                        findFormItem(child.$children);
                    }
                })
            }
            findFormItem(children);
            try {
                await Promise.all(arr.map(item => item.validate()));
                cb(true);
            } catch {
                cb(false);
            }
        }
    }
}
</script>