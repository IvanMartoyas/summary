<template>
    <div v-if="menuSetup" class="formTable"> 
      <div  class="formTable__AddItem App__block">
        <div class="title">Добавить новую работу</div>
        <input type="text" v-model="nameCompany" placeholder="Название компании">
        <textarea type="text"  v-model="descriptionWorck" placeholder="Описание вашей деятельности..."></textarea>
        <div class="formTable__AddItemt">
          <input type="date" v-model="dataStart" placeholder="Начало работы">
          <input type="date" v-model="dataEnd" placeholder="Окончание работы">
        </div>
        <div class="menuSetup__buttonCont">
          <button type="submit" :disabled="isNButtonEmpty" :class="{buttonDisable: isNButtonEmpty}" @click.prevent="addItem()">Добавить</button>
          <button type="submit" class="menuSetup__buttonSave" :disabled="isNButtonEmpty" :class="{buttonDisable: isNButtonEmpty}" @click.prevent="saveDataForm()">Сохранить</button>
        </div>
      </div>
    </div>
</template>   

<script>
export default {
    name: 'FormAddData',
    components: {
    },
    props: ['kindData'],
    data() {
        return {
            nameCompany: '',
            descriptionWorck: '',
            dataStart: '',
            dataEnd: '',
            dataWorks: [],
            kindD: ''
        }
    },
    computed:{
        isNButtonEmpty() {
            if(this.nameCompany != '' && this.descriptionWorck != '' && this.dataStart != '' && this.dataEnd != '') {
                return false
            } else {
                return true
            }
        },
        menuSetup() {
            return this.$store.getters.editData
        }
    },
    mounted() {
     this.kindD = this.kindData
    },
    methods: {
        addItem() {
            if(this.nameCompany != '' && this.descriptionWorck != '' && this.dataStart != '' && this.dataEnd != '') {

                this.dataWorks.push({
                    nameCompany: this.nameCompany,
                    descriptionWorck: this.descriptionWorck,
                    dataStart: this.dataStart,
                    dataEnd: this.dataEnd
                })

                this.$emit('formAddData', this.dataWorks )

                // this.nameCompany = 0
                // this.descriptionWorck = 0
                // this.dataStart = 0
                // this.dataEnd = 0
            }
        },
        saveDataForm() {
          if(this.dataWorks !='') {
            try {
              this.$store.dispatch('saveDataForm', {kind: this.kindD, data: this.dataWorks})
              this.$store.dispatch('Message', 'Данные сохраненты');
            }
            catch (e) {
                this.$store.dispatch('Message', 'Ошибка: ', e);
            }
          } else {
            this.$store.dispatch('Message', 'Укажите данные');
          }
        }
    }
}
</script>
<style lang="sass">
.formTable
  padding: 0 1.5rem;
  &__
    &AddItem
      max-width: 35rem;
      margin: 0 auto;
      input
        padding: .8rem 1.7rem;
        border-radius: .8rem;
        border: 0;
        box-shadow: 0 0 13px 0px #eaeaeab0;
        margin-right: 1.5rem;
        font-size: 1rem;
        margin: .7rem 0;
        width: 100%;
        box-sizing: border-box;
      button
        background: #000ad2;
        padding: .8rem 1.7rem;
        border-radius: .3rem;
        border: 0;
        color: #fff;
        cursor: pointer;
        transition: .5s
        display: block
        &:active
          background: #00078e
          box-shadow: 0 0 13px 0px #4248ca;
        &:hover
          background: #01077b
      textarea
        box-sizing: border-box;
        width: 100%;
        padding: .8rem 1.7rem;
        border-radius: .8rem;
        border: 0;
        height: 8rem;
        box-shadow: 0 0 13px 0px #eaeaeab0;
        font-size: 1rem;
    &AddItemt
      display: flex
      justify-content: space-between;
      input
        width: 49%;
.buttonDisable
  background: #adb1fd!important
.menuSetup
  &__
    &buttonCont
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      button
        margin-top: 1rem;
    &buttonSave
      transition: .7s
      background: #00d210!important
      &:active
        background: #00a20c!important
        box-shadow: 0 0 13px 0px #4248ca;
      &:hover
        background: #00a20c!important
        

@media (max-width: 1450px)
  .formTable
    padding: 0 .5rem;
@media (max-width: 540px)
  .formTable__AddItemt
    flex-wrap: wrap;
  .formTable__AddItemt 
    input 
      width: 100%;
</style>