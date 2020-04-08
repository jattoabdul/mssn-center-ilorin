<template>
  <nav>
    <nuxt-link
      class="brand-logo"
      to="/"
      title="Muslim Students' Society of Nigeria Centre Ilorin"
    >MSSNCI</nuxt-link>
    <div class="hidden lg:flex items-center">
      <nuxt-link class="link" to="/">Home</nuxt-link>
      <nuxt-link class="link" to="/about">About</nuxt-link>
      <nuxt-link class="link" to="/services">Services</nuxt-link>
      <nuxt-link class="link" to="/projects">Projects</nuxt-link>
      <nuxt-link class="link" to="/blog">Blog</nuxt-link>
      <nuxt-link class="link" to="/media" title="Gallery">Media</nuxt-link>
      <nuxt-link class="link" to="/contact">Contact</nuxt-link>
      <a
        v-ripple
        class="button focus:outline-none"
        href="https://paystack.com/pay/mssnci"
        target="_blank"
      >Donate now</a>
    </div>
    <div class="menu-box flex lg:hidden">
      <img
        v-if="!menuOpen"
        src="/vectors/menu.svg"
        alt="menu"
        class="toggle"
        @click="menuOpen = true"
      />
      <img
        v-else
        src="/vectors/close-round.svg"
        alt="menu"
        class="toggle"
        @click="menuOpen = false"
      />
      <div v-if="menuOpen" class="menu">
        <nuxt-link v-ripple class="link" to="/">Home</nuxt-link>
        <nuxt-link v-ripple class="link" to="/about">About</nuxt-link>
        <nuxt-link v-ripple class="link" to="/services">Services</nuxt-link>
        <nuxt-link v-ripple class="link" to="/projects">Projects</nuxt-link>
        <nuxt-link v-ripple class="link" to="/blog">Blog</nuxt-link>
        <nuxt-link v-ripple class="link" to="/media">Media</nuxt-link>
        <nuxt-link v-ripple class="link" to="/contact">Contact</nuxt-link>
        <a v-ripple class="link" href="https://paystack.com/pay/mssnci" target="_blank">Donate now</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    menuOpen: false
  })
};
</script>

<style lang="scss" scoped>
nav {
  @apply flex items-center justify-between w-screen h-16 px-16 text-white;

  .brand-logo {
    @apply font-semibold text-2xl;
  }

  .link {
    @apply px-2 py-1 mx-1 font-medium text-white;
  }

  button,
  .button {
    @apply py-2 px-6 bg-green-700 text-white ml-2 rounded-full shadow font-medium text-xl;
  }

  .menu-box {
    @apply cursor-pointer relative;

    .toggle {
      @apply h-8;
    }

    .menu {
      @apply absolute top-0 right-0 flex flex-col bg-white text-xl rounded shadow;
      margin-top: 120%;

      .link {
        @apply py-2 px-5 text-gray-800;

        &:not(:last-child) {
          @apply border-b border-gray-300;
        }
      }
    }
  }
}
</style>
