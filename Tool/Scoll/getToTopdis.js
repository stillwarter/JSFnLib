/**
 * 某元素到顶部的距离
 *
 * offsetTop 返回的是一个相对于最近的已定位的父级元素（静态定位、相对定位或绝对定位）的顶部边缘的距离。如果没有已定位的父级元素，则它会返回相对于文档顶部的距离。
 * 需要注意的是，offsetTop 的值是一个整数，以像素为单位表示距离。如果要获取的元素不可见（例如设置了 display: none 或 visibility: hidden），那么 offsetTop 将返回 0。此外，如果想获取相对于窗口顶部的距离，而不是相对于文档顶部的距离，可以使用 getBoundingClientRect().top 方法。
 * ————————————————
 * 版权声明：本文为CSDN博主「码圣ζ」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
 * 原文链接：https://blog.csdn.net/weixin_43534452/article/details/132210671
 *
 * 而使用getBoundingClientRect().top 这个api可以直接获取到顶部的值
 */

function getToTopdis(dom) {
  return dom.getBoundingClientRect().top;
}
