//存放懒加载功能的模块
/* eslint-disable */
import {throttle, debounce} from 'lodash';
export default (Vue) => {
    //写一个类，判断当前图片是否需要加载
    class ReactiveListener {
        constructor({el, src, elRenderer, options}) {
            this.el = el;
            this.src = src;
            this.elRenderer = elRenderer,
            this.options = options
            this.state = {
                loading: false
            }
        }
        checkInView() {
            //判断是否渲染
            let {top} = this.el.getBoundingClientRect();//高度就是图片的位置
            return top < window.innerHeight * this.options.preLoad;
        }
        load() {
            //加载当前listener
            this.elRenderer(this, 'loading');
            loadImageAsync(this.src, () => {
                this.state.loading = true;
                this.elRenderer(this, 'loaded');
            }, () => {
                this.elRenderer(this, 'error');
            })
        }
    }

    function loadImageAsync(src, resolve, reject) {
        let img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
    }

    return class LazyClass {
        constructor(options) {
            //将用户传入的参数，保存到当前实例上
            this.options = options;
            this.listenerQueue = [];
            this.bindHandler = false;
            this.handleScroll = throttle(() => {
                let catIn = false;
                this.listenerQueue.forEach(listener => {
                    if(listener.state.loading) return;
                    catIn = listener.checkInView(); //判断是否应该渲染
                    catIn && listener.load();//加载对应的listener
                })
            }, 500)
        }
        add(el, bindings, vnode) {
            //需要监控父亲的滚动事件，当滚动的时候，来检测图片是不是出现在可是区域之内
            //获取不到真实的dom，所以要用nextTick方法
            Vue.nextTick(() => {
                function scrollParent(el) {
                    let parent = el.parentNode;
                    while(parent) {
                        if(/scroll/.test(getComputedStyle(parent)['overflow'])) {
                            return parent;
                        }else {
                            parent = parent.parentNode;//不停向上找带有overflow属性
                        }
                    }
                    return parent;
                }
                let parent = scrollParent(el);
                //判断当前图片是否需要加载
                let listener = new ReactiveListener({
                    el,
                    src: bindings.value,
                    elRenderer: this.elRenderer.bind(this),
                    options: this.options 
                });
                this.listenerQueue.push(listener);
                if(!this.bindHandler) {
                    //给父级带scroll的元素绑定一次
                    this.bindHandler = true;
                    parent.addEventListener('scroll', this.handleScroll);
                }
                //默认需要先进行一次判断
                this.handleScroll();
            })
        }
        elRenderer(listener, state) {//渲染当前实例的什么状态
            let {el} = listener;
            let src = '';
            switch (state) {
                case 'loading':
                    src = listener.options.loading || ''
                    break;
                case 'error': 
                    src = listener.options.error || ''
                default:
                    src = listener.src
                    break;
            }
            el.setAttribute('src', src);
        }
    }
}