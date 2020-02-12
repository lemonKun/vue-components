<template>
    <div>
        <Menu :data="menuData"></Menu>
    </div>
</template>

<script>
import Menu from '../components/menu/menu';
export default {
    components: {Menu},
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
    }
}
</script>