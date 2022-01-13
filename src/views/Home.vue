<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()

const name = computed(()=>{
  return store.getters.get_name
})

const new_name = ref('')

const change_name = () => {
  store.dispatch('save_name',new_name.value)
  new_name.value=''
  router.push('/about')
}

 
</script>

<template>
  <img class="mx-auto" alt="Vue logo" src="../assets/logo.png" />
  <input type="text" class="rounded-lg w-96" v-model="new_name" placeholder="new name ..." @keyup.enter="change_name"/>
  <HelloWorld :msg="'Sig '+name" />
</template>
