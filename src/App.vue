<template>
    <navbar></navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
    components: {
        Navbar,
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Gill Sans", sans-serif;
}
.app {
    padding: 20px;
}
h1 {
    margin-bottom: 10px;
}
</style>
