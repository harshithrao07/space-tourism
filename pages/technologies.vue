<template>
  <div class="main-section">
    <Navbar />
    <v-container fluid class="mb-16 mt-10 mt-md-16 pa-2 pa-md-0 mobile-texts">
      <h5 class="ml-md-16 mb-10 mb-md-0"><span class="numbers ml-md-16">03</span>&nbsp;&nbsp;SPACE LAUNCH 101</h5>
      <v-row v-if="selectedTechnology">
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
    </v-container>
  </div>
</template>

<script setup>
let technology = [
  {
    "name": "Launch vehicle",
    "images": {
      "portrait": "./images/technology/image-launch-vehicle-portrait.jpg",
      "landscape": "./images/technology/image-launch-vehicle-landscape.jpg"
    },
    "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  {
    "name": "Spaceport",
    "images": {
      "portrait": "./images/technology/image-spaceport-portrait.jpg",
      "landscape": "./images/technology/image-spaceport-landscape.jpg"
    },
    "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  {
    "name": "Space capsule",
    "images": {
      "portrait": "./images/technology/image-space-capsule-portrait.jpg",
      "landscape": "./images/technology/image-space-capsule-landscape.jpg"
    },
    "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
]

let selectedTechnology = ref({
  "name": "Launch vehicle",
  "images": {
    "portrait": "./images/technology/image-launch-vehicle-portrait.jpg",
    "landscape": "./images/technology/image-launch-vehicle-landscape.jpg"
  },
  "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
})

let activeStep = ref(0)

let setActiveStep = (stepNumber) => {
  activeStep.value = stepNumber
  selectedTechnology.value = technology[stepNumber]
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