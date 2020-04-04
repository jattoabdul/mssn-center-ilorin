<template>
  <div class="page about">
    <header class="pb-0 lg:pb-10">
      <nav-bar />
      <div
        class="flex flex-col justify-center items-center text-center text-white py-20"
      >
        <h1 class="text-6xl font-semibold">Our Blog</h1>
        <p class="flex items-center text-xl my-5">
          <nuxt-link to="/" tag="span" class="cursor-pointer">Home</nuxt-link>
          <span class="mx-2">/</span>
          <span>All Posts</span>
        </p>
      </div>
    </header>
    <main class="wrapper my-24 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div class="posts lg:col-span-2">
        <div class="post mb-20">
          <div class="post-pic relative">
            <img
              src="/images/fine_mosque-min.jpg"
              class="w-full h-full object-cover rounded"
              alt="preview"
            />
          </div>
          <h1
            class="text-4xl my-3 text-orange-900 font-semibold uppercase cursor-pointer"
          >
            Gender Equality and Justice in Islam
          </h1>
          <p class="flex items-center flex-wrap mb-5">
            <span
              class="mr-1 cursor-pointer text-orange-900 font-medium hover:text-green-800"
              >Islamic Identity,</span
            >
            <span
              class="mr-2 cursor-pointer text-orange-900 font-medium hover:text-green-800"
              >Knowledge</span
            >
            <span class="mr-2 text-gray-700">July 11, 2017</span>
            <span class="text-gray-700">2 Comments</span>
          </p>
          <p v-for="i in 5" :key="i" class="mb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ducimus porro iusto dolores consectetur asperiores quia enim tenetur
            quas reprehenderit neque sequi quisquam, expedita temporibus ut sint
            eum eos est!. Leo, tellus vitae, erat ligula. Aliquet ac, elementum
            enim suscipit porttitor molestie commodo, feugiat magnis. Quam dui
            quis quam morbi potenti sodales, dapibus litora integer diam urna,
            sapien eu, a sagittis ligula est urna nunc, eos nibh mus aliquam
            massa mi iaculis. Massa id in faucibus nibh, convallis amet, enim…
          </p>
          <p class="mt-12">
            <span class="text-orange-900 font-medium">Tags:</span>
            <span class="mr-1 text-orange-500 font-medium">islam,</span>
            <span class="mr-1 text-orange-500 font-medium">justice</span>
          </p>
          <!-- <div class="share">
            <a href="#">
              <img src="/vectors/facebook.svg" alt="facebook" />
            </a>
          </div> -->

          <div class="post-author flex my-10">
            <img
              src="/images/nasir.jpg"
              class="h-40 rounded mr-5"
              alt="nasir"
            />
            <div>
              <p class="text-2xl font-semibold mb-1 text-orange-900">
                About Nasir Adam Esq.
              </p>
              <p>
                Vel dolor sem mauris sed, vel lectus tempor elementum mauris,
                vulputate non donec suscipit neque mi est. Cras hendrerit,
                maecenas tincidunt tortor nulla iaculis vel nibh, et vel felis
                lectus tincidunt et mattis, amet neque. Feugiat turpis.
              </p>
              <p class="my-3 text-orange-600">View all posts by Nasir Adam</p>
            </div>
          </div>
        </div>
      </div>
      <aside
        class="sticky top-0 max-h-screen overflow-y-auto bg-orange-200 rounded"
      >
        <div class="categories py-10 px-5 border-b border-orange-300">
          <h2 class="text-2xl font-semibold mb-6 uppercase">Categories</h2>
          <ul>
            <li class="font-medium text-gray-800 mb-2">Family Life</li>
            <li class="font-medium text-gray-800 mb-2">Islamic Identity</li>
            <li class="font-medium text-gray-800 mb-2">Knowledge</li>
            <li class="font-medium text-gray-800 mb-2">Marriage Advice</li>
            <li class="font-medium text-gray-800 mb-2">Soul Purification</li>
            <li class="font-medium text-gray-800 mb-2">
              Special Months & Times
            </li>
          </ul>
        </div>
        <div class="recent py-10 px-5">
          <h2 class="text-2xl font-semibold mb-6 uppercase">Recent posts</h2>
          <div v-for="i in 2" :key="`recent-post-${i}`" class="post flex mb-10">
            <img
              src="/images/small_mosque.jpg"
              class="w-20 object-contain mr-4"
              alt="mosque"
            />
            <p>
              <span class="text-xl font-semibold"
                >Gender Equality and Justice in Islam</span
              >
              <span class="text-orange-900 block">July 11, 2019</span>
            </p>
          </div>
        </div>
      </aside>
    </main>
    <foo-ter />
  </div>
</template>

<script>
import NavBar from '~/components/partials/nav'
import FooTer from '~/components/partials/footer'

export default {
  components: {
    NavBar,
    FooTer
  }
}
</script>

<style lang="scss" scoped>
.about {
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

  .post {
    &:hover .overlay {
      display: flex;
    }
  }

  main {
  }

  aside {
    top: 1rem;
    max-height: calc(100vh - 2rem);
  }
}
</style>
