<template>
    <input type="text" :value="value" @input="handleInput">
</template>

<script>
export default {
    name: 'el-input',
    props: {
        value: [String, Number]
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value);
            let parent = this.$parent;
            while(parent) {
                let name = parent.$options.name;
                if(name === 'el-form-item') {
                    break;
                }else {
                    parent = parent.$parent;//一直查找父亲
                }
            }
            if(parent) {
                parent.$emit('validate'); //父亲在自身注册一个emit事件
            }

        }
    }
}
</script>