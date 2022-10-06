<template>
    <div>
        <form @submit.prevent>
            <h4 style="margin-bottom: 10px">Создание поста</h4>
            <MyInput placeholder="Заголовок поста" v-model="post.title" v-focus />
            <MyInput placeholder="Описание" v-model="post.body" />
            <MyButton @click="addPost" style="align-self: flex-end"
                >Добавить пост</MyButton
            >
        </form>
    </div>
</template>

<script>
import { handleError } from 'vue';

export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            },
        };
    },
    methods: {
        addPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                body: '',
            };
        },
    },
    watch: {
        post: {
            // для отслеживания изменения в массиве пишется такая конструкция
            handler(newValue){
                console.log(newValue);
            },
            // глубокое отслеживание
            deep: true
        },
    },
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>
