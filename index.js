import xyBtnStyle from './xyview/button/index'
import xyPreview from './xyview/preview'
import xyHeader from './xyview/headerBar'
import xyPrompt from './xyview/promptList'
import xyButtonTab from './xyview/buttonTab/buttonTab'
import xyButtonTabItem from './xyview/buttonTab/buttonTabItem'
import xyTab from './xyview/tab/tab'
import xyTabItem from './xyview/tab/tabItem'

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