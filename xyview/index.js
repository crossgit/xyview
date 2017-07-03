import xyBtnStyle from './button/index.vue';

const install = function (Vue) {
    if (install.installed) return;

    Vue.component(xyBtnStyle.name, xyBtnStyle);

};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export {
    install,

    xyBtnStyle
};