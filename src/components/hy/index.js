//自定义组件

//弹框
import HyDialog from './dialog/index.js'
//按钮
import HyButton from './button/index.js'
//分页
import HyPagination from './pagination/index.js'
//Tag标签
import HyTag from './targetTag/index.js'
// 折叠面板
import Collapse from './collapse/index.js'
import PopIn from './transition/index'

const components = [ HyDialog, HyButton, HyPagination, HyTag, Collapse, PopIn]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    HyDialog,
    HyButton,
    HyPagination,
    HyTag,
    Collapse,
    PopIn
}