<template>
    <form @submit="formHandle">
        <input type="text" name="name" id="name">
        <input type="text" name="secret" id="secret">
        <button type="submit">提交</button>
    </form>
</template>

<script>
    export default {
        name:"tick",
        methods:{
            formHandle:function(e){
                e.preventDefault();
                this.$emit('tick_done',this.$el.name.value.trim(),this.$el.secret.value.trim())
            }
        }
    }
</script>