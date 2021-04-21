<template>
  <div class="popup pop-seller pop-search-zip" :style="{ display: openFlag ? 'block' : 'none' }">
    <div class="popup-body">
      <div class="popup-header">
        <h1 class="popup-title">우편번호 검색</h1>
      </div>
      <div role="main" class="popup-content">
        <p class="txt-form-info">찾으시는 도로명 주소나 지번 주소를 입력 후 검색 버튼을 눌러주세요.</p>
        <div class="form-group">
          <span class="c-input">
            <!-- [D] 검색어 입력시 btn-delete 호출 -->
            <input type="text" placeholder="도로명 또는 지번 주소를 입력해주세요." title="주소 입력" class="input" />
            <button class="btn-delete"><span class="ico-delete">입력 내용 삭제</span></button>
          </span>
          <button type="button" class="btn-extra">검색</button>
        </div>
        <!-- [D] 우편번호 검색 결과 있음 -->
        <div class="area-result">
          <span class="g-invisible">검색된 우편번호 목록</span>
          <ul class="list-address">
            <li>
              <a href="#none" class="item-address" :class="selected ? 'active' : ''" @click.prevent="selectAddress">
                <span class="zipcode">우편번호 <em>06120</em></span>
                <span class="street-address">서울특별시 중구 을지로 177(을지로4가, 일신빌딩)</span>
                <span class="lot-num-address">서울특별시 중구 을지로4가 71-2</span>
              </a>
            </li>
            <li>
              <a href="#none" class="item-address">
                <span class="zipcode">우편번호 <em>06120</em></span>
                <span class="street-address">서울특별시 중구 을지로 177(을지로4가, 일신빌딩)</span>
                <span class="lot-num-address">서울특별시 중구 을지로4가 71-2</span>
              </a>
            </li>
          </ul>
          <!-- [D] 검색 결과 10개 이상 시 '더보기' 버튼 노출 -->
          <div class="btn-area">
            <button type="button" class="btn-default btn-fix">10개 더보기</button>
          </div>
        </div>
        <!-- [D] 우편번호 검색 결과 없음 -->
        <div class="area-result">
          <p class="txt-info"><em>일치하는 주소가 없습니다.</em>주소를 정확히 확인 후 다시 입력해주세요.</p>
        </div>
      </div>
      <div class="popup-footer">
        <div class="btn-area">
          <button type="button" class="btn-primary" :disabled="!addressSelectedFlag" @click.prevent="closePopup">
            확인
          </button>
        </div>
      </div>
      <button type="button" class="btn-close" @click.prevent="confirmAddress">
        <span class="ico-close">팝업 닫기</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openFlag: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      selected: false,
      addressSelectedFlag: false
    };
  },
  methods: {
    /**
     * 팝업을 감춘다.
     * @function
     */
    closePopup() {
      try {
        this.$emit('closePopup');
      } catch (e) {
        console.log(e);
      }
    },

    /**
     * 현재 선택된 주소를 입력한다.
     * @function
     */
    confirmAddress() {
      try {
        this.$emit('closePopup');
      } catch (e) {
        console.log(e);
      }
    },

    selectAddress() {
      this.selected = !this.selected;
      this.addressSelectedFlag = this.selected;
    }
  }
};
</script>

<style lang="scss" scoped>
.pop-search-zip .item-address.active {
  background: #fff;
}
.popup.pop-seller .popup-footer .btn-area .btn-primary:disabled {
  background: #aaa;
}
</style>
