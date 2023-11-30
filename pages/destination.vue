<template>
    <div class="main-section">
        <Navbar />
        <v-container class="my-10">
            <h5><span class="numbers">01</span>&nbsp;&nbsp;PICK YOUR DESTINATION</h5>
            <v-row class="mt-16">
                <v-col>

                </v-col>
                <v-col class="d-flex">
                    <div v-for="(item, index) in destinations" :key="index">
                        <nav class="mr-10" @click="setActiveStep(index)">
                            <span class="nav-text">{{ item.name.toLocaleUpperCase() }}</span>
                        </nav>
                    </div>
                </v-col>
            </v-row>
            <v-row v-if="selectedDestination">
                <v-col>
                    <v-img :src="selectedDestination.image" width="80%" class="mx-0"></v-img>
                </v-col>
                <v-col class="pa-0">
                    <div class="info-texts">
                        <h1>{{ selectedDestination.name.toLocaleUpperCase() }}</h1>
                        <p class="pr-16">{{ selectedDestination.description }}</p>
                        <v-divider class="mt-12" thickness="2"></v-divider>
                        <v-row class="mt-6">
                            <v-col class="d-flex flex-column">
                                <span class="subheading-2">AVG. DISTANCE</span>
                                <span class="subheading-1">{{ selectedDestination.distance.toLocaleUpperCase() }}</span>
                            </v-col>
                            <v-col class="d-flex flex-column">
                                <span class="subheading-2">EST. TRAVEL TIME</span>
                                <span class="subheading-1">{{ selectedDestination.travel.toLocaleUpperCase() }}</span>
                            </v-col>
                        </v-row>
                    </div>
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
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
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

let setActiveStep = (stepNumber) => {
    selectedDestination.value = destinations[stepNumber];
}
</script>

<style scoped>
.main-section {
    background: url("/images/destination/background-destination-desktop.jpg");
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: cover;
}
</style>