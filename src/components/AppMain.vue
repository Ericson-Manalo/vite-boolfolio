<template lang="">
    <div>
        <h1>
            main
        </h1>
        <div>
            <div v-for="project in projects">
                <h2>
                    {{project.title}}
                </h2>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AppMain',

    data(){
        return{
            projects : [],
            apiUrl : 'http://127.0.0.1:8000/api/projects'
        }
    },

    methods:{
        getProjects(){

            axios.get(this.apiUrl, {
                params: {
            }
            })
            .then((response) => {
            console.log(response.data.results.data);
            this.projects = response.data.results.data;
            })
            .catch(function (error) {
            console.log(error);
            })

        }
    },

    created(){
        this.getProjects();
    }
}
</script>

<style lang="">
    
</style>