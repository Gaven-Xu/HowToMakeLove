<!-- TOC -->

- [Angular - MVC SPA](#angular---mvc-spa)
    - [Start](#start)
    - [表达式 {{}}](#表达式-)
    - [指令 ng-](#指令-ng-)
    - [事件(与事件相关的命令) ng-](#事件与事件相关的命令-ng-)
    - [Scope](#scope)
        - [1.](#1)
        - [2. 第三方路由 ui-router](#2-第三方路由-ui-router)
            - [特点](#特点)
            - [步骤](#步骤)
            - [备注](#备注)

<!-- /TOC -->
# Angular - MVC SPA
AngularJS 单一页面应用程序（SPAs：Single Page Applications）

AngularJS 把应用程序数据绑定到 HTML 元素

AngularJS 可以克隆和重复 HTML 元素

AngularJS 可以隐藏和显示 HTML 元素

AngularJS 可以在 HTML 元素"背后"添加代码

AngularJS 支持输入验证

## Start
ng-app 定义一个AngularJS应用程序

ng-model 把元素值绑定到应用程序上（双向）

ng-bind 把应用程序数据绑定到HTML视图上（单向）
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script>
</head>
<body>

<div ng-app="">
     <p>名字 : <input type="text" ng-model="name"></p>
     <h1>Hello {{name}}</h1>
</div>

</body>
</html>
```
在html中，我们用命令和表达式来描述应用程序视图（视图逻辑）- V

**ng-model="name"**  为命令格式

**{{name}}**  为表达式格式

在Js中，我们用模块和控制器来描述数据模型，以及它与View的关系

AngularJS 模块（Module） 定义了 AngularJS 应用

AngularJS 控制器（Controller） 用于控制 AngularJS 应用

模块和控制器往往写在一起，包括了M和C

## 表达式 {{}}
```JavaScript
{{3*4}}

{{'Hello'+' World'}}

{{a[1]}}

{{b.name}}
```

类似于 JavaScript 表达式,AngularJS 表达式可以包含字母，操作符，变量

与 JavaScript 表达式不同，AngularJS 表达式可以写在 HTML 中

与 JavaScript 表达式不同，AngularJS 表达式不支持条件判断，循环及异常

与 JavaScript 表达式不同，AngularJS 表达式支持过滤器

## 指令 ng-
```
ng-app              定义应用程序的根元素。
ng-bind             绑定 HTML 元素到应用程序数据
ng-bind-html        绑定 HTML 元素的 innerHTML 到应用程序数据，并移除 HTML 字符串中危险字符
ng-bind-template    规定要使用模板替换的文本内容
ng-class            指定 HTML 元素使用的 CSS 类
ng-class-even	    类似 ng-class，但只在偶数行起作用
ng-class-odd	    类似 ng-class，但只在奇数行起作用
ng-cloak            在应用正要加载时防止其闪烁
ng-controller	    定义应用的控制器对象
ng-csp	            修改内容的安全策略
ng-form	            指定 HTML 表单继承控制器表单
ng-hide	            隐藏或显示 HTML 元素
ng-href	            为 \<a> 元素指定链接
ng-if	            如果条件为 false 移除 HTML 元素
ng-include          在应用中包含 HTML 文件
ng-init	            定义应用的初始化值
ng-jq	            定义应用必须使用到的库，如：jQuery
ng-list	            将文本转换为列表 (数组)
ng-model            绑定 HTML 控制器的值到应用数据
ng-model-options    规定如何更新模型
ng-non-bindable	    规定元素或子元素不能绑定数据
ng-open	            指定元素的 open 属性
ng-options          在 \<select> 列表中指定 \<options>
ng-pluralize	    根据本地化规则显示信息
ng-readonly         指定元素的 readonly 属性
ng-repeat           定义集合中每项数据的模板
ng-selected         指定元素的 selected 属性
ng-show	            显示或隐藏 HTML 元素
ng-src	            指定 \<img> 元素的 src 属性
ng-srcset           指定 \<img> 元素的 srcset 属性
ng-style            指定元素的 style 属性
ng-switch           规定显示或隐藏子元素的条件
ng-transclude	    规定填充的目标位置
ng-value            规定 input 元素的值
```
## 事件(与事件相关的命令) ng-

鼠标事件
```
ng-click        定义元素被点击时的行为
ng-dblclick     规定双击事件的行为
ng-mousedown	规定按下鼠标按键时的行为
ng-mouseenter	规定鼠标指针穿过元素时的行为
ng-mouseleave	规定鼠标指针离开元素时的行为
ng-mousemove	规定鼠标指针在指定的元素中移动时的行为
ng-mouseover	规定鼠标指针位于元素上方时的行为
ng-mouseup      规定当在元素上松开鼠标按钮时的行为
```
按键事件
```
ng-keydown	规定按下按键事件的行为
ng-keypress	规定按下按键事件的行为
ng-keyup	规定松开按键事件的行为
```
综合
```
ng-blur     规定 blur 事件的行为
ng-change   规定在内容改变时要执行的表达式
ng-checked  规定元素是否被选中
ng-copy     规定拷贝事件的行为
ng-cut      规定剪切事件的行为
ng-disabled 规定一个元素是否被禁用
ng-focus    规定聚焦事件的行为
ng-paste    规定粘贴事件的行为
ng-submit   规定 onsubmit 事件发生时执行的表达式
```
## Scope
### 1.
### 2. 第三方路由 ui-router
#### 特点

通过状态（state）定义页面的位置
可以实现多级路由的嵌套

#### 步骤

> 1. 引入angular.js uirouter.js
> 2. 创建入口模块，并注入ui.router
> 3. 配置每一个路由$stateProvider

$stateProvider.state(string,object)

> string 状态名,state name,根据这个状态来切换路由
---
> object 每一条路由的详细信息
    >> url 在地址栏中显示的路径
    >> template / templateUrl 模板或者模板（视图）的路径
    >> controller 模板（视图）对应的控制器
---
> 子页面
>> 同一个父视图中，子视图的名字，必须一样；state、url不一样

$urlRouterProvider.otherwise()

> 每一条状态都不满足的时候，使用的路由

```javascirpt
{
    views:{

    }
}
```

#### 备注

> 切换路由，使用 ui-sref
> 显示视图，使用 ui-view
