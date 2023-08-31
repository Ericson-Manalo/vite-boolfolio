<template lang="">
    <section>
        <h2>
            Here's are the projects:
        </h2>
        <div  class="cards">
            <SingleProject v-for="project in projects" :project='project' />
            
        </div>
    </section>
</template>


<script>
import axios from 'axios';
import SingleProject from '../components/SingleProject.vue';


    export default {
        name: 'Projects',
        components: {
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


<style lang="scss" scoped>

    section{
        text-align: center;
        
        div.cards{
            display:flex;
            max-width: 1200px;
            flex-wrap: wrap;
            margin: 0 auto;
            text-align: center;
        }
    }
    
</style>