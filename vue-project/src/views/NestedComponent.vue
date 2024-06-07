<template>
    <div>
        <PageTitle :title="mytitle"></PageTitle>
        <page-title title="정적 부모타이틀"></page-title>
        <PageTitle></PageTitle>
        <BlogComp :id="blog.id" :title="blog.title"></BlogComp>
        <hr/>
        <BlogComp :blog></BlogComp>
        <h1>중첩 컴포넌트</h1>
    </div>
</template>
<script>
import PageTitle from "../components/PageTitle";
import BlogComp from "../components/BlogComp";
export default {
    components:{PageTitle,BlogComp},
    data(){ return {
        mytitle: '동적으로 전달 타이틀',
        blog: {id:3,title:'post1'}
    }; },
    created() {},
    methods:{}
    }
</script>
<style></style>
    