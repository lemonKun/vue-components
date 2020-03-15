<template>
    <div>
        <div v-for="layer in layers" :key="layer.id">
            {{layer.message}} --- {{layer.id}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            layers: [],
            id: 0
        };
    },
    methods: {
        add(options) {
            let layer = {...options, id: ++this.id}
            this.layers.push(layer);
            layer.timmer = setTimeout(() => {
                this.removeTimeout(layer);
            }, options.duration);
        },
        removeTimeout(layer) {
            clearTimeout(layer.timmer);
            this.layers = this.layers.filter(item => {
                return item.id !== layer.id;
            })
        }
    }
}
</script>