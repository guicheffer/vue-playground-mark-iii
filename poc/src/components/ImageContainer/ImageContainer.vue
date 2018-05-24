<template>
  <figure>
    <img :class="extraClass" :src="parsedUrl" :alt="alt">
  </figure>
</template>

<script>
import generateImage from './generate-image'

export default {
  props: ['url', 'size', 'cropped', 'extraClass', 'alt'],

  computed: {
    parsedUrl () {
      const isCropped = this.cropped ? 'crop' : 'fit-in'
      const size = this.size || '260x160'
      const url = this.url

      return generateImage({ isCropped, size, url })
    },
  },
}
</script>
