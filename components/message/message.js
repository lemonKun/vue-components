import MessageComponent from './message.vue';
import Vue from 'vue';

//单例模式
let instance;
let getVueInstance = () => {
    //将new vue的操作，只执行一次
    instance = new Vue({
        render: h => h(MessageComponent)
    }).$mount();
    document.body.appendChild(instance.$el);
}
const Message = {
    success(options) {
        // 点击弹出层，需要将.vue文件挂在到内存中的一个虚拟节点上
        !instance && getVueInstance();
        // 将渲染好的内容放置到页面上，利用vue数据驱动，来实现
        instance.$children[0].add(options);
    }
}
export {
    Message
}
export default {
    //在调用Vue.use方法时，会默认调用install方法
    install(_Vue) {
        let $message = {};
        Object.keys(Message).forEach(key =>{
            $message[key] = Message[key];
        })
        Vue.prototype.$message = $message;
    }
}