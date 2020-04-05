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
      <!-- Post List -->
      <div class="posts lg:col-span-2">
        <!-- Data not loaded yet -->
        <div  v-if="!posts" class="post loading mb-20">
          <p>loading...</p>
        </div>

        <!-- If there are no posts... -->
        <div  v-if="!posts.length" class="post loading mb-20">
          <p>No posts yet! Check Back Later 🙏🏾</p>
        </div>
  
        <!-- If there are some... -->
        <div v-else v-for="post in posts" :key="`blog-post-${post.id}`" class="post mb-20">
          <nuxt-link to="/blog/details" tag="div" class="post-pic relative">
            <img
              v-if="post.image"
              :src="post.image.publicUrl"
              class="w-full h-full object-cover rounded"
              alt="preview"
            />
            <p
              class="overlay z-20 h-full absolute top-0 left-0 w-full justify-center items-center bold text-black cursor-pointer hidden text-5xl tracking-widest bg-orange-500 opacity-50 rounded"
            >
              ...
            </p>
          </nuxt-link>
          <nuxt-link
            to="/blog/details"
            tag="h1"
            class="text-4xl my-3 text-orange-900 font-semibold uppercase cursor-pointer"
          >
            {{ post.title }}
          </nuxt-link>
          <p class="flex items-center flex-wrap mb-5">
            <span
              v-for="(cat, index) in post.categories"
              :key="cat.id"
              class="mr-1 cursor-pointer text-orange-900 font-medium hover:text-green-800"
              >{{ cat.name }}{{ index+1 >= post.categories.length ? ' | ' : ',' }}</span
            >
            <span class="mr-2 text-gray-700">{{ formatDate(post.posted, 'MMMM dd, yyyy') }} |</span>
            <span class="text-gray-700">{{ post.author && post.author.name }}</span>
            <!-- <span class="text-gray-700">2 Comments</span> -->
          </p>
          <div class="mb-6" v-html="post.headline" />
          <nuxt-link
            :to="`/blog/${post.slug}`"
            tag="button"
            class="bg-orange-500 text-white px-10 py-3 rounded focus:outline-none hover:bg-green-600"
            >Read more</nuxt-link
          >
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

/** 
  GraphQL Queries & Mutations
*/
const GET_POSTS = `
  query GetPosts {
    allPosts {
      title
      id
      headline
      posted
      slug
      image {
        publicUrl
      }
      categories {
        id
        name
      }
      author {
        name
      }
    }
  }
`;

/** 
  Helpers
*/
function graphql(query, variables = {}) {
  return fetch(`${process.env.AppHostUrl}/admin/api`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      variables,
      query,
    }),
  }).then(function(result) {
    return result.json();
  });
}

export default {
  head: {
    title: 'Blog - MSSN Center Ilorin',
  },
  components: {
    NavBar,
    FooTer
  },
  // Get the post items on server side
  async asyncData() {
    const { data } = await graphql(GET_POSTS);
    return {
      posts: data.allPosts,
    };
  },
  methods: {
    async getPosts() {
      const { data } = await graphql(GET_POSTS);
      this.posts = data.allPosts;
    },
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
