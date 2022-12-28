<template>
    <div :class="name">
        <div class="bg-black h-16 relative z-50">
            <div class="container h-full flex items-center justify-between">
                <div class="h-9 relative z-50">
                    <a href="/">
                        <img src="/dist/assets/images/png/Logo-light.png" height="10" width="20" alt="logo" class="h-full w-auto">
                    </a>
                </div>
           <button class="block md:hidden w-6 relative z-50" @click="menuToggler">
                    <div class="bg-gray-100 w-full h-[3px]"></div>
                    <div class="bg-gray-100 w-full h-[3px] my-1.5"></div>
                    <div class="bg-gray-100 w-full h-[3px]"></div>
                </button> 
                <div class="hidden md:block " id="js-nav-items">
                    <ul class=" md:flex md:items-center md:gap-x-10 text-gray-100">
                        <li class="relative md:h-16 flex items-center">
                            <a href="/" class="text-base font-regular nav-link">
                                Home
                            </a>
                        </li>
                        <li class="relative md:h-16 flex items-center">
                            <a href="/about" class="text-base nav-link">
                                Über uns
                            </a>
                        </li>
                        <li class="relative md:h-16 flex items-center">
                            <a href="/information" class="text-base nav-link">
                                Informationen
                            </a>
                        </li>
                        <li class="relative md:h-16 flex items-center">
                            <a href="/termine" class="group transition duration-300 ease-out hover:ease-in nav-link-btn bg-primary text-black text-base px-8 py-2 gap-3 inline-flex border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-primary focus-visible:outline-primary">
                                <div class="flex flex-row items-center gap-x-3">
                                    <span class="group-hover:text-white group-hover:duration-300 transition ease-out group-hover:ease-in">Termine</span>
                                    <div class="h-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" width="18.241" height="20.288" viewBox="0 0 18.241 20.288">
                                            <path class="group-hover:fill-white group-hover:duration-300 transition ease-out group-hover:ease-in" id="_6d29332d9b38b822f7d44b8a9180ed9a" data-name="6d29332d9b38b822f7d44b8a9180ed9a"
                                                d="M21.738,15.172a3.04,3.04,0,0,0-1.925-2.817l1.895-7.093a.971.971,0,0,0-.983-1.236H6.844L6.509,2.75A1.013,1.013,0,0,0,5.526,2H3.5V4.026H4.746l2.513,9.382a1.013,1.013,0,0,0,1.013.75H18.7a1.013,1.013,0,1,1,0,2.026H5.526a1.013,1.013,0,1,0,0,2.026h1.2a3.04,3.04,0,1,0,5.715,0h2.391a3.04,3.04,0,1,0,5.9,1.013,2.979,2.979,0,0,0-.405-1.489,3.04,3.04,0,0,0,1.419-2.563Zm-3.962-3.04h-8.7L7.391,6.053H19.407Zm-8.2,8.106a1.013,1.013,0,1,1,1.013-1.013A1.013,1.013,0,0,1,9.579,20.238Zm8.106,0A1.013,1.013,0,1,1,18.7,19.225,1.013,1.013,0,0,1,17.685,20.238Z"
                                                transform="translate(-3.5 -2)" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let x = ((16 + (16 + (18 - 16) * ((1600 - 600) / (1200 - 600)))))
    console.log(x);
    export default {
        data() {
            return {
                name: 'c-navigation',
            }
        },
        mounted() {
                this.setActiveLink();
            },

        methods: {
            menuToggler() {
                const navItems = document.getElementById('js-nav-items');
                const body = document.body;
                navItems.classList.toggle('active-navbar');
                navItems.classList.toggle('hidden');
                body.classList.toggle('overflow-hidden');
            },

            setActiveLink() {
                document.querySelectorAll('.nav-link').forEach(link => {
                    if(link.href === window.location.href) {
                        link.setAttribute('aria-current','page');
                    }
                })

                document.querySelectorAll('.nav-link-btn').forEach(linkBtn => {
                if (linkBtn.href === window.location.href) {
                    linkBtn.setAttribute('aria-current', 'pageTermine');
                }
            })
            },
        }
    }
</script>