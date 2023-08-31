<template lang="">
    <article class="single-card">
        <h1>
            {{ project.title }}
        </h1>
        <h3>
            {{project.category}} -- {{project.type.name}}
            
        </h3>

        <p>
            Created in: {{project.created_date}}
        </p>

        <p>
            {{ project.description }}
        </p>

    </article>
</template>
<script>
export default {
    name: 'SingleProject',
    props: {
        'project': Object
    }
    
}
</script>
<style lang="scss">

    article.single-card{
            width: calc((100% / 3) - 3rem);
            border-radius: 10px;
            padding: 1rem;
            margin-right: 1rem;
            background-color: rgb(51, 50, 50);
            color: rgb(255, 255, 255);
            margin-bottom: 2rem;
        }
</style>