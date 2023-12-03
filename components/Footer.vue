<template>
    <v-toolbar class="footer">
        <v-spacer></v-spacer>
        <span class="subheading-2">Made with ❤️ by <NuxtLink target="_blank" to="https://harshithrao.vercel.app/">Harshith Rao</NuxtLink></span>
        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script setup>

</script>

<style scoped>
.footer {
    background: rgba(11, 13, 23, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    position: relative;
    bottom: 0;
}

a {
    text-decoration: none;
    font-weight: bold;
}
</style>