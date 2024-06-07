<template>
    <div class="blogdiv">blog</div>
    <div class="blogdiv">{{id}}</div>
    <div class="blogdiv">{{ title }}</div>
</template>
<script>
export default {
    data(){ return {}; },
    created(){},
    methods:{},
    props:{
        id: Number,
        title: String
    }
}
</script>
<style>
.blogdiv {
    color: red;
}
</style>
    