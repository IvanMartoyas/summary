<template>

    <div class="worck"> 
      <h2><div class="title">Образование</div></h2>

      <Table
        :name="'Название организации'"
        :description="'Название специальности'"
        :dataStart="'Дата начала учёбы'"
        :dataEnd="'Дата окончания учёбы'"
        :dataTable="dataEducation"
      ></Table>

      <FormTable v-on:formAddData="formAddData" :kindData="'education_data'" ></FormTable>

    </div>
</template>

<script>
import FormTable from '@/components/form/FormAddData.vue'
import Table from '@/components/table/tableWorckEdication.vue'

export default {
  name: 'Education',
  components: {
    FormTable,
    Table
  },
  data() {
    return {
      dataEducation: [],
    }
  },
  computed:{
    education() {
      return this.$store.getters.educationData
    }
  },
  mounted() {
    if(this.education != '') {
      this.dataEducation = this.education;
    }
  },
  methods: {
    formAddData(val) {
      this.dataEducation = val
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
