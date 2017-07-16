// 设置进度条
function setProgressbar(container, progress, speed) {
    let progressbar = container;
    if (progress) progress = Math.min(Math.max(progress, 0), 100);
    progressbar.offsetHeight;
    let span = progressbar.querySelector('span');
    if (span) {
        var style = span.style;
        style.webkitTransform = 'translate3d(' + (-100 + progress) + '%,0,0)';
        if (typeof speed !== 'undefined') {
            style.webkitTransitionDuration = speed + 'ms';
        } else {
            style.webkitTransitionDuration = '';
        }
    }
    return progressbar;
};

export default function (el) {
    return {
        setProgress: function (progress) {
            return setProgressbar(el, progress);
        }
    }
}