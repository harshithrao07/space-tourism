<template>
    <v-container fluid class="main-section pa-0 ma-0">
        <Navbar />
        <v-container class="my-16">
            <v-row>
                <v-col md="12" lg="6" sm="12" xs="12" cols="12">
                    <h5>
                        SO, YOU WANT TO TRAVEL TO
                    </h5>
                    <h1>
                        SPACE
                    </h1>
                    <div class="mr-12">
                        <p>
                            Let’s face it, if you want to go to space, you might as well genuinely go to outer space and not
                            hover
                            kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this
                            world
                            experience!
                        </p>
                    </div>
                </v-col>
                <v-col class="d-flex align-center justify-center" md="12" lg="6" sm="12" xs="12" cols="12">
                    <div :class="{ ripple: mouseHover, rippleLeave: mouseLeaveAfterAnimation }">
                        <NuxtLink to="/destinations" style="text-decoration: none;">
                            <div class="bg-white px-6 py-16 rounded-circle" @mouseover="handleMouseOver()"
                                @mouseleave="handleMouseLeave()">
                                <h4 class="black">EXPLORE</h4>
                            </div>
                        </NuxtLink>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script setup>
let mouseHover = ref(false)
let mouseLeaveAfterAnimation = ref(false)
let handleMouseOver = () => {
    mouseHover.value = true
    mouseLeaveAfterAnimation.value = false
}
let handleMouseLeave = () => {
    mouseLeaveAfterAnimation.value = true
}
</script>

<style scoped>
.main-section {
    background: url("/images/home/background-home-desktop.jpg");
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: cover;
}

h5 {
    color: #D0D6F9;
}

.ripple {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 100%;
    cursor: pointer;
    animation: rippling 1s forwards;
}

.rippleLeave {
    animation: rippleLeaving 0.5s ease-in;
}

@keyframes rippling {
    0% {
        padding: 0%;
    }


    100% {
        padding: 12%;
    }
}

@keyframes rippleLeaving {
    0% {
        padding: 12%;
    }

    100% {
        padding: 0%;
    }
}


@media only screen and (max-width:600px) {
    .main-section {
        background: url("/images/home/background-home-mobile.jpg");
    }
}
</style>