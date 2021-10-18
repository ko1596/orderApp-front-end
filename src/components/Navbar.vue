<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <i class="far fa-lemon"></i>
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">訂餐APP</a>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signout">登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        signout() {
            const vm =this;
            const url = `${process.env.APIPATH}/logout`;
            this.$http.post(url).then((response) => {
                console.log(response.data);
                if (response.data.success) {
                    vm.$router.push('/signin');
                }
            });
        },
    },
};
</script>
