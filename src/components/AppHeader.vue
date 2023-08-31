<template lang="">
    <header>

        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <ul>
                    <li v-for="link in links">
                        <router-link :to="{ name: link.route }">
                            {{ link.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
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
                        name: 'Projects'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss">
    nav{
        width: 100%;
        margin-bottom: 3rem;

        ul{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            list-style-type: none;

            li{
                margin-right: 2rem;
                a {
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }
</style>