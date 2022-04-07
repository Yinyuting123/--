var uniqueOccurrences = function(arr) {
    let map = new Map()
    for(let num of arr) {
        // let oldCount = map.get(num)
        // let count = map.has(num) ?++oldCount :1
        // map.set(num, count)
        map.set(num, (map.get(num) || 0)+1)
    }
    let set = new Set([...map.values()])
    return set.size === [...map.values()].length
};