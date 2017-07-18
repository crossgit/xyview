import xyAddress from './address'
import xyBtnStyle from './button'
import xyDivider from './divider'
import xyPreview from './preview'
import xyHeader from './headerBar'
import xyPrompt from './promptList'
import xyButtonTab from './buttonTab/buttonTab'
import xyButtonTabItem from './buttonTab/buttonTabItem'
import xyLoading from './loading'
import xySwiper from './swiper/swiper'
import xySwiperItem from './swiper/swiperItem'
import xyTab from './tab/tab'
import xyTabItem from './tab/tabItem'
import xyTimeline from './timeline/timeline'
import xyTimelineItem from './timeline/timelineItem'

const install = function (Vue) {
    if (install.installed) return;

    Vue.component(xyAddress.name, xyAddress); 
    Vue.component(xyBtnStyle.name, xyBtnStyle);
    Vue.component(xyDivider.name, xyDivider);
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
    Vue.component(xyTimeline.name, xyTimeline);
    Vue.component(xyTimelineItem.name, xyTimelineItem);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export {
    install,

    xyAddress,
    xyBtnStyle,
    xyDivider,
    xyPreview,
    xyHeader,
    xyPrompt,
    xyButtonTab,
    xyButtonTabItem,
    xyLoading,
    xySwiper,
    xySwiperItem,
    xyTab,
    xyTabItem,
    xyTimeline,
    xyTimelineItem
};