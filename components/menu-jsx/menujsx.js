import CzMenu from '../menu/cz-menu';
import CzMenuItem from '../menu/cz-menu-item';
import CzSubmenu from '../menu/cz-submenu';

export default {
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    render() {
        let renderChildren = (data) => {
            return data.map(child => {
                return (child.children ? 
                <CzSubmenu>
                    <template slot="title">{child.name}</template>
                    {renderChildren(child.children)}
                </CzSubmenu> : <CzMenuItem>{child.name}</CzMenuItem>)
            })
        }
        return (
            <CzMenu>
                {renderChildren(this.data)}
            </CzMenu>
        )
    }
}