
import Button from './button'
import Dialog from './dialog'
import Input from './input'

const components = [
    Button,
    Dialog,
    Input
]

const install = function (Vue) {
    components.forEach(component => {
        if (install.installed) return;
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    ...components
}