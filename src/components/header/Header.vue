<template>
  <header class="header">
    <div class="header__content">
      <div class="header__img">
        <img :src="require('@/assets/img/islands-300.jpg')" alt="#" />
      </div>
      <div class="header__info">
        <h1>
          Мартояс Иван <br />
          Сергеевич
        </h1>
        <h2>Vue js разрабодчик.</h2>
        <div class="header__social">
          <a
            target="blanck"
            href="https://github.com/IvanMartoyas?tab=repositories"
            ><img :src="require('@/assets/img/github.svg')" alt="Git Hub"
          /></a>
          <a target="blanck" href="https://www.instagram.com/ivan_martoas/"
            ><img :src="require('@/assets/img/instagram .svg')" alt="instagram"
          /></a>
          <a target="blanck" href="https://vk.com/ivan_martoyas"
            ><img :src="require('@/assets/img/vk.svg')" alt="vk"
          /></a>
        </div>
      </div>
      <div class="header__setup">
        <div
          :class="[{ 'header__setup_menu--active': menuButton }, 'header__setup_menu--nactive']"
        >
          <span @click="editData" >Редактирвать</span>
        </div>
        <img
            :src="require('@/assets/img/menu.svg')"
            class="header__buttonm"
            @click="editButton"
            alt="menu"
            v-if="!menuButton"
        />
        <img
            :src="require('@/assets/img/cancel.svg')"
            class="header__buttonc"
            alt="close menu"
            v-if="menuButton"
            @click="editButton"
        />
      </div>
    </div>
    <nav class="header__menu">
      <router-link to="/">Обо мне</router-link>
      <router-link to="/Education">Образование</router-link>
      <router-link to="/Works">Опыт работы</router-link>
      <router-link to="/Portfolio">Портфолио</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
        menuSetup: false,
        menuButton: false
    };
  },
  methods: {
    editButton() {
      this.menuButton = !this.menuButton;
    },
    editData() {
        this.$store.dispatch('editData');
    }
  },
  mounted() {
    this.menuSetup = this.$store.getters.editData;
  },
};
</script>
<style lang="sass">
nav
    border-bottom: 1px solid #f1efef
    a
        text-decoration: none
        font-size: 1rem
        font-family: 'Roboto'
        font-weight: 300
        color: #030104
        padding: 1rem 2rem
        display: inline-block
        transition: .5s
    a:hover
        background: #000ad2
        color: #fff
.header
    &__
        &content
            display: flex
            position: relative
            // background: #fbfbfb
        &img
            width: 25rem
            img
                overflow: hidden
                height: 100%
        &info
            padding: 2rem 2rem
            width: 100%
            padding-bottom: 0
            h1
                font-size: 3.5rem
                font-weight: 400
                margin: 0
                margin-bottom: 2.5rem
            h2
                font-weight: 300
                color: #909090fa
                font-size: 1.2rem
                font-family: 'Roboto'
                text-transform: uppercase
                border-bottom: 1px solid #f1efef
                padding-bottom: .3rem
        &setup
            position: absolute
            top: 2rem
            right: 2rem
            span
                cursor: pointer
            &_menu--nactive
                position: absolute
                right: .51rem
                top: 0
                background: #000ad2
                padding: .55rem 2rem
                z-index: 1
                padding-right: 3rem
                border-radius: 2rem
                color: #fff
                transition: 1.5s
                padding-left: 0
                padding-right: 0
                width: 0
                overflow: hidden;
            &_menu--active
                padding: .55rem 2rem;
                padding-right: 3rem;
                width: max-content;
        &buttonm
            box-shadow: 0 0 6px 0px #bdbdbd42;
            position: relative
            padding: .6rem
            cursor: pointer
            height: 1.3rem
            border-radius: 50%
            transition: .7s
            z-index: 3
            &:hover
                background: #e8e8e8;
        &buttonc
            box-shadow: 0 0 6px 0px #bdbdbd42;
            position: relative;
            cursor: pointer;
            height: 2.5rem;
            border-radius: 50%;
            transition: .7s;
            z-index: 3;
            background: #fff;
        &menu
        &social
            display: flex
            justify-content: space-between
            height: 2rem
            width: max-content
            img
                height: 100%
                margin: 0 .5rem

@media (max-width: 1200px)
    .header__info
        // padding: 1.5rem 2rem;
    h1
        margin: 0
@media (max-width: 764px)
    .header__info
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 20rem
        background: #ffffffa6
        text-align: center
        padding: 2rem
        box-sizing: border-box
    .header__img
        width: 100%
        height: 20rem
        overflow: hidden

    .header__img
        img
            height: 20rem
            width: 100%
            object-fit: cover
            object-position: center
    .header__info h2
        border: 0
        font-size: 1.1rem
    .header__info  h1
        margin-top: 2rem
    .header__social
        margin: 0 auto
        margin-top: 1rem
        height: 1.5rem
@media (max-width: 540px)
    .header__info
        padding: 1rem
        height: 18rem
    .header__img
        height: 18rem
    .header__info h1
        font-size: 2.5rem
</style>