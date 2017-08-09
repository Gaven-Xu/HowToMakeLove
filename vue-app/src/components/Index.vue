<template>
    <div>
        <h1 v-text="msg"></h1>
        <h4 v-text="tick_msg"></h4>
        <tick @tick_done="showTick"></tick>
    </div>
</template>

<script>

import tick from './tick.vue'

export default {
    name:'Index',
    data(){
        return {
            msg: '这是首页，你是不是傻',
            tick_msg:''
        }
    },
    methods:{
        showTick:function(u,s){
            this.tick_msg = u+' / '+s;
            console.log(u,s);
        }
    },
    components:{
        tick
    }
}
</script>