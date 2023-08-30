<template lang="">
    <div>
        <h1>
            main
        </h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AppMain',

    data(){
        return{
            projects : [],
            apiUrl : ''
        }
    },

    methods:{
        getProjects(){

            axios.get(this.apiUrl, {
                params: {
            }
            })
            .then(function (response) {
            console.log(response);
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