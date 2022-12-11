<template>
    <div :class="name">
        finally rendered
    </div>
</template>

<script>
    export default {
        components: {
        },
        props: {
            exampleProp: {
                type: String,
                default: () => '',
            },
        },
        data() {
            return {
                name: 'c-name',
            }
        },
    }
</script>