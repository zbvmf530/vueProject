<template>
    
    
    <table class="table table-dark table-hover">
        <thead>
            <tr>
                <th>id</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>수정</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="emp in employees">
                <td v-text="emp.employee_id"></td>
                <td v-text="emp.first_name"></td>
                <td v-text="emp.last_name"></td>
                <td><button class="btn btn-primary" @click="gotoUpdateForm(emp)">수정</button></td>
            </tr>
        </tbody>
    </table>

</template>
<script>
import axios  from "axios";
import { RouterLink } from "vue-router";
const url='/empSelect';
const test='string';
export default {
data(){ return {employees: [] }; },
    created(){
        axios.get(url)
        .then(json=> this.employees = json.data);
    },
    methods:{
        gotoUpdateForm(emp){
            console.log(emp)
            this.$router.push({
                path : '/updateEmpForm',
                name : 'updateEmpForm',
                params: {employee_id : String}
            }
            )

        }
    }
    }
</script>
<style>

</style>
    