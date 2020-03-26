<template>
    <div>
        <Menu :data="menuData"></Menu>
        <button @click="show">点击弹出信息</button>
        <Form></Form>
        <ul class="box">
            <li v-for="(item, index) in imgList" :key="index">
                <img v-lazy="item" alt="图片显示错误">
            </li>
        </ul>
        <hr>
        <menu-jsx :data="menuData"></menu-jsx>
    </div>
</template>

<script>
/*eslint-disable */
import Vue from 'vue';
import Menu from '../components/menu/menu';
import MenuJsx from '../components/menu-jsx/menujsx.js';

// import {Message} from '../components/message/message.js';
// import CzUi from '../components/message/message.js';
import Form from '../components/form/form';
// Vue.use(CzUi);

import {Message} from '../components/message-new/message.js';
// Vue.use(Message);

import axios from 'axios';

export default {
    components: {Menu, Form, MenuJsx},
    async created() {
        let {data} = await axios.get('http://www.personal.com/getList');
        this.imgList = data.data.list;
    },
    data() {
        return {
            imgList:[],
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
            Message.success({
                duration: 3000,
                message: '你好呀，成功啦'
            })
            // Message({type: 'success', duration: 1000, message: '你好'});
            // this.$message.success({
            //     duration: 2000,
            //     message:'你好呀，我是this调用的成功'
            // })
        }
    }
}
</script>
<style>
.box {
    width: 180px;
    height: 400px;
    overflow: scroll;
}
.box li {
    width: 100px;
    height: 100px;
}
.box img{
    width: 100px;
    height: 100px;
}
</style>