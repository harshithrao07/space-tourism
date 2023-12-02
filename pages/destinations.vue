<template>
    <div class="main-section">
        <Navbar />
        <v-container class="my-10 mobile-texts">
            <h5><span class="numbers">01</span>&nbsp;&nbsp;PICK YOUR DESTINATION</h5>

            <v-row v-if="selectedDestination" class="pa-3 mt-3 mt-md-16">
                <v-col cols="12" md="6" sm="12">
                    <v-img :src="selectedDestination.image" width="85%" class="mobile-image my-auto"></v-img>
                </v-col>
                <v-col class="pa-6" cols="12" md="6" sm="12">
                    <v-row class="mt-1 mt-md-0">
                        <v-col class="d-flex pa-0">
                            <div v-for="(item, index) in destinations" :key="index" class="mobile-links">
                                <div v-if="activeStep == index" class="h-100 mr-md-5 pb-2 active">
                                    <nav @click="setActiveStep(index)">
                                        <span class="nav-text" style="cursor: pointer;">{{ item.name.toLocaleUpperCase()
                                        }}</span>
                                    </nav>
                                </div>
                                <div v-else class="h-100 mr-md-5 pb-2" :class="{ hover: mouseHover && hoverStep == index }">
                                    <nav @click="setActiveStep(index)" @mouseover="handleMouseOver(index)"
                                        @mouseleave="handleMouseLeave()">
                                        <span class="nav-text not-active" style="cursor: pointer;">{{
                                            item.name.toLocaleUpperCase() }}</span>
                                    </nav>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <div class="info-texts">
                            <h2 class="mt-3 mt-md-0">{{ selectedDestination.name.toLocaleUpperCase() }}</h2>
                            <p class="pr-md-16 mt-3 mt-md-0">{{ selectedDestination.description }}</p>
                            <v-divider class="mt-12" thickness="2"></v-divider>
                            <v-row class="mt-6">
                                <v-col class="d-flex flex-column" cols="12" md="6" sm="12">
                                    <span class="subheading-2">AVG. DISTANCE</span>
                                    <span class="subheading-1">{{ selectedDestination.distance.toLocaleUpperCase() }}</span>
                                </v-col>
                                <v-col class="d-flex flex-column" cols="12" md="6" sm="12">
                                    <span class="subheading-2">EST. TRAVEL TIME</span>
                                    <span class="subheading-1">{{ selectedDestination.travel.toLocaleUpperCase() }}</span>
                                </v-col>
                            </v-row>
                        </div>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
let destinations = [
    {
        "name": "Moon",
        "image": "./images/destination/image-moon.png",
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
    },
    {
        "name": "Mars",
        "image": "./images/destination/image-mars.png",
        "description": "Don’t forget to pack your hiking boots. It has some of the tallest volcanoes in the solar system. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
    },
    {
        "name": "Europa",
        "image": "./images/destination/image-europa.png",
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
    },
    {
        "name": "Titan",
        "image": "./images/destination/image-titan.png",
        "description": "Titan's name comes from Greek mythology. The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
    }
]

let selectedDestination = ref(
    {
        "name": "Moon",
        "image": "./images/destination/image-moon.png",
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
    }
)

let activeStep = ref(0)

let setActiveStep = (stepNumber) => {
    activeStep.value = stepNumber
    selectedDestination.value = destinations[stepNumber];
}

let mouseHover = ref(false)
let hoverStep = ref(null)

let handleMouseOver = (index) => {
    hoverStep.value = index
    mouseHover.value = true
}

let handleMouseLeave = () => {
    mouseHover.value = false
}
</script>

<style scoped>
.main-section {
    background: url("/images/destination/background-destination-desktop.jpg");
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: cover;
}

.active {
    border-bottom: 3px solid white;
}


.hover {
    border-bottom: 3px solid #acacb0;
    ;
}

@media only screen and (max-width:600px) {
    .mobile-image {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 5%;
    }

    .mobile-links {
        margin-left: auto;
        margin-right: auto;
    }

}</style>