<template>
  <div class="home">
    <Forms />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Forms from '@/components/Forms.vue';

export default {
  name: 'HomeView', 
  components: {
    Forms
  }
}
</script>
