<template>
  <div class="main-section">
    <Navbar />
    <v-container fluid class="my-16 pa-0">
      <h5 class="ml-16"><span class="numbers ml-16">03</span>&nbsp;&nbsp;SPACE LAUNCH 101</h5>
      <v-row v-if="selectedTechnology">
        <v-col cols="2" class="d-flex flex-column justify-center align-end">
          <div>
            <div v-for="(item, index) in technology" :key="index">
              <div v-if="activeStep == index" @click="setActiveStep(index)"
                class="py-4 px-8 rounded-circle my-5 mr-10 bg-white text-black d-flex align-center justify-center" style="border: 1px solid white; cursor: pointer;">
                <h4>{{ index + 1 }}</h4>
              </div>
              <div v-else @click="setActiveStep(index)"
                class="py-4 px-8 rounded-circle my-5 mr-10 d-flex align-center justify-center navigation" style="cursor: pointer;"
                :class="{hover: hoverState && hoverStep == index}" @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave()" >
                <h4>{{ index + 1 }}</h4>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="5" class="d-flex flex-column justify-center">
          <h5>THE TERMINOLOGY...</h5>
          <h3 class="mt-1 mb-10">{{ selectedTechnology.name.toLocaleUpperCase() }}</h3>
          <p class="mr-16">{{ selectedTechnology.description }}</p>
        </v-col>
        <v-col cols="5">
          <v-img :src="selectedTechnology.images.portrait"></v-img>
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
</style>