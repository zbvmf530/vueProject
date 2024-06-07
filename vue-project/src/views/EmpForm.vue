<template>
    <div>
        <h1>사원등록</h1>
        <div>사번<input v-model="emp.employee_id"></div>
        <div>first_name<input v-model="emp.first_name"></div>
        <div>last_name<input v-model="emp.last_name"></div>
        <div>email<input v-model="emp.email"></div>
        <div>hire_date<input v-model="emp.hire_date"></div>
        <div>job_id: <select v-model="emp.job_id">
            <option v-for="job in jobs" :value="job.job_id" v-text="job.job_id" ></option>
        </select></div>
        <button @click="addHandler">등록</button>
    </div>
</template>
<script>
import axios  from "axios";
const url='/empDeptJob';
export default {
data(){ return {
        emp:{employee_id : 100, first_name: '' , last_name: '', email: '', hire_date : '', job_id : ''},
        jobs : []
    }; 
},
    created() {
        axios.get(url)
        .then(json=> {this.jobs = json.data.jobs;});
    },
    methods:{
        async addHandler(){
            await axios.post("/empInsert",this.emp)
            .then(json=>console.log(json));
            this.$router.push("/employees")
        }
    }
    }
</script>
<style></style>
    