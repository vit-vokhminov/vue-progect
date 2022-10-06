<template>
    <h1>Страница с постами</h1>
    <MyInput v-model="searchQuery" placeholder="Поиск..." />
    <div class="app_buttons">
        <MyButton @click="showDialog">Создать пост</MyButton>
        <MySelect v-model="selectedSort" :options="sortOptios" />
    </div>

    <MyDialog v-model:show="dialogVisible">
        <PostForm @create="addPost" />
    </MyDialog>

    <PostList
        :posts="sortAndSearchPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>Идет загрузка...</div>

    <div class="page__wrapper">
        <div
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            class="page"
            :class="{
                'current-page': page === pageNumber,
            }"
            @click="changePage(pageNumber)"
        >
            {{ pageNumber }}
        </div>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import MyDialog from '@/components/UI/MyDialog';
import axios from 'axios';

export default {
    components: {
        PostForm,
        PostList,
        MyDialog,
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: false,
            selectedSort: '',
            searchQuery: '',
            limit: 10,
            page: 1,
            totalPages: 0,
            sortOptios: [
                { value: 'id', name: 'По порядку' },
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По описанию' },
            ],
        };
    },
    methods: {
        addPost(value) {
            this.posts.push(value);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(elem => elem.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
        async fetchPosts() {
            try {
                this.isPostLoading = true;
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts',
                    {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        },
                    }
                );
                this.totalPages = Math.ceil(
                    response.headers['x-total-count'] / this.limit
                );
                this.posts = response.data;
            } catch (e) {
                alert('Ошибка!!!');
            } finally {
                this.isPostLoading = false;
            }
        },
        changePage(pageNumber) {
            this.page = pageNumber;
        },
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) =>
                String(post1[this.selectedSort])?.localeCompare(
                    String(post2[this.selectedSort]),
                    undefined,
                    { numeric: true }
                )
            );
        },
        sortAndSearchPosts() {
            return this.sortedPosts.filter(post =>
                post.title
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
            );
        },
    },
    watch: {
        // если изменится значение selectedSort мы мутируем объект posts
        // лучше использовать computed - sortedPosts это по сути мемоизация и передача нового массива
        // selectedSort(newValue) {
        //     this.posts.sort((post1, post2) =>
        //         String(post1[newValue])?.localeCompare(
        //             String(post2[newValue]),
        //             undefined,
        //             { numeric: true }
        //         )
        //     );
        // },
        page() {
            this.fetchPosts();
        },
    },
};
</script>

<style>
.app_buttons {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
.page__wrapper {
    display: flex;
    margin-top: 15px;
}
.page {
    border: 1px solid black;
    padding: 10px;
    cursor: pointer;
}
.page:hover {
    background: #ccc;
}
.current-page {
    border: 2px solid teal;
    background: teal;
}
</style>
