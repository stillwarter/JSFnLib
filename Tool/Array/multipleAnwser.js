/**
 * @param {Array} list 
 * @param {All ?} item 
 * 
 * 传入一个数组，当为数组增加值得时候，会预先判断，是否存在相同得旧值，若有则去除这个旧值，没有则增加。
 */
export function multipleAnwser(list,item){
    if (list.includes(item)) {
        list = list.filter(item => item != i)
        return list
    } else {
       return  list.push(item)
    }
} 