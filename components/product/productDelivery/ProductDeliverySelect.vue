<template>
  <div class="opt-group">
    <h2 class="opt-group-tit">배송 가능 방법</h2>
    <div class="opt-group-con opt-delivery">
      <select-methods
        :instant-delivery-available-flag="instantDeliveryAvailableFlag"
        :happy-delivery-available-flag="happyDeliveryAvailableFlag"
        @selectMethod="selectMethod"
      />
      <p v-if="instantDeliveryAvailableFlag || happyDeliveryAvailableFlag" class="opt-group-notice">
        <a href="#none" @click.prevent="openPopup">바로도착/행복배송에 대해 알아보세요.</a>
      </p>

      <!-- 사용자 주소 정보 -->
      <user-address
        :selected-method="selectedMethod"
        :delivery-method-selected-flag="deliveryMethodSelectedFlag"
        :user-info-exist-flag="userInfoExistFlag"
        @openPopupZipcode="openPopupZipcode"
      />
      <!-- // 사용자 주소 정보 -->

      <!-- 매장 주소 정보 -->
      <store-address :selected-method="selectedMethod" :delivery-method-selected-flag="deliveryMethodSelectedFlag" />
      <!-- //매장 주소 정보 -->
    </div>
  </div>
</template>

<script>
import SelectMethods from '~/components/product/productDelivery/SelectMethods';
import UserAddress from '~/components/product/productDelivery/UserAddress';
import StoreAddress from '~/components/product/productDelivery/StoreAddress';

export default {
  components: {
    SelectMethods,
    UserAddress,
    StoreAddress
  },
  data() {
    return {
      // 바로배송 flag
      instantDeliveryAvailableFlag: true,

      // 행복배송 flag
      happyDeliveryAvailableFlag: true,

      // 선택된 배송방법
      selectedMethod: '',

      // 유저 정보
      userAddressInfo: {
        cellPhone: '010-1234-5678',
        zipCode: '12345',
        address1: '서울시 중구 을지로(을지로 1가)',
        address2: '페럼타워 14층'
      },

      // 배송방법 선택 flag
      deliveryMethodSelectedFlag: true,

      // 기존 유저정보 flag
      userInfoExistFlag: true
    };
  },
  watch: {
    /**
     * 선택된 배송방법이
     * 바로픽업 -> 매장 주소 입력정보
     * 그 외 -> 사용자 주소 입력정보
     * @function
     */
    selectedMethod() {
      if (this.selectedMethod !== '') {
        if (this.selectedMethod === 'DP') {
          // 바로픽업
          this.deliveryMethodSelectedFlag = false;
        } else {
          // 그외
          this.deliveryMethodSelectedFlag = true;
        }
      }
    }
  },
  mounted() {
    // this.userInfo = null;
    this.setBasicFlags();
  },
  methods: {
    /**
     * 기존 유저 정보가 있음/없음에 따라 flag 설정
     * @function
     */
    setBasicFlags() {
      if (this.userInfo !== null) {
        this.userInfoExistFlag = true;
      } else {
        this.userInfoExistFlag = false;
        this.userFormConfirmedFlag = false;
      }
    },

    /**
     * 바로도착/행복배송 팝업을 보여준다.
     * @function
     */
    openPopup() {
      try {
        this.$emit('openPopupDelivery');
      } catch (e) {
        console.log(e);
      }
    },

    /**
     * 바로도착/행복배송 팝업을 보여준다.
     * @function
     * @param {string} name - 선택된 배송방법
     */
    selectMethod(name) {
      this.selectedMethod = name;
    },

    /**
     * 주소 검색 팝업을 보인다.
     * @function
     */
    openPopupZipcode() {
      this.$emit('openPopupZipcode');
    }
  }
};
</script>

<style lang="scss" scoped></style>
