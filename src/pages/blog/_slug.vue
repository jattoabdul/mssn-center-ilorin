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
        <!-- Data not loaded yet  OR If there is no post with this slug... -->
        <div  v-if="!post" class="post loading mb-20">
          <p>Loading or No posts yet with this Slug! Check Back Later 🙏🏾</p>
        </div>

        <!-- If there are some... -->
        <div v-else class="post mb-20">
          <div class="post-pic relative">
            <img
              v-if="post.image"
              :src="post.image.publicUrl"
              class="w-full h-full object-cover rounded"
              alt="preview"
            />
          </div>
          <h1
            class="text-4xl my-3 text-orange-900 font-semibold uppercase cursor-pointer"
          >
            {{ post.title }}
          </h1>
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
          <div class="mb-3" v-html="post.body" />

          <!-- Tags -->
          <p class="mt-12">
            <span class="text-orange-900 font-medium">Tags:</span>
            <span class="mr-1 text-orange-500 font-medium">Islam,</span>
            <span class="mr-1 text-orange-500 font-medium">Students</span>
          </p>

          <!-- <div class="share">
            <a href="#">
              <img src="/vectors/facebook.svg" alt="facebook" />
            </a>
          </div> -->

          <!-- Author -->
          <div class="post-author flex my-10">
            <img
              v-if="post.author && post.author.avatar"
              :src="post.author.avatar.publicUrl"
              class="h-40 rounded mr-5"
              :alt="post.author.name"
            />
            <div>
              <p class="text-2xl font-semibold mb-1 text-orange-900">
                {{ post.author.name }}
              </p>
              <p v-html="post.author.bio" />
              <p class="my-3 text-orange-600">View all posts by {{ post.author.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <aside
        class="sticky top-0 max-h-screen overflow-y-auto bg-orange-200 rounded"
      >
        <div class="categories py-10 px-5 border-b border-orange-300">
          <h2 class="text-2xl font-semibold mb-6 uppercase">Categories</h2>
          <!-- Categories List -->
          <ul>
            <!-- Data not loaded yet -->
            <li v-if="!categories" class="font-medium text-gray-800 mb-2">Loading...</li>

             <!-- If there are no posts... -->
            <li v-if="!categories.length" class="font-medium text-gray-800 mb-2">No categories yet! Check Back Later 🙏🏾</li>

            <!-- If there are some recent posts... -->
            <li v-else v-for="category in categories" :key="`category-${category.id}`" class="font-medium text-gray-800 mb-2">{{ category.name }}</li>
          </ul>
        </div>
        <!-- 5 Most Recent Posts List -->
        <div class="recent py-10 px-5">
          <h2 class="text-2xl font-semibold mb-6 uppercase">Recent posts</h2>
          <!-- Data not loaded yet -->
        <div  v-if="!recentPosts" class="post loading flex mb-10">
          <p>loading...</p>
        </div>

        <!-- If there are no posts... -->
        <div  v-if="!recentPosts.length" class="post flex mb-10">
          <p>No posts yet! Check Back Later 🙏🏾</p>
        </div>

        <!-- If there are some recent posts... -->
        <nuxt-link v-else v-for="recentPost in recentPosts" :key="`recent-post-${recentPost.id}`" :to="`/blog/${recentPost.slug}`" tag="div" class="post flex mb-10">
          <img
            v-if="recentPost.image"
            :src="recentPost.image.publicUrl"
            class="w-20 object-contain mr-4"
            :alt="recentPost.slug"
          />
          <p>
            <span class="text-xl font-semibold"
              >{{ recentPost.title }}</span
            >
            <span class="text-orange-900 block">{{ formatDate(recentPost.posted, 'MMMM dd, yyyy') }}</span>
          </p>
        </nuxt-link>
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
const GET_POST = `
  query GetPost($slug: String!) {
    allPosts(where: { slug: $slug }) {
      title
      id
      body
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
        bio
        avatar {
          publicUrl
        }
      }
    }
  }
`;

const GET_RECENT_POSTS = `
  query GetRecentPosts($orderCondition: String!, $num: Int!) {
    allPosts(orderBy: $orderCondition, first: $num) {
      title
      id
      posted
      slug
      image {
        publicUrl
      }
    }
  }
`;

const GET_CATEGORIES = `
  query GetCategories {
    allPostCategories {
      name
      id
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
  head() {
    return {
      title: `${this.toTitleCase(this.slug.replace(/-/g, ' '))} - Blog - MSS Centre Ilorin`
    }
  },
  components: {
    NavBar,
    FooTer
  },
  // Get the post item matching slug on server side
  async asyncData({ params }) {
    const slug = params.slug
    const { data } = await graphql(GET_POST, { slug });
    const { data: recentData } = await graphql(GET_RECENT_POSTS, { orderCondition: "posted_DESC", num: 5 });
    const { data: categoriesData } = await graphql(GET_CATEGORIES);
    return {
      slug,
      post: data.allPosts[0],
      recentPosts: recentData.allPosts,
      categories: categoriesData.allPostCategories,
    };
  },
  methods: {
    async getPost(slug=this.slug) {
      const { data } = await graphql(GET_POST, { slug });
      this.post = data.allPosts[0];
    },
    async getRecentPosts() {
      const { data } = await graphql(GET_RECENT_POSTS, { orderCondition: "posted_DESC", num: 5 });
      this.recentPosts = data.allPosts;
    },
    async getCategories() {
      const { data } = await graphql(GET_CATEGORIES);
      this.categories = data.allPostCategories;
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
    &:hover {
      cursor: pointer;
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
