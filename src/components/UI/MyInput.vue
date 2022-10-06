<template>
    <input type="text" class="input" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
    name: 'MyInput',
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value);
        },
    },
};
</script>

<style scoped>
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-bottom: 15px;
}
</style>
