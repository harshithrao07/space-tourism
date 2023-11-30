<template>
    <v-container fluid class="main-section pa-0 ma-0">
        <Navbar />
        <v-container class="my-16">
            <v-row>
                <v-col>
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
                <v-col class="d-flex align-center justify-center">
                    <div class="bg-white px-6 py-16 rounded-circle">
                        <h4 class="black">EXPLORE</h4>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script setup>

</script>

<style scoped>
.main-section {
    background: url("/images/home/background-home-desktop.jpg");
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: cover;
    min-height: 100vh;
}

h5 {
    color: #D0D6F9;
}
</style>