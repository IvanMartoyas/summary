<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="title">© 2021 Мартояс Иван Сергеевич</div>
      <p>Все данные были обнослены на 17.06.2021г. </p>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',

}
</script>


<style lang="sass">
.footer
    box-sizing: border-box;
    background: #0a1331
    color: #fff;
    width: 100%;
    padding: .5rem 0
    flex: 0 0 auto;
    &__
      &inner
        max-width: 1450px;
        margin: 0 auto;
    h1
        font-weight: 300;
        letter-spacing: 1px;
        font-size: 1.3rem;
    p
        font-size: .8rem

@media (max-width: 1450px)
  .footer
    padding: .5rem 1.5rem
</style>