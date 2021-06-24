<template>

    <div class="worck"> 
      <div class="title">Опыт работы</div>

      <Table
        :name="'Название компании'"
        :description="'Род деятельности, обязанностей'"
        :dataStart="'Дата начала работы'"
        :dataEnd="'Дата окончания'"
        :dataTable="dataWorks"
      ></Table>

      <FormTable v-on:formAddData="formAddData" :kindData="'worck_data'" ></FormTable>

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
    }
  },
  computed:{
    work() {
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
      this.dataWorks = val
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