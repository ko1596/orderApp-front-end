<template>
  <!-- start of pagination -->
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !paginationFromProducts.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="triggerGetProducts(paginationFromProducts.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in paginationFromProducts.total_pages"
        :key="page"
        :class="{ active: paginationFromProducts.current_page === page }"
      >
        <a class="page-link" href="#" @click.prevent="triggerGetProducts(page)">
          {{ page }}
        </a>
      </li>
      <li class="page-item" :class="{ disabled: !paginationFromProducts.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="triggerGetProducts(paginationFromProducts.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
  <!-- end of pagination -->
</template>
<script>
export default {
  props: ['paginationFromProducts'],
  methods: {
    triggerGetProducts (data) {
      this.$emit('trigger', data)
    }
  }
}
</script>