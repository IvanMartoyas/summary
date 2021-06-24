<template>
  <div class="about">
    <div class="App__row">
      <div class="App__collum">
        <div class="title">Основная информация</div>
        <table class="about__table">
          <tr>
            <td class="about__Ttitle">Возраст:</td>
            <td>21 год</td>
          </tr>
          <tr>
            <td class="about__Ttitle">Год рождения:</td>
            <td>27 июля 1999</td>
          </tr>
          <tr>
            <td class="about__Ttitle">Опыт программирования:</td>
            <td>3 года</td>
          </tr>
        </table>
      </div>
      <div class="App__collum">
        <div class="title">Обо мне</div>
        <p>
          Я по своей специальности разрабатываю сайты, поэтому хорошо умею работать с админкой сайта. 
          Могу наполнять сайт на 1с БУС, wordpress. Умею хорошо работать с фотошоп и другими офисными программами.
        </p>
      </div>
      <div class="App__collum">
        <div class="title">Ключевые навыки</div>
        <p>
          Подтвердите навыки, отправив ссылку на резюме своим коллегам и деловым партнерам. 
          Для этого резюме должно быть видно всему интернету. 
        </p>
      </div>
    </div> 
    
    <div class="App__row">
      <div class="App__collum">
        <div class="title">Знание языков</div>
        <table class="about__table">
          <tr>
            <td class="about__Ttitle">Русский</td>
            <td>- Родной</td>
          </tr>
          <tr>
            <td class="about__Ttitle">Англиский</td>
            <td>- middle</td>
          </tr>
        </table>
      </div>
      <div class="App__collum">
        <div class="title">Тип занятости</div>
        <p>частичная занятость, полная занятость</p>
      </div>
    </div>
  </div>
</template>


График работы: полный день
<script>
import Header from '@/components/header/Header.vue'

export default {
  name: 'I',
  components: {
    Header
  }
}
</script>
<style lang="sass" scoped>
.about
  &__
    &table
      margin: 1rem 0;
      width: 100%;
      font-size: .9rem
    &Ttitle
      color: #757575;
      font-weight: 500;
      padding: .4rem 1.5rem;
      padding-left: 0;
  .App__collum:first-child 
    flex: 2   

@media (max-width: 1450px)
  .App__content
    margin: 0 -.5rem;
@media (max-width: 990px)
  .App__row
    flex-wrap: wrap;
  .about 
    .App__collum:first-child 
      flex: 100%;
@media (max-width: 540px)
  .about 
    .App__collum 
      flex: 100%;
</style>
