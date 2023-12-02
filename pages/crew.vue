<template>
    <div class="main-section ma-0">
        <Navbar />
        <v-container class="mt-10 pa-0 mobile-texts">
            <h5><span class="numbers">02</span>&nbsp;&nbsp;MEET YOUR CREW</h5>
            <v-row v-if="selectedCrew">
                <v-col class="pa-0 mt-10 mt-md-0" cols="12" xs="12" sm="12" md="5" lg="5" order-md="2">
                    <v-img :src="selectedCrew.image" class="mx-auto crew-image"></v-img>
                    <v-divider thickness="2" class="d-md-none mx-9"></v-divider>
                </v-col>
                <v-col class="d-flex flex-column justify-center px-8 px-md-3" cols="12" xs="12" sm="12" md="7" lg="7"
                    order-md="1">
                    <v-row class="mt-5 mt-md-16" order-md="2">
                        <v-col cols="12" order-md="2" class="mt-0">
                            <v-row class="mobile-links">
                                <v-col cols="2" md="1" v-for="(item, index) in crew" :key="index" @click="setActiveStep(index)" class="pa-0 pl-5">
                                    <v-img v-if="activeStep == index" src="/images/crew/Oval.svg" width="50%"
                                        style="cursor: pointer;"></v-img>
                                    <v-img v-else :src="getOvalSource(index)" style="cursor: pointer;"
                                        @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave()" width="50%"></v-img>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" order-md="1" class="mb-md-8 d-flex flex-column justify-center mt-3 mt-md-0">
                            <h4 class="mb-0 my-md-5 mobile-text-1">{{ selectedCrew.role.toLocaleUpperCase() }}</h4>
                            <h3 class="mb-5 mobile-text-2">{{ selectedCrew.name.toLocaleUpperCase() }}</h3>
                            <p class="mt-3 mt-md-5 mb-10 mb-md-0 pr-md-16">
                                {{ selectedCrew.bio }}
                            </p>
                        </v-col>
                    </v-row>
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
let activeStep = ref(0)
let setActiveStep = (stepNumber) => {
    activeStep.value = stepNumber
    selectedCrew.value = crew[stepNumber]
}

let hoverState = ref(false)
let hoverStep = ref(null)

let handleMouseOver = (index) => {
    hoverStep.value = index
    hoverState.value = true
}

let handleMouseLeave = (index) => {
    hoverState.value = false
    hoverStep.value = null
}

let grayOval = "/images/crew/Oval-gray.svg"
let hoverOval = "/images/crew/Oval-hover.svg"

let getOvalSource = (index) => {
    return hoverStep.value === index ? hoverOval : grayOval;
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

@media only screen and (max-width:600px) {
    .mobile-texts {
        text-align: center;
    }

    .crew-image {
        width: 50%;
    }

    .mobile-text-1 {
        font-size: 16px;
    }

    .mobile-text-2 {
        font-size: 24px;
    }

    .mobile-links {
        display: flex;
        justify-content: center;
    }
}
</style>