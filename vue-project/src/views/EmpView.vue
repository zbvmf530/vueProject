<template>
    <div v-for="emp in employees">
        <span v-text="'id : ' + emp.employee_id"></span>
        <span v-text="'FirstName : ' + emp.first_name"></span>
        <span v-text="'LastName : ' + emp.last_name"></span>
    </div>
</template>
<script>
import axios  from "axios";
const url='http://localhost:81/myserver/empSelect';
export default {
data(){ return {employees: [] }; },
    created(){
        axios.get(url)
        .then(json=> this.employees = json.data);
    },
    methods:{}
    }
</script>
<style>
span {
    display: inline-block;
    width: 20%;
}
</style>
    