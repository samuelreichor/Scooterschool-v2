<template>
    <div :class="name">
        <div class="bg-black h-16">
            <div class="container h-full flex items-center justify-between">
                <div class="h-10">
                    <a href="/">
                        <img src="/dist/assets/images/png/Logo-light.png" height="10" width="20" alt="logo" class="h-full w-auto">
                    </a>
                </div>
                <div class="block md:hidden h-6">
                    <img src="/dist/assets/images/svg/hamburger.svg" class="h-full w-auto">
                </div>
                <ul class="hidden md:flex items-center gap-x-10 text-gray-100">
                    <li>
                        <a href="/" class="text-base">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" class="text-base">
                            Über uns
                        </a>
                    </li>
                    <li>
                        <a href="/information" class="text-base">
                            Informationen
                        </a>
                    </li>
                    <li>
                        <div>
                            <Button btnText="Termine"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from '../button/button.vue';
    export default {
        components: {
            Button,
        },
        data() {
            return {
                name: 'c-navigation',
            }
        },
    }
</script>