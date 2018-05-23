<template>
  <div>
    <h1>{{listing.title}}</h1>
    <ul>
      <li v-for="item in recommendations" :key="item.listing.listing.id"><router-link :to="item.listing.url.link.href">{{ item.listing.listing.title }}</router-link></li>
    </ul>
  </div>
</template>


<script src="./listing.js"></script>
