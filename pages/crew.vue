<template>
    <div class="main-section ma-0" style="display: flex; flex-direction: column;">
        <Navbar />
        <v-container class="mt-10 pa-0 mobile-texts" style="flex: 1;">
            <h5 class="ml-0 ml-sm-7 ml-md-0"><span class="numbers">02</span>&nbsp;&nbsp;MEET YOUR CREW</h5>
            <v-row v-if="selectedCrew" class="tablet-texts">
                <v-col class="pa-0 mt-10 mt-sm-16 mt-md-0 tablet-crew-image-parent" cols="12" xs="12" sm="12" md="5" lg="5"
                    order-sm="2">
                    <v-img :src="selectedCrew.image" class="mx-auto crew-image" />
                    <v-divider thickness="2" class="d-sm-none mx-9"></v-divider>
                </v-col>
                <v-col class="d-flex flex-column justify-center px-8 px-md-3" cols="12" xs="12" sm="12" md="7" lg="7"
                    order-sm="1">
                    <v-row class="mt-5 mt-md-16" order-md="2">
                        <v-col cols="12" order-md="2" class="mt-0">
                            <v-row class="mobile-links">
                                <v-col order-lg="2" cols="1" sm="1" md="1" v-for="(item, index) in crew" :key="index"
                                    @click="setActiveStep(index)" class="pa-0 ml-3 ml-sm-0 pl-sm-5">
                                    <v-img v-if="activeStep == index" src="/images/crew/Oval.svg" width="50%"
                                        style="cursor: pointer;"></v-img>
                                    <v-img v-else :src="getOvalSource(index)" style="cursor: pointer;"
                                        @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave()"
                                        width="50%"></v-img>
                                </v-col>
                                <v-col order-sm="1" cols="12" order-lg="1"
                                    class="mb-md-8 d-flex flex-column justify-center mt-3 mt-md-0">
                                    <h4 class="mb-0 my-md-5 mobile-text-1">{{ selectedCrew.role.toLocaleUpperCase() }}</h4>
                                    <h3 class="mb-5 mobile-text-2">{{ selectedCrew.name.toLocaleUpperCase() }}</h3>
                                    <p class="mt-3 mt-md-5 mb-10 mb-md-0 pr-md-16 px-0 px-sm-16 px-md-0">
                                        {{ selectedCrew.bio }}
                                    </p>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <Footer />
    </div>
</template>

<script setup>
import { getData, getImage } from '~/firebase';

let crew = ref([])

let selectedCrew = ref(
    {
        name: "",
        image: "",
        role: "",
        bio: ""
    }
)
let activeStep = ref(0)
let setActiveStep = (stepNumber) => {
    activeStep.value = stepNumber
    selectedCrew.value = crew.value[stepNumber]
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

onMounted(async() => {
    try{
        const data = await getData("crew")
        crew.value = await Promise.all(data.map(async(person) => {
            return {
                ...person,
                image: await getImage(`crew/image-${person.name.toLowerCase().replace(/\s+/g, '-')}.webp`)
            }
        }))
        setActiveStep(0);
    } catch(error) {
        throw error
    }
})

</script>

<style scoped>
.main-section {
    background: url("/images/crew/background-crew-desktop.jpg");
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
}

h4 {
    color: gray;
}

@media only screen and (max-width:1023px) and (min-width:601px) {

    .main-section {
        background: url("/images/crew/background-crew-tablet.jpg");
        background-repeat: no-repeat;
        background-position: 100% 100%;
        background-size: cover;
        background-attachment: fixed;
        height: 100vh;
    }

    .tablet-crew-image-parent {
        display: flex;
    }

    .tablet-texts {
        text-align: center;
    }

    .crew-image {
        padding: 50%;
    }

    .mobile-links {
        display: flex;
        justify-content: center;
    }
}

@media only screen and (max-width:600px) {
    .main-section {
        background: url("/images/crew/background-crew-mobile.jpg");
        background-repeat: no-repeat;
        background-position: 100% 100%;
        background-size: cover;
        background-attachment: fixed;
    }

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
}</style>