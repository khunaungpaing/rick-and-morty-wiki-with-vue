<script setup lang="ts">
import { computed } from 'vue'
import { useCharactersStore } from '@/stores/charactersStore'
import { storeToRefs } from 'pinia'

const store = useCharactersStore()
const { pageNumber, paginationInfo } = storeToRefs(store)

// Compute the current page number
const currentPage = computed((): number => {
  let current: string | null = paginationInfo.value?.next as string | null
  if (current && current.length > 0) {
    return getPageNumber(current)
  }
  current = paginationInfo.value?.prev as string | null
  if (current && current.length > 0) {
    return getPageNumber(current)
  }
  return 1
})
// Compute the total number of pages
const totalPages = computed((): number[] => {
  const total = paginationInfo.value.pages || 1
  let start = currentPage.value - 2
  let end = currentPage.value + 2

  if (start < 1) {
    start = 1
    end = 5
  }

  if (end > total) {
    end = total
    start = total - 4 > 0 ? total - 4 : 1
  }
  console.log(start, end, currentPage.value)
  return Array.from({ length: total }, (_, i) => i + 1).slice(start - 1, end)
})

const getPageNumber = (link: string): number => {
  const match = link.match(/page=(\d+)/)
  return match ? parseInt(match[1], 10) - 1 : 1
}

const goToPage = (page: number) => {
  pageNumber.value = page
  store.fetchUrl(null)
}

const goToNextPage = () => {
  if (!paginationInfo.value.next) return
  pageNumber.value = getPageNumber(paginationInfo.value.next)
  store.fetchUrl(null)
}

const goToPreviousPage = () => {
  if (!paginationInfo.value.prev) return
  pageNumber.value = getPageNumber(paginationInfo.value.prev)
  store.fetchUrl(null)
}
</script>

<template>
  {{ currentPage }}
  <!--pagination-->
  <div v-if="paginationInfo != null && paginationInfo != null" class="container">
    <ul class="pagination">
      <li>
        <button @click.prevent="goToPage(1)" :class="{ disabled: !paginationInfo.prev }">
          Start
        </button>
      </li>
      <li>
        <button @click.prevent="goToPreviousPage" :class="{ disabled: !paginationInfo.prev }">
          Prev
        </button>
      </li>
      <li v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
        <a href="#" @click.prevent="goToPage(page)">{{ page }}</a>
      </li>
      <li>
        <button @click.prevent="goToNextPage" :class="{ disabled: !paginationInfo?.next }">
          Next
        </button>
      </li>
      <li>
        <button
          @click.prevent="goToPage(paginationInfo?.pages)"
          :class="{ disabled: !paginationInfo?.next }"
        >
          End
        </button>
      </li>
    </ul>
  </div>
  <!--pagination-->
</template>
<style scoped>
/*pagination*/
.container {
  margin-block: 1em;
}

.container .pagination {
  position: relative;
  height: 60px;
  background: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
}
.container .pagination li {
  list-style-type: none;
  display: inline-block;
}
.container .pagination li a,
.container .pagination li button {
  position: relative;
  padding: 20px 25px;
  text-decoration: none;
  color: var(--color-heading);
  font-weight: 500;
  border: 1px solid var(--color-background-mute);
  background: transparent;
  cursor: pointer;
}
.container .pagination li a:hover,
.container .pagination li.active a,
.container .pagination li button:hover,
.container .pagination li.active button {
  background: var(--color-background-mute);
}
.container .pagination li a.disabled,
.container .pagination li button.disabled {
  pointer-events: none;
  color: var(--color-disabled);
}
</style>
