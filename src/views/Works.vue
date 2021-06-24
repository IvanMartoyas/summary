<template>

    <div class="worck"> 
      <h2><div class="title">Опыт работы</div></h2>

      <Table
        :name="'Название компании'"
        :description="'Род деятельности, обязанностей'"
        :dataStart="'Дата начала работы'"
        :dataEnd="'Дата окончания'"
        :dataTable="dataWorks"
      ></Table>

      <FormTable v-on:formAddData="formAddData" :kindData="'worck_data'" :saveData="saveData" ></FormTable>

    </div>
</template>

<script>
import FormTable from '@/components/form/FormAddData.vue'
import Table from '@/components/table/tableWorckEdication.vue'

export default {
  name: 'Works',
  components: {
    FormTable,
    Table
  },
  data() {
    return {
      dataWorks: [],
      saveData: []
    }
  },
  computed:{
    work() {
      this.dataWorks = this.$store.getters.workData;
      return this.$store.getters.workData
    }
  },
  mounted() {
    if(this.work != '') {
      this.dataWorks = this.work;
    }
  },
  methods: {
    formAddData(val) {
      this.dataWorks = [...this.dataWorks, ...val]

      this.saveData = [...this.saveData, ...val]
    },
  }
}
</script>
<style lang="sass">
.worck
  padding: 0 1.5rem;
@media (max-width: 1450px)
  .worck
    padding: 0 .5rem;

</style>