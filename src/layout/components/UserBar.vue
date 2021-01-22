<template>
  <div class="user flex flex-between flex-mid">
    <div class="flex flex-mid">
      <img class="icon" src="@/assets/user/userHead.png">
      <span>{{ userInfo.unitName }} {{ userInfo.personName }}，欢迎您！</span>
    </div>
    <div class="flex flex-mid">
      <div class="modi-pwd flex flex-mid">
        <img class="icon" src="@/assets/user/key_modi.png">
        <span>修改密码</span>
      </div>
      <div class="logout flex flex-mid" @click="logout">
        <img class="icon" src="@/assets/user/logout.png">
        <span>退 出</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserBar',
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  height: 38px;
  border: solid 1px #d0d0d0;
  background-color: #f0f0f0;
  font-size: 12px;
  padding: 0 10px;
  .icon {
    width: 15px;
    height: 15px;
    margin: 0 6px
  }
  .modi-pwd, .logout {
    cursor: pointer;
    border: solid 1px #f0f0f0;
    padding: 5px 3px;
    &:hover {
      border: solid 1px #9e9e9e;
    }
  }
}
</style>
