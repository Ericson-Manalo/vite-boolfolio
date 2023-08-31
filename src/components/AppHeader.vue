<template lang="">
    <header>
        <nav class="navbar" style="background-color: #e3f2fd;">
            <ul>
                <li v-for="link in links">
                    <router-link :to="{ name: link.route }">
                        {{ link.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>


</template>

<script>
    export default {
        name: 'AppHeader',
        data() {
            return {
                links : [
                    {
                        route: 'homepage',
                        name: 'Homepage'
                    },
                    {
                        route: 'about',
                        name: 'About Us'
                    },
                    {
                        route: 'project.index',
                        name: 'Posts'
                    },
                ]
            }
        }
    }
</script>

<style lang="">
    
</style>