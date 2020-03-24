/*eslint-disable */
import Vue from 'vue';
import MessageComponent from './message.vue';

let MessageConstructor = Vue.extend(MessageComponent);
const Message = (options) => {
    //统一的入口
    let instance = new MessageConstructor({
        //给这个组件传入了data数据
        data: options,
        propsData: {
            msg: 'asdfg'
        }
    });
    instance.$mount();//表示挂载组件，挂载结果会放到instance.$el这个虚拟节点上
    document.body.appendChild(instance.$el);
    instance.visible = true;
}

['warning', 'success', 'error'].forEach(type => {
    Message[type] = function(options) {
        options.type = type;
        return Message(options);
    }
})

export {Message};
export default {
    //在调用Vue.use方法时，会默认调用install方法
    install() {
        Vue.prototype.$message = Message;
    }
}