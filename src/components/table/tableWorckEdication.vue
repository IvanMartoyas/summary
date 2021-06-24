<template>
    <div class="tableWE"> 
      <div class="tableWE__table App__block">
        <div class="tableWE__tableHed">
          <div class="tableWE__nameCompany">{{name}}</div>
          <div class="tableWE__descriptionWorck">{{description}}</div>
          <div class="tableWE__dataStart">{{dataStart}}</div>
          <div class="tableWE__dataEnd">{{dataEnd}}</div>
        </div>
        <div 
          class="tableWE__tablei"
          v-for="(i,key) in dataTable"
          :key="key"
        >
          <div class="tableWE__nameCompany">{{i.nameCompany}}</div>
          <div class="tableWE__descriptionWorck">{{i.descriptionWorck}}</div>
          <div class="tableWE__dataStart">{{i.dataStart}}</div>
          <div class="tableWE__dataEnd">{{i.dataEnd}}</div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'tableWorckEdication',
  components: {
  },
  props: ['name','description','dataStart','dataEnd','dataTable'],
  data() {
    return {
    }
  },

}
</script>
<style lang="sass">
.tableWE
  &__
    &table
      overflow-x: auto;
    &tablei
      min-width: 40rem;
      display: flex;
      flex-wrap: wrap;
      padding: .7rem 0;
      align-items: center;
      
    &nameCompany
      flex: 3;
    
      margin-right: .4rem;
    &descriptionWorck
     
      margin-right: .4rem;
      flex: 4;
      padding-right: .4rem;
    &dataStart
    
      margin-right: .4rem;
      flex: 1;
    &dataEnd
      flex: 1;
    &tableHed
      min-width: 40rem;
      color: #ccc;
      font-size: .8rem;
      display: flex;
      padding-top: .6rem;
      padding-bottom: .2rem;
      flex-wrap: wrap;
.buttonDisable
  background: #adb1fd!important
@media (max-width: 540px)
  .worck__AddItemt
    flex-wrap: wrap;
  .worck__AddItemt 
    input 
      width: 100%;
</style>