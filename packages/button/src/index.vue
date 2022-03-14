
<template>
    <div>
        <button class="meow-button" :class="['meow-button-size-' + size]" @click="handleClick">
            <slot></slot>
        </button>
    </div>
</template>
<script>
    export default {
        name: 'Mbutton',
        props: {
            size:{
                type: String,
                default: 'middle'
            }
        },
        methods: {
            handleClick () {
                this.$emit('click')
            }
        }
    }
</script>
<style scoped>
    .meow-button {
    display: inline-block;
    line-height: 1;
    cursor: pointer;
    background: #fff;
    border: 1px solid #ddd;
    color: #000;
    text-align: center;
    outline: none;
    font-size: 14px;
    border-radius: 4px;
  }
​
  /* button big 的样式 */
  .meow-button.meow-button-size-big {
    padding: 12px 20px;
  }
​
  /* button mid 的样式 */
  .meow-button.meow-button-size-middle {
    padding: 10px 20px;
  }
​
  /* button small 的样式 */
  .meow-button.meow-button-size-small {
    padding: 10px 10px;
  }
</style>