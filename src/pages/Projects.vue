<template lang="">
    <section>
        <SingleProject/>
    </section>
</template>


<script>
import axios from 'axios';
import SingleProject from '../components/SingleProject.vue';


    export default {
        name: {
            SingleProject
        },

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