import xyBtnStyle from './xyview/button/index'
import xyPreview from './xyview/preview'
const install = function (Vue) {
    if (install.installed) return;
    Vue.component(xyBtnStyle.name, xyBtnStyle);
    Vue.component(xyPreview.name, xyPreview);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export {
    install,
    xyBtnStyle,
    xyPreview
};