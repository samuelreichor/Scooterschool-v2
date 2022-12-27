<template>
    <div :class="name">
        <div>
            <a :href="btnLink" class="bg-primary text-black text-base px-8 py-2.5 gap-3 inline-flex border-2 border-black transition-all hover:bg-transparent hover:border-2 hover:border-primary hover:text-white">
                {{btnText}}
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        props: {
            btnText: {
                type: String,
                default: () => 'Termine',
            },
            btnLink: {
                type: String,
                default: () => '/',
            }
        },
        data() {
            return {
                name: 'c-button',
            }
        },
    }
</script>