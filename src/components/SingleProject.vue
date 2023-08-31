<template lang="">
    <article class="">
        <h2>
            {{ project.title }}
        </h2>

        <h5>
            {{ project.description }}
        </h5>

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
<style lang="">
    
</style>