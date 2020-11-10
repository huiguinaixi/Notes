/**
 * ????????
 * url ?????
 * limitTime ?????**/
let padding = []
const storagePadding = function (url, limitTime) {
    const curTime = +new Date()
    for (let index = 0; index < padding.length; index++) {
        if (padding[index].url === url) {
            let flag = false
            if (curTime - padding[index].datatime < limitTime) {
                flag = true
            }
            padding[index].datatime = curTime
            return flag
        }
    }
    padding.push({
        url,
        datatime: +new Date()
    })
    return false
}