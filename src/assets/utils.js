// 从cookie中获取token
function getCookie() {
    var cookie,
        token,
        arr = []
    cookie = document.cookie
    arr = cookie.split(';')
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i].match(/spkemrqcToken/g)) {
            token = arr[i].split('=')[1]
            break
        } else {
            token = ''
        }
    }
    return token
}

function getCookieKey() {
    return 'spkemrqcToken'
}

/**
 * 加密处理
 */
const encryption = params => {
    const CryptoJS = require('crypto-js')
    let { data, type, param, key } = params
    const result = JSON.parse(JSON.stringify(data))
    if (type === 'Base64') {
        param.forEach(ele => {
            result[ele] = btoa(result[ele])
        })
    } else {
        param.forEach(ele => {
            var data = result[ele]
            key = CryptoJS.enc.Latin1.parse(key)
            var iv = key
            // 加密
            var encrypted = CryptoJS.AES.encrypt(data, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.ZeroPadding
            })
            result[ele] = encrypted.toString()
        })
    }
    return result
}

//去掉字符串两边空格
function trim(str) {
    if (str != null && str) {
        return str.replace(/(^\s*)|(\s*$)/g, '')
    } else {
        return null
    }
}

//element-ui tree 从选中id列表中找出半选并剔除
function formatTreeCheckedData(datas, id, treeData) {
    //datas 所有选中的数据idList
    //id 如deptId ,menuId
    //treeData 树
    var rules = JSON.parse(JSON.stringify(datas))
    var needDelArr = []
    rules.map((v, i) => {
        diguiquchu(datas, treeData, v, i, needDelArr, id)
    })
    //剔除半选中的数据
    rules = rules.filter(item => !needDelArr.includes(item))
    return rules
}
//递归找出半选中的数据
function diguiquchu(datas, arr, v, i, needdelarr, id) {
    //element-ui tree
    arr.map((item) => {
        if (item[id] == v && item.children.length > 0) {
            // datas.splice(i, 1);//因为每次截取会改变原数组，所以不能这样
            needdelarr.push(v)
            diguiquchu(datas, item.children, v, i, needdelarr, id)
        } else if (item[id] != v && item.children.length > 0) {
            diguiquchu(datas, item.children, v, i, needdelarr, id)
        }
    })
}

//获取file的路径
function getObjectURL(file) {
    var url = null
    if (window.createObjcectURL != undefined) {
        url = window.createOjcectURL(file)
    } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file)
    } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file)
    }
    return url
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt) {
    //author: meizz
    var o = {
        'M+': this.getMonth() + 1, //月份
        'd+': this.getDate(), //日
        'h+': this.getHours(), //小时
        'm+': this.getMinutes(), //分
        's+': this.getSeconds(), //秒
        'q+': Math.floor((this.getMonth() + 3) / 3), //季度
        S: this.getMilliseconds() //毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o)
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    return fmt
}

//兼容ie日期格式化
function dateFormatForIe(dateString, format) {
    if (!dateString) {
        return ''
    }
    var time = ''

    let forTime = ''
    if (dateString.indexOf('T') != -1) {
        forTime = myTime(dateString + '')
    } else {
        forTime = dateString
    }

    time = new Date(
        forTime
            .replace(/-/g, '/')
            .replace(/T|Z/g, ' ')
            .trim()
            .split('.')[0]
    )

    var o = {
        'M+': time.getMonth() + 1, //月份
        'd+': time.getDate(), //日
        'h+': time.getHours(), //小时
        'm+': time.getMinutes(), //分
        's+': time.getSeconds(), //秒
        'q+': Math.floor((time.getMonth() + 3) / 3), //季度
        S: time.getMilliseconds() //毫秒
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o)
        if (new RegExp('(' + k + ')').test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))

    return format
}

function myTime(date) {
    var arr = date.split('T')
    var d = arr[0]
    var darr = d.split('-')

    var t = arr[1]
    var tarr = t.split('.')
    var marr = tarr[0].split(':')

    var dd = parseInt(darr[0]) + '/' + parseInt(darr[1]) + '/' + parseInt(darr[2]) + ' ' + parseInt(marr[0]) + ':' + parseInt(marr[1]) + ':' + parseInt(marr[2])
    return dd
}

