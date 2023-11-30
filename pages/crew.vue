<template>
    <div class="main-section">
        <Navbar />
        <v-container class="mt-10 pa-0">
            <h5><span class="numbers">02</span>&nbsp;&nbsp;MEET YOUR CREW</h5>
            <v-row v-if="selectedCrew">
                <v-col class="d-flex flex-column justify-center" cols="7">
                    <h4 class="my-5">{{ selectedCrew.role.toLocaleUpperCase() }}</h4>
                    <h3 class="mb-5">{{ selectedCrew.name.toLocaleUpperCase() }}</h3>
                    <p class="mt-5 pr-16">
                        {{ selectedCrew.bio }}
                    </p>
                    <div>
                        <v-row class="w-25 mt-16">
                            <v-col v-for="(item, index) in crew" :key="index" @click="setActiveStep(index)">
                                <v-img src="/images/crew/Oval.svg" width="100%"></v-img>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
                <v-col class="pa-0" cols="5">
                    <v-img :src="selectedCrew.image" class="mx-auto"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
let crew = [
    {
        "name": "Douglas Hurley",
        "image": "./images/crew/image-douglas-hurley.png",
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        "name": "Mark Shuttleworth",
        "image": "./images/crew/image-mark-shuttleworth.png",
        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        "name": "Victor Glover",
        "image": "./images/crew/image-victor-glover.png",
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        "name": "Anousheh Ansari",
        "image": "./images/crew/image-anousheh-ansari.png",
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
]

let selectedCrew = ref(
    {
        "name": "Douglas Hurley",
        "image": "./images/crew/image-douglas-hurley.png",
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    }
)

let setActiveStep = (stepNumber) => {
    selectedCrew.value = crew[stepNumber]
}
</script>

<style scoped>
.main-section {
    background: url("/images/crew/background-crew-desktop.jpg");
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: cover;
}

h4 {
    color: gray;
}
</style>