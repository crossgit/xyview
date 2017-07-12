import xyBtnStyle from './button'
import xyPreview from './preview'
import xyHeader from './headerBar'
import xyPrompt from './promptList'
import xyButtonTab from './buttonTab/buttonTab'
import xyButtonTabItem from './buttonTab/buttonTabItem'
import xyTab from './tab/tab'
import xyTabItem from './tab/tabItem'

const install = function (Vue) {
    if (install.installed) return;

    Vue.component(xyBtnStyle.name, xyBtnStyle);
    Vue.component(xyPreview.name, xyPreview);
    Vue.component(xyHeader.name, xyHeader);
    Vue.component(xyPrompt.name, xyPrompt);
    Vue.component(xyButtonTab.name, xyButtonTab);
    Vue.component(xyButtonTabItem.name, xyButtonTabItem);
    Vue.component(xyTab.name, xyTab);
    Vue.component(xyTabItem.name, xyTabItem);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export {
    install,

    xyBtnStyle,
    xyPreview,
    xyHeader,
    xyPrompt,
    xyButtonTab,
    xyButtonTabItem,
    xyTab,
    xyTabItem
};