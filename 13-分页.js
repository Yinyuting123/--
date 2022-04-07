
// 本题展示了一个分页组件，界面中存在id=jsContainer的节点A，系统会随机实例化各种Pagination实例，请按照如下要求补充完成Pagination函数。
// 1、最多连续显示5页，居中高亮显示current页（如demo1所示)
// 2、total <= 1 时，隐藏该组件（如demo2所示）
// 3、如果total<=5，则显示全部页数，隐藏“首页”和“末页”元素（如demo3所示）
// 4、当current居中不足5页，向后(前)补足5页，隐藏“首页”(“末页”)元素(如demo4和demo5所示)
// 5、total、current均为正整数，1 <= current <= total
// 6、当前界面中，节点A为系统执行 new Pagination(节点A，20, 10) 后的展示效果
// 7、请不要手动修改html和css
// 8、不要使用第三方插件

function Pagination(container, total, current) {
    this.total = total;
    this.current = current;
    this.continues = 5;
    this.html = html;
    this.val = val;
    this.el = document.createElement('ul'); //TODO: 创建分页组件根节点
    if (!this.el) return;

    this.el.innerHTML = this.html();
    container.appendChild(this.el);
    this.el.className = this.total <= 1 ?'pagination hide': 'pagination'; //TODO: 判断是否需要隐藏当前元素

    function html() {
        if (this.total <= 1) return '';
        
        //TODO: 生成组件的内部html字符串
        let lis = []
        let start = this.current - Math.floor(this.continues/2)
        let end = this.current + Math.floor(this.continues/2)
        start = start > 0 ? start : 1
        end = end <= this.total ? end : this.total
        // 考虑边界情况
        if(start == 1) {
            end = (start + this.continues - 1) > this.total 
            ? this.total : start + this.continues - 1 
        }
        if(end == this.total) {
            start = (end - this.continues +1) < 1 ? 1 : end - this.continues +1
        }
        for (let index = start; index <= end; index++) {
            
            let className = index == this.current ? 'class = "current" ' : ''
            let li = `<li ${className}>${index}</li>`
            li.innerText = start
            lis.push(li)
        }
        if(start > 1) lis.unshift(`<li>首页</li>`)
        if(end < this.total) lis.push(`<li>末页</li>`)
        return lis.join('');
    }

    function val() {
        if (arguments.length === 0) return this.current;
        if (current < 1 || current > this.total || current === this.current) return;
        this.current = current;
        this.el.innerHTML = this.html();
    };
}


let container = document.querySelector('#jsContainer')
let pagination = new Pagination(container, 10, 9)