<template>
    <div class="desktop">
        <nav class="mt-0 mt-md-10">
            <v-row class="my-0 my-md-5 pa-0">
                <v-col class="d-flex align-center justify-space-between pa-0 pl-8 pl-md-0 ml-md-16">
                    <NuxtLink to="/"><img src="/images/navbar/logo.svg" /></NuxtLink>
                    <div class="w-50 desktop tablet-nav-numbers">
                        <v-divider thickness="2"></v-divider>
                    </div>
                </v-col>
                <v-col class="pa-0">
                    <div class="nav-blur d-flex align-center pl-3 pl-md-0">
                        <div v-for="(item, index) in navItems" :key="index" class="py-6 mx-3 mx-md-5 mx-lg-10 linkParent desktop">
                            <NuxtLink :to="item.to" class="links pb-6" :class="{ hover: hoverState && index == hoverStep }"
                                @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave()">
                                <span class="nav-text">
                                    <span class="tablet-nav-numbers d-none d-lg-inline">{{ item.id }}&nbsp;&nbsp;</span>{{ item.name }}
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="d-flex">
                        <v-icon large @click="toggle()" class="mobile" size="50">mdi-menu</v-icon>
                    </div>
                </v-col>
            </v-row>
        </nav>
    </div>
    <div class="mobile">
        <nav class="mt-7" style="width: 100vw;">
            <div class="d-flex justify-space-between align-center">
                <NuxtLink to="/"><img src="/images/navbar/logo.svg" class="ml-4" /></NuxtLink>
                <v-icon large @click="toggle()" class="mobile mr-4 mb-2" size="40">mdi-menu</v-icon>
            </div>
        </nav>
    </div>
    
    <v-navigation-drawer app temporary v-model="drawer" class="nav-blur" location="right">
        <v-container>
            <v-img src="/images/navbar/icon-close.svg" width="12%" class="ml-auto" @click.stop="toggle()"></v-img>
            <v-list-item v-for="(item, index) in navItems" :key="index" class="mt-10">
                <NuxtLink :to="item.to" class="links">
                    <span class="nav-text">
                        <span style="font-weight: bold;">{{ item.id }}</span>&nbsp;&nbsp;{{ item.name }}
                    </span>
                </NuxtLink>
            </v-list-item>
        </v-container>
    </v-navigation-drawer>
</template>

<script setup>
let navItems = ref([
    {
        id: '00',
        name: 'HOME',
        to: '/'
    },
    {
        id: '01',
        name: 'DESTINATION',
        to: '/destinations'
    },
    {
        id: '02',
        name: 'CREW',
        to: '/crew'
    },
    {
        id: '03',
        name: 'TECHNOLOGY',
        to: '/technologies'
    }
])

let hoverStep = ref(null)
let hoverState = ref(false)

let handleMouseOver = (index) => {
    hoverStep.value = index
    hoverState.value = true
}

let handleMouseLeave = () => {
    hoverState.value = false
}

let drawer = ref(false)
let toggle = () => {
    drawer.value = !drawer.value
}
</script>


<style scoped>
.links {
    text-decoration: none;
    color: white;
}

.nav-blur {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(20px);
}

.linkParent .router-link-active {
    border-bottom: 3px solid white !important;
}

.hover {
    border-bottom: 3px solid #D0D6F9;
}

.mobile {
    display: none;
}

@media only screen and (max-width:1023px) and (min-width:601px){
    .tablet-nav-numbers {
        display: none;
    }
}

@media only screen and (max-width:600px) {
    .desktop {
        display: none;
    }

    .mobile {
        display: inline-block;
    }
}
</style>