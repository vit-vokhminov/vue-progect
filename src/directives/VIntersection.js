export default {
    name: 'intersection',
    mounted(el, binding) {
        const options = {
            rootMargin: '0px',
            threshold: 1.0,
        };
        const callback = (entries, observer) => {
            //TODO значение totalPages не обновляется после первой загрузки постов
            if (
                entries[0].isIntersecting &&
                binding.value.page < binding.value.totalPages
            ) {
                binding.value.loadMorePosts;
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
};
