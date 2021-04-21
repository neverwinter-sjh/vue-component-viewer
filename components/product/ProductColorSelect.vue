<template>
  <div class="opt-group">
    <h2 class="opt-group-tit">색상 선택</h2>
    <div class="opt-group-con opt-color">
      <div class="product-color">
        <div class="color-chips">
          <span class="c-ick-var">
            <input id="_colorChip1" type="radio" name="_colorChip" />
            <label for="_colorChip1" class="text" style="background-color: #a67c52">브라운</label>
          </span>
          <span class="c-ick-var">
            <input id="_colorChip2" type="radio" name="_colorChip" />
            <label for="_colorChip2" class="text" style="background-color: #0f0f44">딥블루</label>
          </span>
          <span class="c-ick-var">
            <input id="_colorChip3" type="radio" name="_colorChip" />
            <label for="_colorChip3" class="text" style="background-color: #8e0c25">버건디레드</label>
          </span>
          <span class="c-ick-var">
            <input id="_colorChip4" type="radio" name="_colorChip" checked="checked" />
            <label for="_colorChip4" class="text" style="background-color: #d8d8d8">스페이스 그레이</label>
          </span>
        </div>
        <span class="color-name">실버</span>
      </div>
      <p class="opt-group-notice"><a href="#none" @click.prevent="openPop">가장 인기 있는 색상을 알아보세요.</a></p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openPop() {}
  }
};
</script>
