<template>
    <div v-if="posts.length">
        <h3>Список пользователей</h3>
        <transition-group name="post-list">
            <PostItem
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove="$emit('remove', post)"
            />
        </transition-group>
    </div>
    <div v-else>
        <h3 style="color: red">Список пользователей пуст</h3>
    </div>
</template>

<script>
import PostItem from '@/components/PostItem';
import MyInput from './UI/MyInput.vue';
export default {
    components: {
    PostItem,
    MyInput
},
    props: {
        posts: {
            type: Array,
            //default: [],
            required: true,
        },
    },
};
</script>

<style scoped>
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.post-list-move {
    transition: transform 0.4s ease;
}
</style>
