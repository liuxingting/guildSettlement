<template>
<div class="businessLicense">
      <el-form-item label="营业执照" prop="photo">
        <span class="red mr10">*</span>
          <el-upload
            class="avatar-uploader"
            :action="AjaxUrl"
            :headers="myHeaders"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="ruleForm.photo" :src="ruleForm.photo" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
      </el-form-item>
      <el-form-item label="证件号" prop="cardNumber">
        <span class="red mr10">*</span>
        <el-input type="text" v-model="ruleForm.cardNumber" autocomplete="off"></el-input>
      </el-form-item>
</div>
</template>
<script>
export default {
  name: "businessLicense",
  props: ['ruleForm'],
  components: {
    
  },
  data() {
    return {
       AjaxUrl: "http://www.youxia.com/yxcard/admin.php?s=/Activity/edit_activity",
       myHeaders: {},
    }
  },
  methods: {
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
     handleAvatarSuccess(res, file) {
        this.ruleForm.photo = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
    }
  }
}
</script>
<style>

</style>
