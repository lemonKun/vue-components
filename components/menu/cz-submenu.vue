<template>
    <li>
        <span @click="isShow = !isShow">
            <slot name="title"></slot>
        </span>
        <ul v-if="isShow">
            <slot name="default"></slot>
        </ul>
    </li>
</template>
<script>
export default {
    data() {
        return {
            isShow: false
        };
    }
}
</script>