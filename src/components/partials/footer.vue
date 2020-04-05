<template>
  <footer>
    <div
      class="wrapper mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
    >
      <div class="group">
        <p class="title">Menu</p>
        <ul>
          <nuxt-link to="/about" tag="li">About</nuxt-link>
          <nuxt-link to="/services" tag="li">Services</nuxt-link>
          <nuxt-link to="/projects" tag="li">Projects</nuxt-link>
          <nuxt-link to="/blog" tag="li">Blog</nuxt-link>
          <nuxt-link to="/media" tag="li" title="Gallery">Media</nuxt-link>
          <nuxt-link to="/contact" tag="li">Contact</nuxt-link>
          <li>
            <a
              class="focus:outline-none"
              href="https://paystack.com/pay/mssnci"
              target="_blank"
              >Donate</a
            >
          </li>
        </ul>
      </div>
      <div class="group">
        <p class="title">Services</p>
        <ul>
          <nuxt-link to="/services" tag="li">Daily/Jum'ah Prayer</nuxt-link>
          <nuxt-link to="/services" tag="li">Funeral Services</nuxt-link>
          <nuxt-link to="/services" tag="li">Counselling</nuxt-link>
          <nuxt-link to="/services" tag="li">Madrasah</nuxt-link>
          <nuxt-link to="/services" tag="li">Lodging/Hall Rentals</nuxt-link>
          <nuxt-link to="/services" tag="li">Zakah/Sadaqah</nuxt-link>
          <nuxt-link to="/services" tag="li">IVC</nuxt-link>
        </ul>
      </div>
      <div class="group">
        <p class="title">Contact</p>
        <ul>
          <li>
            <a
              class="focus:outline-none"
              href="tel:+234 803 397 9970"
              target="_blank"
              >+234 803 397 9970</a
            >
          </li>
          <li>mssncenterilorin@gmail.com</li>
          <li>
            Airport Road, <br />
            along Ilorin-Ogbomoso express way
          </li>
          <li>Adjacent Ilorin International <br />Aviation College, Ilorin</li>
          <li>Kwara State, NG</li>
        </ul>
      </div>
      <div class="group">
        <p class="title">Socials</p>
        <ul>
          <li>
            <a
              class="focus:outline-none"
              href="https://facebook.com/mssnci"
              target="_blank"
              >Facebook</a
            >
          </li>
          <li>
            <a
              class="focus:outline-none"
              href="https://instagram.com/mssnci"
              target="_blank"
              >Instagram</a
            >
          </li>
          <li>
            <a
              class="focus:outline-none"
              href="https://twitter.com/mssnci"
              target="_blank"
              >Twitter</a
            >
          </li>
          <li>
            <a
              class="focus:outline-none"
              href="https://pinterest.com/mssnci"
              target="_blank"
              >Pinterest</a
            >
          </li>
          <li>
            <a
              class="focus:outline-none"
              href="https://linkedin.com/in/mssnci"
              target="_blank"
              >LinkedIn</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      Copyright &copy; {{ new Date().getFullYear() }} by MSSN Center, Ilorin.
      Powered by Codevillage LLC
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-image: url('/images/footer-bg.webp');
  background-color: black;
  background-size: cover;
  @apply pt-20 text-white;

  .group {
    @apply text-center;

    & > .title {
      @apply uppercase text-2xl font-semibold text-center py-5;
    }

    li {
      @apply text-gray-100 cursor-pointer py-1 font-medium;

      &:hover {
        @apply text-orange-500;
      }
    }
  }

  .copyright {
    @apply text-center text-gray-200 mt-20 h-24 border-t flex justify-center items-center;
    border-color: #f7fafc38;
  }
}
</style>
