<template>
    <div :class="name">
        <div>
            <a :href="btnLink"
                class="group transition duration-300 ease-out hover:ease-in nav-link-btn bg-primary text-black text-base px-8 py-2 gap-3 inline-flex border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-primary focus-visible:outline-primary">
                <div class="flex flex-row items-center gap-x-3">
                    <span
                        class="group-hover:text-white group-hover:duration-300 transition ease-out group-hover:ease-in">{{btnText}}</span>
                    <div class="h-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" width="18.241" height="20.288"
                            viewBox="0 0 18.241 20.288">
                            <path class="group-hover:fill-white group-hover:duration-300 transition ease-out group-hover:ease-in"
                                id="_6d29332d9b38b822f7d44b8a9180ed9a" data-name="6d29332d9b38b822f7d44b8a9180ed9a"
                                d="M21.738,15.172a3.04,3.04,0,0,0-1.925-2.817l1.895-7.093a.971.971,0,0,0-.983-1.236H6.844L6.509,2.75A1.013,1.013,0,0,0,5.526,2H3.5V4.026H4.746l2.513,9.382a1.013,1.013,0,0,0,1.013.75H18.7a1.013,1.013,0,1,1,0,2.026H5.526a1.013,1.013,0,1,0,0,2.026h1.2a3.04,3.04,0,1,0,5.715,0h2.391a3.04,3.04,0,1,0,5.9,1.013,2.979,2.979,0,0,0-.405-1.489,3.04,3.04,0,0,0,1.419-2.563Zm-3.962-3.04h-8.7L7.391,6.053H19.407Zm-8.2,8.106a1.013,1.013,0,1,1,1.013-1.013A1.013,1.013,0,0,1,9.579,20.238Zm8.106,0A1.013,1.013,0,1,1,18.7,19.225,1.013,1.013,0,0,1,17.685,20.238Z"
                                transform="translate(-3.5 -2)" />
                        </svg>
                    </div>
                </div>
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