function isIE() {
    //判断是否为ie
    if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        return true
    } else {
        return false
    }
}

//日期格式化
function formatDate(date, format) {
    var isie = isIE()
    var time = ''
    format = format ? format : 'yyyy-MM-dd'
    if (isie) {
        if (date) {
            time = dateFormatForIe(date, format)
        } else {
            time = ''
        }
    } else {
        if (date) {
            date = date
                .replace(/-/g, '/')
                .replace(/T|Z/g, ' ')
                .trim()
            date = date.split('.')[0]
            time = new Date(date).Format(format)
        } else {
            time = ''
        }
    }

    return time
}

//依据类型格式化日期
function getDateFormatByType(date, type) {
    var result = ''
    if (date) {
        var isie = isIE()
        if (isie) {
            if (type == 'year') {
                result = dateFormatForIe(date, 'yyyy')
            } else if (type == 'month') {
                result = dateFormatForIe(date, 'MM')
            } else if (type == 'day') {
                result = dateFormatForIe(date, 'dd')
            } else if (type == 'hour') {
                result = dateFormatForIe(date, 'hh')
            } else if (type == 'minute') {
                result = dateFormatForIe(date, 'mm')
            } else {
                result = ''
            }
        } else {
            date = date
                .replace(/-/g, '/')
                .replace(/T|Z/g, ' ')
                .trim()
                .split('.')[0]
            var newDate = new Date(date)
            if (type == 'year') {
                result = newDate.Format('yyyy')
            } else if (type == 'month') {
                result = newDate.Format('MM')
            } else if (type == 'day') {
                result = newDate.Format('dd')
            } else if (type == 'hour') {
                result = newDate.Format('hh')
            } else if (type == 'minute') {
                result = newDate.Format('mm')
            } else {
                result = ''
            }
        }
    }
    return result
}

//获取日期某位数
function getDateNumByType(date, type, we) {
    //we 0个位 1十位
    var result = ''
    if (date) {
        var isie = isIE()
        if (isie) {
            let nums = ''
            if (type == 'year') {
                nums = dateFormatForIe(date, 'yyyy')
                result = nums.split('')[3 - we]
            } else if (type == 'month') {
                nums = dateFormatForIe(date, 'MM')
                result = nums.split('')[1 - we]
            } else if (type == 'day') {
                nums = dateFormatForIe(date, 'dd')
                result = nums.split('')[1 - we]
            } else {
                result = ''
            }
        } else {
            var newDate = new Date(
                date
                    .replace(/-/g, '/')
                    .replace(/T|Z/g, ' ')
                    .trim()
                    .split('.')[0]
            )
            let nums = ''
            if (type == 'year') {
                nums = newDate.Format('yyyy')
                result = nums.split('')[3 - we]
            } else if (type == 'month') {
                nums = newDate.Format('MM')
                result = nums.split('')[1 - we]
            } else if (type == 'day') {
                nums = newDate.Format('dd')
                result = nums.split('')[1 - we]
            } else {
                result = ''
            }
        }
    }

    return result
}

//
function getIdByNameFromTree(name, list) {
    var resultArr = []
    forList(resultArr, name, list)
    var resultId = ''
    if (resultArr.length > 0) {
        resultId = resultArr[0].id
    }
    return resultId
}

function forList(arr, name, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].component.indexOf(name) != -1) {
            arr.push(list[i])
        } else {
            if (list[i].children.length > 0) {
                forList(arr, name, list[i].children)
            }
        }
    }
}

//将tree转化为list
function treeToList(list, childName) {
    var result = []
    setList(result, childName, list)
    return result
}

function setList(arr, name, list) {
    for (var i = 0; i < list.length; i++) {
        arr.push(list[i])
        if (list[i][name].length > 0) {
            setList(arr, name, list[i][name])
        }
    }
}

//获取现在到上月时间周期
function getLastMonthTime(val = 1, format = 'yyyy-MM') {
    var result = []
    result[0] = formatDate(getPreMonthDay(new Date(), val), format)
    result[1] = formatDate(getNowMonth(), format)
    return result
}

