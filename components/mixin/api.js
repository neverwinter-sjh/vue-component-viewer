const mixin = {
  mounted() {
    console.log('api mixin');
  },
  methods: {
    /**
     * 상품 정보
     * @function
     * @param {string} id - 상품 id
     * @return {object}
     */
    apiGetProductInfo() {
      return this.$axios.get('/mountains');
    }
  }
};

export default mixin;
