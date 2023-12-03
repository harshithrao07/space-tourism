<template>
  <div class="main-section" style="display: flex; flex-direction: column;">
    <Navbar />
    <v-container fluid class="mb-16 mt-10 mt-md-16 pa-2 pa-md-0 mobile-texts" style="flex: 1;">
      <h5 class="ml-md-16 mb-10 mb-md-0"><span class="numbers ml-md-16">03</span>&nbsp;&nbsp;SPACE LAUNCH 101</h5>
      <v-row v-if="selectedTechnology.name">
        <v-col cols="12" order-md="3" md="5" class="pa-0">
          <v-img class="desktop" :src="selectedTechnology.images.portrait"></v-img>
          <v-img class="mobile-tablet" :src="selectedTechnology.images.landscape"></v-img>
        </v-col>
        <v-col cols="12" class="d-flex flex-column justify-center mt-7 mt-md-7 align-end mobile-links-parent" order-md="1"
          md="2">
          <div class="mobile-links">
            <div v-for="(item, index) in technology" :key="index">
              <div v-if="activeStep == index" @click="setActiveStep(index)"
                class="py-2 px-4 py-sm-4 px-sm-8 rounded-circle mx-3 my-md-5 mr-md-10 bg-white d-flex align-center justify-center"
                style="border: 1px solid white; cursor: pointer;">
                <h4 class="text-black mobile-text-2">{{ index + 1 }}</h4>
              </div>
              <div v-else @click="setActiveStep(index)"
                class="py-2 px-4 py-sm-4 px-sm-8 rounded-circle mx-3 my-md-5 mr-md-10 d-flex align-center justify-center navigation"
                style="cursor: pointer;" :class="{ hover: hoverState && hoverStep == index }"
                @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave()">
                <h4 class="mobile-text-2">{{ index + 1 }}</h4>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" class="d-flex flex-column justify-center" order-md="2" md="5">
          <h5 class="mt-0 mt-sm-16 mt-md-0">THE TERMINOLOGY...</h5>
          <h3 class="mt-1 mb-10 mobile-text-1">{{ selectedTechnology.name.toLocaleUpperCase() }}</h3>
          <div class="px-0 px-sm-16 px-md-0">
            <p class="mr-md-16 px-0 px-sm-16 px-md-0">{{ selectedTechnology.description }}</p>
          </div>
        </v-col>
      </v-row>
      <v-row v-else class="mt-16 d-flex align-center justify-center">
        <h5>Loading...</h5>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script setup>
import { getData, getImage } from '~/firebase';

let technology = ref([])

let selectedTechnology = ref({
  "name": "",
  "images": {
    "portrait": "",
    "landscape": ""
  },
  "description": ""
})

let activeStep = ref(0)

let setActiveStep = (stepNumber) => {
  activeStep.value = stepNumber
  selectedTechnology.value = technology.value[stepNumber]
}

let hoverState = ref(false)
let hoverStep = ref(null)

let handleMouseOver = (index) => {
  hoverStep.value = index
  hoverState.value = true
}

let handleMouseLeave = (index) => {
  hoverStep.value = null
  hoverState.value = false
}

onMounted(async() => {
  try {
    const data = await getData("technology")
    technology.value = await Promise.all(data.map(async (tech) => {
      return {
        ...tech,
        "images" : {
          "portrait" : await getImage(`technology/image-${tech.name.toLowerCase().replace(/\s+/g, '-')}-portrait.jpg`),
          "landscape" : await getImage(`technology/image-${tech.name.toLowerCase().replace(/\s+/g, '-')}-landscape.jpg`)
        }
      }
    }))
    setActiveStep(0)
  } catch(error) {
    throw error;
  }
})
</script>

<style scoped>
.main-section {
  background: url("/images/technology/background-technology-desktop.jpg");
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}

h5 {
  color: #D0D6F9;
}

.navigation {
  border: 1px solid rgb(77, 76, 76);
}

.hover {
  border: 1px solid white;
}

.mobile-tablet {
  display: none;
}

@media only screen and (max-width:1023px) and (min-width:601px) {

  .main-section {
    background: url("/images/technology/background-technology-tablet.jpg");
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
  }
  .mobile-tablet {
    display: block;
  }
  .desktop {
    display: none;
  }

  .mobile-links {
    display: flex;
  }

  .mobile-links-parent {
    align-items: center !important;
  }

  .mobile-texts {
    text-align: center;
  }

  .mobile-text-1 {
    font-size: 40px;
  }

  .mobile-text-2 {
    font-size: 24px;
  }

  p{ 
    line-height: 2;
  }
}

@media only screen and (max-width:600px) {

  .main-section {
    background: url("/images/technology/background-technology-mobile.jpg");
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: cover;
    background-attachment: fixed;
  }

  .mobile-links {
    display: flex;
  }

  .mobile-links-parent {
    align-items: center !important;
  }

  .mobile-texts {
    text-align: center;
  }

  .mobile-text-1 {
    font-size: 24px;
  }

  .mobile-text-2 {
    font-size: 16px;
  }

  .desktop {
    display: none;
  }

  .mobile-tablet {
    display: block;
  }
}</style>