<template>
    <div>        
        <h1>사원수정</h1>
        <div>사번<input></div>
        <div>first_name<input ></div>
        <div>last_name<input></div>
        <div>email<input ></div>
        <div>hire_date<input ></div>
        
        <button @click="addHandler">수정</button>
    </div>
</template>
<script>
export default {
data(){ return {}; },
    created() {
        console.log(this.$route.params.employee_id);
    },
    methods:{}
    }
</script>
<style></style>
    