<template>
<div class="guildMessage">
     <el-form-item label="机构名称" prop="company">
       <span class="red mr10">*</span>
            <el-input v-model="ruleForm.company" maxlength="20"></el-input>
          </el-form-item>
          <el-form-item label="入驻平台" prop="platform">
            <span class="red mr10">*</span>
            <el-select v-model="ruleForm.platform" placeholder="请选择">
              <el-option label="抖音" value="0"></el-option>
              <el-option label="西瓜" value="1"></el-option>
              <el-option label="火山" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="经营能力" prop="ability">
            <el-checkbox-group v-model="ruleForm.ability">
              <el-checkbox label="主播培训" name="type"></el-checkbox>
              <el-checkbox label="线下场地" name="type"></el-checkbox>
              <el-checkbox label="短视频拍摄" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="机构介绍" prop="profile">
            <el-input type="textarea" v-model="ruleForm.profile" maxlength="200"></el-input>
      </el-form-item>
</div>
</template>
<script>
export default {
  name: "guildMessage",
  props: ['ruleForm'],
  components: {
    
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scope>

</style>