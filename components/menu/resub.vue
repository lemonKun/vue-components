<template>
    <cz-submenu>
        <template slot="title">{{data.name}}</template>
        <template v-for="menu in data.children">
            <resub v-if="menu.children" :data="menu" :key="menu.id"></resub>
            <cz-menu-item v-else :key="menu.id">{{menu.name}}</cz-menu-item>
        </template>
    </cz-submenu>
</template>
<script>
export default {
    name: 'resub',
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>