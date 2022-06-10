<template>
<div class="responsiblePersonMessage">
      <el-form-item label="姓名" prop="name">
        <span class="red mr10">*</span>
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="身份证" prop="id">
        <span class="red mr10">*</span>
        <el-input type="text" v-model="ruleForm.id" autocomplete="off" maxlength="11"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="phone">
        <span class="red mr10">*</span>
        <el-input type="text" class="w100" v-model="ruleForm.areaCode" autocomplete="off"></el-input>——
        <el-input type="text" v-model="ruleForm.phone" autocomplete="off"></el-input>
      </el-form-item>
</div>
</template>
<script>
export default {
  name: "responsiblePersonMessage",
  props: ['ruleForm'],
  components: {
    
  },
  data() {
    return {}
  },
  methods: {}
}
</script>