<template>
    <div :class="name">
        <div class="bg-black">
            <div class="hidden md:block w-5/12 h-auto absolute md:-top-8 md:-left-10 lg:-top-16 lg:-left-16 xl:-top-24 xl:-left-24">
                <img src="/dist/assets/images/png/Circle-green.png">                              
            </div>
            <div class="container md:pr-0">
                <div class="col-span-2 md:col-start-2 md:col-end-7">
                    <h1 class="mt-16 md:mt-24">
                        {{ headline }}
                    </h1>
                    <span class="text-gray-100 my-3 block">
                        {{ summary }}
                    </span>
                    <ButtonIcon btnText="Anmelden" btnLink="/termine" />
                </div>
                <div class="hidden md:block mt-4 md:col-start-8 lg:col-start-9 col-end-13  overflow-hidden">
                   <img src="/dist/assets/images/png/heroImg.png" class="h-full object-cover">
                </div>
            </div>
            <div class="block md:hidden aspect-w-16 aspect-h-9 overflow-hidden mt-8">
                <img src="/dist/assets/images/png/HeroImg-Mobile.png" class="object-cover">
            </div>
        </div>
    </div>
</template>

<script>
    import ButtonIcon from '../button/buttonIcon.vue'
    export default {
        components: {
            ButtonIcon,
        },
         props: {
            headline: {
                type: String,
                default: () => 'Stunt Scooter Kurse in Linz',
            },
            summary: {
                type: String,
                default: () => 'Die Kurse gibt es jetzt in ganz Österreich. Passenden Ort auswählen und loslegen.',
            }
        },
        data() {
            return {
                name: 'c-heroHome',
            }
        },
    }
</script>