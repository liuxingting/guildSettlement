<template>
  <div class="guildStepBar">
    <el-steps :active="active" align-center>
      <el-step title="公会信息"></el-step>
      <el-step title="营业执照"></el-step>
      <el-step title="负责人信息"></el-step>
    </el-steps>

  <hr class="hrColor mt20 mb20"/>
  <div class="mt10">
    <!-- :rules="$rules.common" -->
    <el-form ref="ruleForm"  :model="ruleForm" label-width="80px">
      
      <!-- 公会信息 -->
        <div class="info" v-if="active==1">
          <guildMessage :ruleForm="ruleForm"></guildMessage>
        </div>

        <!-- 营业执照 -->
        <div class="info" v-if="active==2">
          <businessLicense :ruleForm="ruleForm"></businessLicense>
        </div>
        
        <!-- 负责人信息 -->
        <div class="info" v-if="active==3">
          <responsiblePersonMessage :ruleForm="ruleForm"></responsiblePersonMessage>
        </div>

        <!-- 底部按钮 -->
        <div class="footer center">
          <el-button style="margin-top: 12px;" type="primary" @click="next" v-if="active<3">下一步</el-button>  
          <el-button style="margin-top: 12px;" type="primary" @click="commitHandle" v-if="active==3">提交</el-button> 
          <el-button style="margin-top: 12px;" @click="pre" v-if="active>1">上一步</el-button> 
        </div>

    </el-form> 
    </div>

  </div>
</template>
<script>
import Coi from "@/utils/js-coi";
import guildMessage from "./guildMessage/Index";
import businessLicense from "./businessLicense/Index";
import responsiblePersonMessage from "./responsiblePersonMessage/Index";
export default {
  name: "guildStepBar",
  data() {
    return {
      active: 1,
      ruleForm: {
        company: '',
        platform: '',
        ability:[],
        profile: '',
        photo: '',
        cardNumber: '',
        name: '',
        id: '',
        areaCode:'',
        phone:''
      }
    };
  },
  components: {
    guildMessage,
    businessLicense,
    responsiblePersonMessage
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    next() {
      console.log('---校验---', this.$rules)
      const validCoi = new Coi()
      if (this.active == 1) {
         validCoi
        .data(this.ruleForm.company)
        .isRequired('机构名称不能为空')      
        
        .data(this.ruleForm.platform)
        .isRequired('入驻平台不能为空')
        
      }
      if (this.active == 2) {
        validCoi
        
         .data(this.ruleForm.photo)
          .isRequired('请上传营业执照')
        
        .data(this.ruleForm.cardNumber)
        .isRequired('证件号不能为空')
        .minLength(15, '证件号不能少于15位')
        .maxLength(18, '证件号不能多于18位')
      }
     
      if (!validCoi.pass) {
          this.$message.error(validCoi.errorMessage)
          return
      }else{
        if (this.active++ > 3) this.active = 1;
      }
    },
    pre() {
      if (this.active-- < 2) this.active = 1;
    },
    commitHandle() {
      const validCoi = new Coi();
       validCoi
        .data(this.ruleForm.name)
        .isRequired('姓名不能为空')
        .maxLength(18, '姓名不能多于10位')
        
          .data(this.ruleForm.id)
        .isRequired('身份证号不能为空')

        .data(this.ruleForm.areaCode)
          .isRequired('手机号区号不能为空')
        
         .data(this.ruleForm.phone)
         .isRequired('手机号不能为空')
        .isPhone('请输入正确格式的手机号') 

         if (!validCoi.pass) {
            this.$message.error(validCoi.errorMessage)
            return
         } else {
          console.log('--this.ruleForm--',this.ruleForm)
          this.$message({
              message: '提交成功！',
              type: 'success'
          });
        }
       
    },
  
  }
};
</script>
<style>

</style>