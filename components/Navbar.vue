<template>
    <nav class="mt-10">
        <v-row>
            <v-col class="d-flex align-center justify-space-between py-3 px-0">
                <NuxtLink to="/" class="ml-16"><img src="/images/navbar/logo.svg" /></NuxtLink>
                <div class="w-50">
                    <v-divider thickness="2"></v-divider>
                </div>
            </v-col>
            <v-col class="ml-auto d-flex align-center nav-blur py-3">
                <span class="nav-text">
                    <NuxtLink v-for="(item, index) in navItems" :key="index" :to="item.to" class="links ml-10 mr-12">
                        {{ item.id }}&nbsp;&nbsp;{{ item.name }}
                    </NuxtLink>
                </span>
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
        to: '/destination'
    },
    {
        id: '02',
        name: 'CREW',
        to: '/crew'
    },
    {
        id: '03',
        name: 'TECHNOLOGY',
        to: '/technology'
    }
])
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
</style>