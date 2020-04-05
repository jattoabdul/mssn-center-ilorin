<template>
  <div class="page media">
    <header class="pb-0 lg:pb-10">
      <nav-bar />
      <div
        class="flex flex-col justify-center items-center text-center text-white py-20"
      >
        <h1 class="text-6xl font-semibold">Our Media</h1>
        <p class="flex items-center text-xl my-5">
          <nuxt-link to="/" tag="span" class="cursor-pointer">Home</nuxt-link>
          <span class="mx-2">/</span>
          <span>Media</span>
        </p>
      </div>
    </header>
    <section
      class="wrapper mx-auto gallery"
    >
      Gallery Contents (Images/Videos/Audios)
    </section>
    <stats />
    <foo-ter />
  </div>
</template>

<script>
import NavBar from '~/components/partials/nav'
import FooTer from '~/components/partials/footer'
import Stats from '~/components/partials/stats'

export default {
  components: {
    NavBar,
    FooTer,
    Stats
  }
}
</script>

<style lang="scss" scoped>
.media {
  header {
    @apply pt-5 relative bg-orange-900;
    background-image: url('/images/bg.webp');
    background-size: cover;
    // background-color: rgba(255, 255, 255, 0.1);
    // background-blend-mode: lighten;
  }

  .wrapper {
    max-width: 80rem;
  }

  section {
    @apply py-32;

    @media (max-width: 768px) {
      @apply py-20;
    }

    .heading {
      @apply text-5xl font-bold mb-5 text-orange-900;

      @media (max-width: 768px) {
        @apply text-3xl;
      }
    }
  }

  section.gallery {
  }

  .main-showcase {
    @apply mx-auto;
    width: 80rem;
  }
}
</style>
