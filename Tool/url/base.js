/**
 * url简单解析
 * 获取url的query参数后
 * 通过传入的querynamelist去遍历比对，若有相同参数属性则进行操作
 */

export function ayanslUrl_V(querynamelist) {
    // const query=this.$route.query
    const query = []
    const data = {}
    for (let item of querynamelist) {
        if (query[item]) {
            //   todo
        }
    }
}