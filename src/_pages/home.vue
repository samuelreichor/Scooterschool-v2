<template>
    <HeroHome/>
    <IntroText/>
    <div class="container showgrid">
        <div class="col-span-1 border-2 border-black h-12"></div>
        <div class="col-span-1 border-2 border-black h-12"></div>
        <div class="col-span-1 border-2 border-black h-12"></div>
        <div class="col-span-1 border-2 border-black h-12"></div>
        <div class="col-span-1 border-2 border-black h-12"></div>
        <div class="col-span-1 border-2 border-black h-12"></div>
        <div class="col-span-1 border-2 border-black h-12"></div>
        <div class="col-span-1 border-2 border-black h-12"></div>
        <div class="col-span-1 border-2 border-black h-12"></div>
        <div class="col-span-1 border-2 border-black h-12"></div>
        <div class="col-span-1 border-2 border-black h-12"></div>
        <div class="col-span-1 border-2 border-black h-12"></div>
    </div>
</template>

<script>
    import HeroHome from '../_components/heroHome/heroHome.vue';
    import IntroText from '../_components/introText/introText.vue';
    export default {
            components: {
                HeroHome,
                IntroText,
            },
        }
// import sanity from "../client.js"

//     const query = '*[_type == "animal"]{name, _id}';

//     sanity.fetch(query).then((animals) => {
//         animals.forEach((animal) => {
//             console.log(animal.name)
//         })
//     })
</script>