var app = new Vue({
    el:'#app',
    data:{
        show:true,
        message:'Helloworld',
        date:'页面创建于 '+new Date().toLocaleString(),
        todolist:[
            '吃饭',
            '睡觉',
            '打豆豆'
        ]
    },
    computed:{
        tl:function(){
            return {
                length:this.todolist.length
            }
        }
    }
})

/**
 * 
Vue包装了数个数组操作函数，使用这些方法操作的数组去，其数据变动时会被vue监测： 
push()
pop()
shift()
unshift()
splice()
sort()
reverse()

vue2.0还增加个方法可以观测Vue.set(items, indexOfItem, newValue)
                               app.todolist  0     '123123'
filter(), concat(), slice() 。这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组
Vue 不能检测以下变动的数组： 
① 当你利用索引直接设置一个项时，vm.items[indexOfItem] = newValue
② 当你修改数组的长度时，例如： vm.items.length = newLength
 */