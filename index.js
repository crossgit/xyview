import xyBtnStyle from './src/xyview/button/index'
import xyPreview from './src/xyview/preview'
import xyHeader from './src/xyview/headerBar'
import xyPrompt from './src/xyview/promptList'
import xyButtonTab from './src/xyview/buttonTab/buttonTab'
import xyButtonTabItem from './src/xyview/buttonTab/buttonTabItem'
import xyLoading from './src/xyview/loading'
import xySwiper from './src/xyview/swiper/swiper'
import xySwiperItem from './src/xyview/swiper/swiperItem'
import xyTab from './src/xyview/tab/tab'
import xyTabItem from './src/xyview/tab/tabItem'

const install = function (Vue) {
    if (install.installed) return;

    Vue.component(xyBtnStyle.name, xyBtnStyle);
    Vue.component(xyPreview.name, xyPreview);
    Vue.component(xyHeader.name, xyHeader);
    Vue.component(xyPrompt.name, xyPrompt);
    Vue.component(xyButtonTab.name, xyButtonTab);
    Vue.component(xyButtonTabItem.name, xyButtonTabItem);
    Vue.component(xyLoading.name, xyLoading);
    Vue.component(xySwiper.name, xySwiper);
    Vue.component(xySwiperItem.name, xySwiperItem);
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
    xyLoading,
    xySwiper,
    xySwiperItem,
    xyTab,
    xyTabItem
};