//当前时间
function getNowMonth() {
    var myDate = new Date() //获取系统当前时间
    var year = myDate.getFullYear() //获取完整的年份(4位,1970-????)
    var month = myDate.getMonth() //获取当前月份(0-11,0代表1月)
    // var day = myDate.getDate()

    var new_year = JSON.parse(JSON.stringify(year)) //取当前的年份
    var new_month = JSON.parse(JSON.stringify(month)) + 1 //取下一个月的第一天，方便计算（最后一天不固定）
    if (new_month > 12) {
        new_month -= 12 //月份减
        new_year++ //年份增
    }
    var new_date = new Date(new_year, new_month, 1)
    let days = new Date(new_date.getTime() - 1000 * 60 * 60 * 24).getDate() //本月最后一天日

    let newMonth = month < 9 ? '0' + (month + 1) : month + 1
    let newDay = days < 10 ? '0' + days : days
    let time = year + '-' + newMonth + '-' + newDay
    return time
}

//获取前monthNum月的日期
function getPreMonthDay(date, monthNum) {
    let myDate = new Date(
        date
            .replace(/-/g, '/')
            .replace(/T|Z/g, ' ')
            .trim()
            .split('.')[0]
    )
    let year = myDate.getFullYear() //获取完整的年份(4位,1970-????)
    let month = myDate.getMonth() < 9 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1
    let day = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()
    // let nowdays = new Date(year, month, 0)
    // days = nowdays.getDate() //获取当前日期中月的天数
    let year2 = year
    let month2 = parseInt(month) - monthNum
    if (month2 <= 0) {
        year2 = parseInt(year2) - parseInt(month2 / 12 == 0 ? 1 : Math.abs(parseInt(month2 / 12)) + 1)
        month2 = 12 - (Math.abs(month2) % 12)
    }
    let day2 = day
    let days2 = new Date(year2, month2, 0)
    days2 = days2.getDate()
    if (day2 > days2) {
        day2 = days2
    }
    if (month2 < 10) {
        month2 = '0' + month2
    }
    let t2 = year2 + '-' + month2 + '-' + '01'
    return t2
}

//手机号校验
function checkPhone(phone) {
    if (!/^1(3|4|5|7|8)\d{9}$/.test(phone)) {
        return false
    } else {
        return true
    }
}

function fromDataSet(num = 20) {
    //获取昨天
    //num距年份
    let date = new Date().getTime() - 24 * 60 * 60 * 1000
    var myDate = new Date(date) //前一天
    var year = myDate.getFullYear() //获取完整的年份(4位,1970-????)
    var month = myDate.getMonth() < 9 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1 //获取当前月份(0-11,0代表1月)
    var day = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()

    let time1 = year - num + '-' + month + '-' + day
    let time = year + '-' + month + '-' + day

    var param = {
        startDate: time1,
        endDate: time
    }
    return param
}

//判断对象是否每项都为空
function judgeParamIsAllNull(param, keys) {
    var pass = true
    for (var key in param) {
        if (keys && keys.length > 0) {
            for (var i = 0; i < keys.length; i++) {
                if (key == keys[i]) {
                    if (param[key]) {
                        pass = false
                        break
                    }
                }
            }
        } else {
            if (param[key]) {
                pass = false
                break
            }
        }
    }
    return pass
}

function compare(arr1, arr2) {
    //临时数组，用于对比删除项
    let tempArr = [...arr2]
    if (arr1 instanceof Array && arr2 instanceof Array) {
        return (
            arr1.length == arr2.length &&
            arr1.every(item_1 => {
                //临时数组需要删除的索引
                let delIndex = 0
                //是否对比成功
                let result = false
                if (isNaN(item_1)) {
                    result = tempArr.some((item_2, index) => {
                        if (isNaN(item_2)) {
                            delIndex = index
                            return true
                        }
                        return false
                    })
                } else {
                    delIndex = tempArr.indexOf(item_1)
                    result = delIndex != -1
                }
                tempArr.splice(delIndex, 1)
                return result
            })
        )
    } else {
        return false
    }
}

