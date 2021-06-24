<template>
  <div class="App">
    <div class="App__message" v-if="Message != ''">{{Message}}</div>
    <div class="App__wrapper">    
      <Header></Header>
      <main class="App__content">
        <router-view></router-view>
      </main>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    Message() {
      return this.$store.getters.Message 
    }
  }
}
</script>


<style lang="sass">
html, body, #app
  height: 100%;

body
  font-family: 'Open Sans', 'Roboto', sans-serif
  font-size: 1rem;
  font-weight: 400;
  margin: 0
  padding: 0
.App
  display: flex;
  flex-direction: column;
  min-height: 100%;
  &__
    &message
      position: fixed;
      z-index: 9999
      width: 100%
      top: 0
      left: 0
      font-size: .8rem
      padding: .7rem 1.5rem
      background: #0a1331
      color: #fff
    &wrapper
      flex: 1 0 auto;
      width: 100%;
      max-width: 1450px;
      margin: 0 auto;
    &row
      display: flex
      padding: 1rem 0
    &collum
      flex: 1
      padding: .5rem;
      box-sizing: border-box;
    &item
      padding: 1.5rem 0
    &block
      padding: 1rem 0 
main
  padding: 2rem 0
h1,h2,h3,h4,h5,h6
  font-family: 'Roboto', 'Open Sans', sans-serif
h1
  font-weight: 800
h2
  font-weight: 700
h3
  font-weight: 600

.title
  font-family: 'Roboto', 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.4;
p  
  font: .9rem Open Sans;
  font-weight: 300;
@media (max-width: 1450px)
  main
    padding: 2rem 1.5rem
</style>
