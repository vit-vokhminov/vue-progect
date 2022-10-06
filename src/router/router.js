import Main from '@/pages/Main';
import { createRouter, createWebHistory } from 'vue-router';
import About from '@/pages/About';
import PostPages from '@/pages/PostPages';
import PostPagesPagination from '@/pages/PostPagesPagination';
import PostPagesDirective from '@/pages/PostPagesDirective';
import PostIdPage from '@/pages/PostIdPage';
import PostPageStore from '@/pages/PostPageStore';
import PostPageCompositionApi from '@/pages/PostPageCompositionApi';

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/posts',
        component: PostPages,
    },
    {
        path: '/posts-pagination',
        component: PostPagesPagination,
    },
    {
        path: '/posts-directive',
        component: PostPagesDirective,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/posts/:id',
        component: PostIdPage,
    },
    {
        path: '/store',
        component: PostPageStore,
    },
    {
        path: '/composition',
        component: PostPageCompositionApi,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;
