<template lang="">
    <div>
        <h1>
            main
        </h1>
        <div class="cards">
            <div class="single-card" v-for="project in projects">
                <h2>
                    {{project.title}}
                </h2>
                <h3>
                    {{project.category}}
                </h3>
                <p>
                    {{project.description}}
                </p>
                <!-- <img :src="project.image" alt=""> -->
                <p>
                    {{project.type.name}}
                </p>
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

<style lang="scss">
    div.cards{
        display:flex;
        max-width: 1200px;
        flex-wrap: wrap;

        div.single-card{
            width: calc((100% / 3) - 3rem);
            border-radius: 1rem;
            padding: 1rem;
            margin-right: 1rem;
            background-color: rgb(51, 50, 50);
            color: rgb(255, 255, 255);
            margin-bottom: 2rem;
        }
    }
</style>