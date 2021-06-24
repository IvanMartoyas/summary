<template>
    <div >
        <div class="title">The Simon Game</div>    
        <p>Разработан в 2020 году в целях демонстрации возможностей функционала приложения на vue js.</p>
        <br>
        <div class="App__row"><Simon></Simon></div>           
    </div>
</template>
<script>
import Simon from '@/components/portfolio/Simon.vue'

export default {
  name: 'Portfolio',
  components: {
    Simon
  },
  computed: {
    Message() {
      return this.$store.getters.Message 
    }
  }
}
</script>