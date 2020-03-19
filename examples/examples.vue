<template>
    <div>
        <Menu :data="menuData"></Menu>
        <button @click="show">点击弹出信息</button>
        <Form></Form>
    </div>
</template>

<script>
import Vue from 'vue';
import Menu from '../components/menu/menu';
// import {Message} from '../components/message/message.js';
import CzUi from '../components/message/message.js';
import Form from '../components/form/form';
Vue.use(CzUi);
export default {
    components: {Menu, Form},
    data() {
        return {
            menuData: [
                {
                    name: '导航一',
                    id: 1,
                    children: [
                        {
                            name: '导航1.1',
                            id: 1.1,
                            children: [
                                {name: '导航1.1.1', id: 1.2},
                                {name: '导航1.1.2', id: 1.3},
                                {name: '导航1.1.3', id: 1.4}
                            ]
                        }
                    ]
                },
                {
                    name: '导航二',
                    id: 2,
                    children: [
                        {name: '导航2.1', id: 2.1}
                    ]
                },
                {
                    name: '导航三',
                    id: 3
                }
            ]
        };
    },
    methods: {
        show() {
            // Message.success({
            //     duration: 3000,
            //     message: '你好呀，成功啦'
            // })
            this.$message.success({
                duration: 2000,
                message:'你好呀，我是this调用的成功'
            })
        }
    }
}
</script>