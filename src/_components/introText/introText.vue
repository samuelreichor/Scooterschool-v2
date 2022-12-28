<template>
    <div :class="name">
        <div class="bg-black py-14 md:py-20 relative z-40">
            <div class="container">
                <div class="text-center col-span-2 md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-10">
                    <div class="flex flex-col justify-center">
                        <div class="flex justify-center mb-4md:mb-8">
                            <LocationIcon class="scale-50 md:scale-75" />
                        </div>
                        <span class="text-gray-100 text-lg mb-5">
                            {{ summary }}
                        </span>
                        <Button btnText="Wie es funktioniert" btnLink="/information"/>
                    </div>
                </div>
            </div>
        </div>    
</div>
</template>

<script>
    import LocationIcon from '/dist/assets/images/svg/locations.svg';
    import Button from '../button/button.vue'

    export default {
        components: {
            LocationIcon,
            Button
        },
        props: {
            summary: {
                type: String,
                default: () => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
            },
        },
        data() {
            return {
                name: 'c-introText',
            }
        },
    }
</script>