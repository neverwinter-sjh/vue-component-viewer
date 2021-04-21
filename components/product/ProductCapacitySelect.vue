<template>
  <div class="opt-group">
    <h2 class="opt-group-tit">용량 선택</h2>
    <div class="opt-group-con opt-capacity">
      <div class="product-option-row product-capacities">
        <h3 class="g-invisible">용량 선택</h3>
        <span class="c-ick-var">
          <input id="_productCapacity1" type="radio" name="_productCapacity" checked="checked" />
          <label for="_productCapacity1">
            <span class="text">128G</span>
            <span class="side">₩1,078,000</span>
          </label>
        </span>
        <!-- [D] 품절시 클래스 disabled-semi 추가 -->
        <span class="c-ick-var disabled-semi">
          <input id="_productCapacity2" type="radio" name="_productCapacity" />
          <label for="_productCapacity2">
            <span class="text">256G</span>
            <span class="side">재고없음</span>
          </label>
        </span>
        <span class="c-ick-var">
          <input id="_productCapacity3" type="radio" name="_productCapacity" />
          <label for="_productCapacity3">
            <span class="text">512G</span>
            <span class="side">₩1,287,000</span>
          </label>
        </span>
      </div>
      <p class="opt-group-notice"><a href="#none" @click.prevent="openPopup">가장 인기 있는 용량을 알아보세요.</a></p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openPopup() {}
  }
};
</script>
