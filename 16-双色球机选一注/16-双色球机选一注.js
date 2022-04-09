// randomFn();
// 双色球由33个红球和16个蓝球组成，1注双色球包括6个不重复的红球和1个蓝球。
// 请阅读给出的页面和代码，完成 randomFn 函数，实现“随机一注”功能，要求如下：
// 函数返回：
//   1.以字符串形式输出“随机一注”结果，选中的红蓝球用"|"隔开，红球在前，号码间用半角逗号隔开，如"06,10,13,18,23,27|05"
//   2.红球和蓝球号码排列顺序 需与页面展示的顺序对应
// 页面交互：
//   1.将选中的红球和蓝球（页面中对应DOM元素）用class="active"高亮
//   2.将选中的球按号码从小到大排列，移至所属组的前方，结果如示意图所示
//   3.每次执行 randomFn 函数，输出符合要求且不完全重复

// 注意：
// 1、请使用原生JavaScript操作DOM元素，不要增加、删除DOM元素或修改css
// 2、请使用ES5语法
// 3、答题时不要使用第三方插件
// 4、运行浏览器为chrome浏览器

function randomFn() {
    let red = getRandom(6, 1, 33)
    let blue = getRandom(1, 1, 16)

    let redBalls = document.querySelector('.red').querySelector('.balls-wp').children
    let blueBalls = document.querySelector('.blue').querySelector('.balls-wp').children

    renderBalls(redBalls, red, 6)
    renderBalls(blueBalls, blue, 1)

    return red.join() + '|' + blue.join()
}

function renderBalls(balls, activeNums, size) {
    let otherNums = []
    for (let i = 0; i < balls.length; i++) {
        balls[i].classList.remove('active')
        !activeNums.includes(balls[i].innerText)&& otherNums.push(balls[i].innerText)
    }
    otherNums.sort()
    for (let i = 0; i < balls.length; i++) {
        if(i < size) {
            balls[i].innerText = activeNums[i] 
            balls[i].classList.add('active')
        } else {
            balls[i].innerText = otherNums[i - size] 
        }
    }
}

function getRandom(count, min, max) {
    let randomArr = []
    while (randomArr.length < count) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min
        num = num < 10 ? '0' + num : num + ''
        !randomArr.includes(num) && randomArr.push(num)
    }
    randomArr.sort((a, b) => a - b)
    return randomArr
}






function fn() {
    var flag = false;
    try {
        var testArrSort = function (arr) {
            var flag = false;
            try {
                flag = arr.join(',') === arr.sort(function (a, b) {
                    return a - b
                }).join(',');
            } catch (e) { }
            console.log(flag, 'testArrSort');
            return flag;
        };
        var testArrRange = function (arr, min, max) {
            var flag = false;
            try {
                var error = false;
                for (var i = 0; i < arr.length; i++) {
                    var item = arr[i];
                    error = error || !(item >= min && item <= max && (item >= 10 || /^0[1-9]$/.test(item)));
                }
                flag = !error;
            } catch (e) { }
            return flag;
        };
        var getPageResult = function () {
            var result = {};
            var red = [];
            var blue = [];
            [].slice.call(document.querySelectorAll('.red b'), 0, 6).forEach(function (el) {
                var t = el.innerText; el.classList.contains('active') && t >= 1 && t <= 33 && red.indexOf(t) < 0 && red.push(t);
            });
            [].slice.call(document.querySelectorAll('.blue b'), 0, 1).forEach(function (el) {
                var t = el.innerText; el.classList.contains('active') && t >= 1 && t <= 16 && blue.indexOf(t) < 0 && blue.push(t);
            });
            result.red = red;
            result.blue = blue;
            result.str = red.slice(0).join(',') + '|' + blue.slice(0).join(',');
            return result;
        };
        var testCaseOne = function () {
            var error = true;
            randomFn();
            var result = getPageResult();
            var red = result.red.slice(0);
            var blue = result.blue.slice(0);
            error = !(red.length === 6 && testArrSort(red) && testArrRange(red, 1, 33) && blue.length === 1 && testArrSort(blue) && testArrRange(blue, 1, 16));
            return error;
        };
        var testCase = function (n) {
            var error = false;
            for (var i = 0; i < n; i++) {
                if (testCaseOne()) {
                    error = true;
                    break;
                }
            }
            return error;
        };
        flag = !testCase(1000);
    } catch (e) { }
    return flag;
}

fn()