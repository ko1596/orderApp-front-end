<template>
    <div>
        123654654564
    </div>
</template>

<script>

export default {
    data() {
        return {
            products: [],
        };
    },
    methods: {
        getProducts() {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products`;
            // const vm = this;
            this.$http.get(api).then((response) => {
                console.log(response.data);

            });
        },
    },
    created() {
        this.getProducts();
    },
}
</script>
