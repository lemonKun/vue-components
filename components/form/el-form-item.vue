<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        {{errMsg}}
    </div>
</template>

<script> 
import schema from 'async-validator';

export default {
    name: 'el-form-item',
    inject: ['elForm'],
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String
        }
    },
    mounted() {
        this.$on('validate', function() {
            this.validate();
        })
    },
    data() {
        return {
            errMsg: ''
        };
    },
    methods: {
        validate() {
            if(this.prop) {
                // console.log(this.elForm.rules[this.prop])
                // console.log(this.elForm.model[this.prop])
                let descriptor = {[this.prop]: this.elForm.rules[this.prop]};
                let validator = new schema(descriptor);//通过描述信息创建一个骨架
                return validator.validate({[this.prop]: this.elForm.model[this.prop]}, (errors) => {
                    if(errors) {
                        //校验未通过
                        this.errMsg = errors[0].message;
                    }else {
                        //校验通过
                        this.errMsg = '';
                    }
                });
            }
        }
    }
}
</script>