// function strToBinary(str) {
//     var result = []
//     var list = str.split('')
//     for (var i = 0; i < list.length; i++) {
//         if (i != 0) {
//             result.push(' ')
//         }
//         var item = list[i]
//         var binaryStr = item.charCodeAt().toString(2)
//         result.push(binartStr)
//     }
//     return result.join('')
// }

function binaryToImage(longstr = '') {
    if (longstr) {
        let str = /^data:image/
        if (str.test(longstr)) {
            return longstr
        } else {
            var base64Url = 'data:image/*;base64,' + longstr
            return base64Url
        }
    } else {
        return ''
    }
}

//通过生日获取年龄
function getAgeBybirth(birth) {
    if (birth) {
        var isie = isIE()
        var age = ''
        var birthday = ''
        var d = new Date()
        if (isie) {
            var forTime = ''
            if (birth.indexOf('T') != -1) {
                forTime = myTime(birth + '')
            } else {
                forTime = birth
            }
            birthday = new Date(forTime)
        } else {
            birthday = new Date(birth)
        }
        age =
            d.getFullYear() -
            birthday.getFullYear() -
            (d.getMonth() < birthday.getMonth() || (d.getMonth() == birthday.getMonth() && d.getDate() < birthday.getDate()) ? 1 : 0)
        return age
    } else {
        return ''
    }
}

//判断是否选中
function isChecked(code, listStr) {
    if (listStr) {
        var list = listStr.split(',').filter(row => {
            return row == code
        })
        if (list.length > 0) {
            return true
        }
    }
    return false
}
//设置nodeFarther
function setNodeFarther(nodeFarther, list) {
    for (let i = 0; i < list.length; i++) {
        list[i].orgId = nodeFarther
        if (list[i].folderType == 2) {
            list[i].leaf = true
        }
        if (list[i].children) {
            setNodeFarther(nodeFarther, list[i].children)
        }
    }
}

/**
 * @Author   jiangqiang
 * @DateTime 2019-10-20
 * 通过日期差计算年龄
 * @param    {[type]}   strBirthday [description]
 * @param    {[type]}   policyDay   [description]
 * @return   {[type]}               [description]
 */
function jsGetAge(strBirthday, policyDay = new Date()) {
    var returnAge
    if (strBirthday) {
        strBirthday = formatDate(strBirthday)
        var strBirthdayArr = strBirthday.split('-')
        var birthYear = strBirthdayArr[0]
        var birthMonth = strBirthdayArr[1]
        var birthDay = strBirthdayArr[2]
        policyDay = formatDate(policyDay)
        var dayArr = policyDay.split('-')
        var nowYear = dayArr[0]
        var nowMonth = dayArr[1]
        var nowDay = dayArr[2]

        /*d = new Date();
        var nowYear = d.getFullYear();
        var nowMonth = d.getMonth() + 1;
        var nowDay = d.getDate();*/

        if (nowYear == birthYear) {
            returnAge = 0 //同年 则为0岁
        } else {
            var ageDiff = nowYear - birthYear //年之差
            if (ageDiff > 0) {
                if (nowMonth == birthMonth) {
                    var dayDiff = nowDay - birthDay //日之差
                    if (dayDiff < 0) {
                        returnAge = ageDiff - 1
                    } else {
                        returnAge = ageDiff
                    }
                } else {
                    var monthDiff = nowMonth - birthMonth //月之差
                    if (monthDiff < 0) {
                        returnAge = ageDiff - 1
                    } else {
                        returnAge = ageDiff
                    }
                }
            } else {
                returnAge = -1 //返回-1 表示出生日期输入错误 晚于今天
            }
        }
        return returnAge //返回周岁年龄
    } else {
        return ''
    }
}

export {
    getCookie,
    getCookieKey,
    encryption,
    trim,
    formatTreeCheckedData,
    getObjectURL,
    formatDate,
    getDateFormatByType,
    getIdByNameFromTree,
    getLastMonthTime,
    checkPhone,
    treeToList,
    fromDataSet,
    judgeParamIsAllNull,
    compare,
    binaryToImage,
    getAgeBybirth,
    getDateNumByType,
    isChecked,
    jsGetAge,
    setNodeFarther
}
