<template>
    <cz-menu>
        <template v-for="menu in data">
            <Resub v-if="menu.children" :key="menu.id" :data="menu"></Resub>
            <cz-menu-item v-else :key="menu.id">{{menu.name}}</cz-menu-item>
        </template>
    </cz-menu>
</template>
<script>
import Resub from './resub';
export default {
    components: {Resub},
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {

        };
    }
}
</script>