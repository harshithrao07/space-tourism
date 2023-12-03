<template>
    <div class="main-section" style="display: flex; flex-direction: column;">
        <Navbar />
        <v-container class="my-10" style="flex: 1;">
            <h5><span class="numbers">01</span>&nbsp;&nbsp;PICK YOUR DESTINATION</h5>

            <v-row v-if="selectedDestination" class="pa-3 mt-3 mt-md-16 mobile-texts">
                <v-col cols="12" md="6" sm="12" class="d-inline d-md-flex d-lg-inline">
                    <v-img :src="selectedDestination.image" width="85%" class="mobile-image my-auto"></v-img>
                </v-col>
                <v-col class="pa-6" cols="12" md="6" sm="12">
                    <v-row class="mt-1 mt-md-0">
                        <v-col class="d-flex pa-0 tablet-links">
                            <div v-for="(item, index) in destinations" :key="index" class="mobile-links">
                                <div v-if="activeStep == index" class="h-100 mr-sm-5 pb-2 active">
                                    <nav @click="setActiveStep(index)">
                                        <span class="nav-text" style="cursor: pointer;">{{ item.name.toLocaleUpperCase()
                                        }}</span>
                                    </nav>
                                </div>
                                <div v-else class="h-100 mr-sm-5 pb-2" :class="{ hover: mouseHover && hoverStep == index }">
                                    <nav @click="setActiveStep(index)" @mouseover="handleMouseOver(index)"
                                        @mouseleave="handleMouseLeave()">
                                        <span class="nav-text not-active" style="cursor: pointer;">{{
                                            item.name.toLocaleUpperCase() }}</span>
                                    </nav>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row v-if="selectedDestination">
                        <div class="info-texts">
                            <h2 class="mt-3 mt-md-0" v-if="selectedDestination.name">{{ selectedDestination.name.toLocaleUpperCase() }}</h2>
                            <p class="pr-md-16 mt-3 mt-md-0">{{ selectedDestination.description }}</p>
                            <v-divider class="mt-12" thickness="2"></v-divider>
                            <v-row class="mt-6 mt-md-0 mt-lg-6">
                                <v-col class="d-flex flex-column" cols="12" md="6" sm="6">
                                    <span class="subheading-2">AVG. DISTANCE</span>
                                    <span class="subheading-1">{{ selectedDestination.distance.toLocaleUpperCase() }}</span>
                                </v-col>
                                <v-col class="d-flex flex-column" cols="12" md="6" sm="6">
                                    <span class="subheading-2">EST. TRAVEL TIME</span>
                                    <span class="subheading-1">{{ selectedDestination.travel.toLocaleUpperCase() }}</span>
                                </v-col>
                            </v-row>
                        </div>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <Footer />
    </div>
</template>

<script setup>
import { getData, getImage } from "~/firebase"

let destinations = ref([])

let selectedDestination = ref({
  name: '',
  image: '',
  description: '',
  distance: '',
  travel: '',
});

let activeStep = ref(0)

let setActiveStep = (stepNumber) => {
    activeStep.value = stepNumber
    selectedDestination.value = destinations.value[stepNumber];
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

onMounted(async () => {
    try{
        const data = await getData("destinations");
        destinations.value = await Promise.all(data.map(async (destination) => {
            return {
                ...destination,
                image: await getImage(`destinations/image-${destination.name}.webp`)
            };
        }));
        setActiveStep(0);
    } catch (error) {
        throw error
    }
})
</script>

<style scoped>
.main-section {
    background: url("/images/destination/background-destination-desktop.jpg");
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
}

.active {
    border-bottom: 3px solid white;
}


.hover {
    border-bottom: 3px solid #acacb0;
    
}

@media only screen and (max-width:1023px) and (min-width:601px){

    .main-section {
    height: 100vh;
}

    .mobile-image {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 5%;
        width: 70% !important;
    }
    .mobile-texts {
        text-align: center;
    }

    .tablet-links {
        justify-content: center;
    }

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
    .mobile-texts {
        text-align: center;
    }
}</style>