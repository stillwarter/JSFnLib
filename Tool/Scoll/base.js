/**
 * 滚到顶部 scrollTo
 */
export function toTop(){
    const body = document.documentElement
    const options = {
        top: 0,
        left: 0,
        behavior: 'smooth'
    };
    body.scrollTo(options)
}