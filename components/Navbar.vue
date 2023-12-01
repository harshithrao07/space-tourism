<template>
    <nav class="mt-10">
        <v-row class="my-5 pa-0">
            <v-col class="d-flex align-center justify-space-between pa-0">
                <img src="/images/navbar/logo.svg" class="ml-16" />
                <div class="w-50">
                    <v-divider thickness="2"></v-divider>
                </div>
            </v-col>
            <v-col class="ml-auto d-flex align-center nav-blur pa-0">
                <div v-for="(item, index) in navItems" :key="index" class="py-6 mx-10">
                    <NuxtLink :to="item.to" class="links pb-6" :class="{ hover: hoverState && index == hoverStep }"
                        @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave()">
                        <span class="nav-text">
                            {{ item.id }}&nbsp;&nbsp;{{ item.name }}
                        </span>
                    </NuxtLink>
                </div>
            </v-col>
        </v-row>
    </nav>
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

.router-link-active {
    border-bottom: 3px solid white !important;
}

.hover {
    border-bottom: 3px solid #D0D6F9;
}
</style>