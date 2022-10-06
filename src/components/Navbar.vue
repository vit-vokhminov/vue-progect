<template>
    <div class="navbar">
        <router-link class="logo" to="/">Vue 3</router-link>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')"
                >Посты подгрузка</my-button
            >
            <my-button
                style="margin-left: 20px"
                @click="$router.push('/posts-pagination')"
                >Посты пагинация</my-button
            >
            <my-button
                style="margin-left: 20px"
                @click="$router.push('/posts-directive')"
                >Посты директива</my-button
            >
            <my-button style="margin-left: 20px" @click="$router.push('/about')"
                >О сайте</my-button
            >
            <my-button style="margin-left: 20px" @click="$router.push('/store')"
                >store</my-button
            >
            <my-button
                style="margin-left: 20px"
                @click="$router.push('/composition')"
                >Composition</my-button
            >
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
    cursor: pointer;
}
.navbar {
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar__btns {
    margin-left: auto;
}
</style>
