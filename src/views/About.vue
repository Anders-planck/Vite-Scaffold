<script setup>
import { useStore } from 'vuex'
import { computed} from 'vue';

const store = useStore()


const name = computed(()=>{
  return store.getters.get_name
})

</script>

<template>
<div class="space-y-4">
   <h1 class="text-3xl font-black underline">
    {{name}}
  </h1>

  <router-link to="/" class="block"> Back to Home</router-link>
</div>
</template>


