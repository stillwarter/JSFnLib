/**
 * 网页-夜间模式
 */
function setNightMode(i){
    const dom = document.documentElement
    i ? dom.style = "filter:invert(1) hue-rotate(180deg)" : dom.style=""
}
