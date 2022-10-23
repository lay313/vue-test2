<template>
  <div>
    <el-form>
      <el-form-item
        ><span>名称</span>
        <el-input placeholder="name" />
      </el-form-item>
      <el-form-item
        ><span>密码</span>
        <el-input placeholder="password" type="password" show-password />
      </el-form-item>
      <el-form-item
        ><span>确认密码</span>
        <el-input placeholder="password" type="password" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">注册</el-button>
        <el-button >取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
</style>