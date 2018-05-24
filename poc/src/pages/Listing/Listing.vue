<template>
  <div>
    <image-container
      size="800x300"
      cropped="true"
      v-bind:url="listing.images[0]"
      :alt="listing.title"
      :title="listing.title"
    />

    <h1> {{ listing.title }} </h1>

    <ul>
      <li v-for="item in recommendations" :key="item.listing.listing.id">
        <p> <router-link :to="item.listing.url.link.href">{{ item.listing.listing.title }}</router-link> </p>
      </li>
    </ul>
  </div>
</template>

<script src="./listing.js"></script>
