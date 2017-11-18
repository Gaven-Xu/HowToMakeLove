<!-- TOC -->

- [1. 安装](#1-安装)
- [2. 声明式渲染](#2-声明式渲染)
    - [2.1. 插值](#21-插值)
    - [2.2. 指令 / 绑定](#22-指令--绑定)
    - [2.3. 数据 方法 计算属性 观察者](#23-数据-方法-计算属性-观察者)
    - [2.4. 条件渲染](#24-条件渲染)
    - [2.5. 列表渲染](#25-列表渲染)
        - [2.5.1. 数组更新](#251-数组更新)
        - [2.5.2. **数组不更新问题**](#252-数组不更新问题)
        - [2.5.3. **对象不更新问题**](#253-对象不更新问题)
        - [2.5.4. 对象添加多个新响应式属性](#254-对象添加多个新响应式属性)
    - [2.6. 事件处理](#26-事件处理)
        - [2.6.1. 事件修饰符：](#261-事件修饰符)
        - [2.6.2. 键盘按键修饰符：针对按键的时间修饰符](#262-键盘按键修饰符针对按键的时间修饰符)
        - [2.6.3. 鼠标按键修饰符](#263-鼠标按键修饰符)
- [3. 组件系统](#3-组件系统)
- [4. 客户端路由 vue-router](#4-客户端路由-vue-router)
- [5. 状态管理 vuex](#5-状态管理-vuex)
- [6. ajax数据请求 axios VueAxios](#6-ajax数据请求-axios-vueaxios)
- [7. 构建系统 vue-cli](#7-构建系统-vue-cli)

<!-- /TOC -->
# 1. 安装
# 2. 声明式渲染

## 2.1. 插值
    {{}} js表达式
    v-once
    v-html
## 2.2. 指令 / 绑定
    v-bind :

        v-bind:class="{base:true,error:isError}"

        v-bind:class="classObjectInData"

        v-bind:class="[base,{error:isError}]"

        v-bind:class="classArrayInData"

        v-bind:style="{height:1300px,backgroundColor:#098}"

        v-bind:style="styleObjectInData"

        v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }" 多重值，后面覆盖前面，所以应用最后一个可用的

    v-model
    
    v-on @
    
## 2.3. 数据 方法 计算属性 观察者
    data
    method
    computed 响应式依赖
        set
        get 默认不写的时候，只有getter
    watch

## 2.4. 条件渲染
    v-if    切换开销更高，懒惰。直到条件改变才渲染
    v-elseif
    v-else

    v-show 渲染开销更高，非懒惰，一直渲染，简单的渲染display

## 2.5. 列表渲染

    v-for 实际是for of方法，可以有多个值

    v-for="(item, index) in array"
    v-for="(value, key) in object"
    v-for="(value, key，index) in object"

    v-for渲染列表之后，为保证高效，数据的顺序 DOM顺序 可以不一致，因此要利用key属性

    :key="item.id"
    
    建议尽可能在使用 v-for 时提供 key，除非遍历输出的 DOM 内容非常简单

    v-for中可以使用method中的方法：
    
```html
    <li v-for="n in even(numbers)">{{ n }}</li>
```

    v-for + <template>
    v-for + v-if
        两个在同一个标签的时候，v-for优先级更高，如果想先判断，再循环，if写在for的外层

    v-for + component
        2.2.0+ 的版本里，当在组件中使用 v-for 时，key 现在是必须的。
    
### 2.5.1. 数组更新

这些** ***变异方法*** **会触发数组更新

    push()
    pop()
    shift()
    unshift()
    splice()
    sort()
    reverse()
    
** ***非变异方法*** **，只能用新产生的数组替换原来的数组

filter(), concat() 和 slice()

### 2.5.2. **数组不更新问题**

当你利用索引直接设置一个项时，例如：**vm.items[indexOfItem] = newValue**
当你修改数组的长度时，例如：**vm.items.length = newLength**

为了解决第一类问题，以下两种方式都可以实现和 vm.items[indexOfItem] = newValue 相同的效果，同时也将触发状态更新：

    // Vue.set
    Vue.set(example1.items, indexOfItem, newValue)
    // Array.prototype.splice
    example1.items.splice(indexOfItem, 1, newValue)

为了解决第二类问题，你可以使用 splice：

    example1.items.splice(newLength)

### 2.5.3. **对象不更新问题**

已经创建的实例，Vue 不能动态添加根级别的响应式属性

Vue.set(object, key, value)

### 2.5.4. 对象添加多个新响应式属性

有时你可能需要为已有对象赋予多个新属性，比如使用 Object.assign() 或 _.extend()。在这种情况下，你应该用两个对象的属性创建一个新的对象。所以，如果你想添加新的响应式属性，不要像这样：

```js
    Object.assign(this.userProfile, {
    age: 27,
    favoriteColor: 'Vue Green'
    }) // 增加新key不触发更新
```

你应该这样做：

```js
    this.userProfile = Object.assign({}, this.userProfile, {
    age: 27,
    favoriteColor: 'Vue Green'
    }) // 原对象 this.userProfile 与新的属性合并赋值到空对象{}中，再替换原对象，触发更新
```

注意：

Object.assign(target, ...sources)

第一个参数是目标参数，属性会复制到其中，会被改变，所以需要用{}，目的是不改变原来的其它对象

## 2.6. 事件处理

    $event 在指令中，通过$event将原始event传入事件

### 2.6.1. 事件修饰符：
    
        .stop       阻止继续传播事件
            v-on:click.stop="doThis"
        .prevent    阻止默认事件
        .capture    采用捕获方式
        .self       采用目标方式
        .once       生效一次

### 2.6.2. 键盘按键修饰符：针对按键的时间修饰符
    
        v-on:keyup.13="submit" // keyCode 13 时触发
        v-on:keyup.enter="submit"

        .enter
        .tab
        .delete (捕获“删除”和“退格”键)
        .esc
        .space
        .up
        .down
        .left
        .right
        
    可以通过全局 config.keyCodes 对象自定义按键修饰符别名：
    
        // 可以使用 `v-on:keyup.f1`
        Vue.config.keyCodes.f1 = 112
    
    2.1.0新增
    
        .ctrl
        .alt
        .shift
        .meta  command / windows

        Alt + C
        <input @keyup.alt.67="clear">
        Ctrl + Click
        <div @click.ctrl="doSomething">Do something</div>

    2.5.0新增
    
        .exact 精确按键触发

        即使 Alt 或 Shift 被一同按下时也会触发
        <button @click.ctrl="onClick">A</button>
 
        仅在只有 Ctrl 被按下的时候触发
        <button @click.ctrl.exact="onCtrlClick">A</button>
        
### 2.6.3. 鼠标按键修饰符

        .left
        .right
        .middle
        
# 3. 组件系统
# 4. 客户端路由 vue-router
# 5. 状态管理 vuex
# 6. ajax数据请求 axios VueAxios
# 7. 构建系统 vue-cli