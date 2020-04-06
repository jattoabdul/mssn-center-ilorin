<template>
  <div class="page home">
    <header class="pb-0 lg:pb-10">
      <nav-bar />
      <div
        class="banner flex lg:flex-row flex-col justify-between lg:pt-32 pt-20"
      >
        <div class="quote px-16 lg:pl-3 lg:pr-32">
          <p class="text">
            وَٱعْتَصِمُواْ بِحَبْلِ ٱللَّهِ جَمِيعًا وَلَا تَفَرَّقُواْ
          </p>
          <p class="sub-text">
            And hold fast to the rope of Allah, all of you together, and do not
            be divided...
          </p>
          <button
            v-ripple
            class="bg-green-600 text-white py-3 text-xl font-semibold shadow mt-5 px-10 rounded block ml-auto focus:outline-none"
            @click="gotoUrl('https://paystack.com/pay/mssnci')"
          >
            Donate now
          </button>
        </div>
        <div class="prayer-time">
          <p class="text-2xl text-center font-semibold">PRAYER TIMES</p>
          <div v-if="fetching">
            <p>Loading...</p>
          </div>
          <div v-else class="solats">
            <p class="location">Prayer times in {{ solatLocation }}</p>
            <p class="heading">
              {{ solatSchedule.date_for }}
            </p>
            <p class="timing">
              <span>Fajr</span>
              <span>{{ solatSchedule.fajr }}</span>
            </p>
            <p class="timing">
              <span>Sunrise</span>
              <span>{{ solatSchedule.shurooq }}</span>
            </p>
            <p class="timing">
              <span>Dhuhr</span>
              <span>{{ solatSchedule.dhuhr }}</span>
            </p>
            <p class="timing">
              <span>Asr</span>
              <span>{{ solatSchedule.asr }}</span>
            </p>
            <p class="timing">
              <span>Maghrib</span>
              <span>{{ solatSchedule.maghrib }}</span>
            </p>
            <p class="timing">
              <span>Isha'a</span>
              <span>{{ solatSchedule.isha }}</span>
            </p>
            <p class="footnote">Powered by MuslimSalat</p>
          </div>
        </div>
      </div>
      <div v-scroll-to="'#welcome'" class="scroll hidden lg:flex">
        <img src="/vectors/double-down-arrow.svg" alt="scroll" />
      </div>
    </header>
    <section id="welcome" class="welcome">
      <h1 class="heading">Welcome to the Muslim Students' Society of Nigeria (MSSN) <br />Kwara State Area Unit (KWAU) <br /> MSS Center, Ilorin</h1>
      <p>
        The MSSN Center Ilorin is a Community Centre for all Muslims. The Center
        is committed to preserving an Islamic identity, building and supporting
        a viable Muslim community, promoting a comprehensive Islamic way of life
        and education, based on the Holy Qur'an and the Sunnah of Prophet
        Muhammad. The center will serve as a viable Islamic institution and
        physical base of operations from which the activities towards the
        realization of the lofty aspirations of the Society can be coordinated
        and implemented.
      </p>
      <nuxt-link v-ripple to="/about" class="focus:outline-none" tag="button"
        >Read More</nuxt-link
      >
    </section>
    <section class="philosophy">
      <h1 class="heading main">Our Philosophy</h1>
      <div
        class="points grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 col-gap-10 row-gap-12"
      >
        <div class="point">
          <img src="/vectors/quran.svg" alt="quran" class="icon h-20" />
          <p class="heading" style="color: rgb(210, 147, 128);">Knowledge</p>
          <p>
            Acknowledging the importance of knowledge in Islam, the Society
            recognises that it is a great favour of Allah that starting
            man&#39;s creation from a most insignificant state He made him
            possessor of knowledge which is the noblest attribute of creation.
            Hence, the society believes that knowledge and wisdom are lost
            treasures for all Muslims which must be retrieved wherever it is
            found.
          </p>
        </div>
        <div class="point">
          <img src="/vectors/crescent.svg" alt="quran" class="icon h-20" />
          <p class="heading" style="color: rgb(49, 59, 90);">Spirituality</p>
          <p>
            In Islam, spirituality is defined as the linking of actions to the
            purpose of life. <br />
            Inevitably we must realise our relationship with Allah سبحانه وتعالى
            when undertaking any action, whether it is spiritual or material,
            thus making sure that our actions are in accordance to the commands
            and prohibitions of Allah سبحانه وتعالى and ultimately attaining His
            pleasure. This is the spiritual understanding and philosophy of the
            Muslim students&#39; Society and by extension the centre.
          </p>
        </div>
        <div class="point">
          <img src="/vectors/mosque.svg" alt="quran" class="icon h-20" />
          <p class="heading" style="color: rgb(104, 139, 150);">Community</p>
          <p>
            The philosophy of Society in this regard is encapsulated in Q.
            Chapter 3 vs. 103 ...which reads thus; وَاعْتَصِمُوا بِحَبْلِ
            اللَّهِ جَمِيعًا وَلَا تَفَرَّقُو <br />Hold fast to the rope of
            Allah, the faith of Islam, and be not divided in groups.<br />
            The expression &#39;rope of Allah&#39;, in this verse, refers to the
            &#39;Islam&#39; which establishes a bond between man and God and
            joins all believers together. To take a firm hold on this rope means
            that the believers should attach profound importance to their
            religion: this should always be the centre of their concerns;
          </p>
        </div>
        <div class="point">
          <img src="/vectors/kaaba.svg" alt="quran" class="icon h-20" />
          <p class="heading" style="color: rgb(55, 55, 55);">Unity</p>
          <p>
            The Society understands that Unity is primal to Islam and so it
            should be to the Muslim - both in his spiritual and mundane
            existence. Unity colours the hue of the belief system constituting
            the onset and the outpost of his faith. The Ummah Prophet Muhammad
            (PBUH) toiled for and established was one single fortified family
            with one leader (himself) and one goal (Allah). This remained the
            character of the ummah until inordinate desire for power, tribalism,
            corruption and jaundiced understanding and interpretation of Islam
            crept in.
          </p>
        </div>
      </div>
    </section>
    <section class="support1">
      <span class="flex-grow" />
      <div class="content flex-grow text-white">
        <h2 class="text-5xl font-semibold text-white uppercase text-center">
          Support us, <br />
          we need your help.
        </h2>
        <p class="mx-auto max-w-3xl text-center text-2xl font-light mt-6">
          Support our Islamic Centre Project. The project is intended as a world
          class Islamic Centre which shall include a Multipurpose Hall/Events
          Centre, Guest Lodge and Residence, School, Educational Facilities and
          a Technical/Skill Acquisition Centre, Library, A Mosque, Shopping
          Complex, Warehouse and Primary Health Care Facility. The project shall
          be executed in tranches and each of these structures shall be
          implemented one after the other.<br />
          Visit the Contact page for Account Details via this link <nuxt-link to="/contact" class="text-green-500 font-bold text-2xl">Here</nuxt-link>.
        </p>
        <div
          class="flex items-center mx-auto max-w-3xl justify-center mb-10 mt-5"
        >
          <p class="text-5xl font-medium">Goal</p>
          <img
            src="/vectors/arrow-right-white.svg"
            alt="->"
            class="h-10 mx-5"
          />
          <p class="text-5xl font-medium">₦750 Million</p>
        </div>
        <button
          v-ripple
          class="bg-green-700 hover:bg-green-600 focus:outline-none text-white rounded py-3 px-12 block mx-auto mt-2 mb-10 text-2xl shadow"
          @click="gotoUrl('https://paystack.com/pay/mssnci')"
        >
          Donate now
        </button>
        <p class="mx-auto max-w-xl text-center">
          May Allah bless you! Thank you. Those who (in charity) spend of their
          goods by night and by day, in secret and in public, have their reward
          with their Lord
        </p>
      </div>
    </section>
    <section class="services">
      <h1 class="heading uppercase -mt-12 pb-16">Our Services</h1>
      <div
        class="mx-auto wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 col-gap-10 row-gap-12"
      >
        <div class="service">
          <img src="/vectors/law.svg" alt="advice" class="icon h-20" />
          <p class="title" style="color: #965352;">
            Counselling
          </p>
          <p>
            The society believes that giving sincere advice is one of the
            prominent characteristics of Islamic brotherhood; it is part of
            perfect faith and ihsaan, for a Muslim’s faith cannot be perfect
            until he loves for his brother what he loves for himself, and until
            he hates for his brother what he hates for himself. This forms the
            motive for giving sincere advice.
          </p>
        </div>
        <div class="service">
          <img src="/vectors/parliament.svg" alt="advice" class="icon h-20" />
          <p class="title" style="color: rgb(24, 54, 81)">
            Lodging/Hall Rentals
          </p>
          <p>
            The hall and lodging facilities shall be operated on a commercial or
            profit basis and in accordance with Islamic principles. It shall
            also serve as venues for the missionary activities of the Society
            and shall host delegates and officials of the Society during these
            programmes. Furthermore, it shall be operated in such a way as to
            empower Muslim brothers and sisters through the generation of
            employments.
          </p>
        </div>
        <div class="service">
          <img src="/vectors/invest.svg" alt="advice" class="icon h-20" />
          <p class="title" style="color: rgb(38, 40, 44);">
            Zakat/Sadaqah
          </p>
          <p>
            The Society and the centre is offering Zakah Administration services
            through a specially constituted committee of experts. Members of the
            public are free to contact the Centre for any advice or request
            regarding the calculation and disbursements of their Zakah
          </p>
        </div>
        <div class="service">
          <img src="/vectors/camp.svg" alt="advice" class="icon h-20" />
          <p class="title" style="color: rgb(109, 29, 64);">
            Camping/<span title="Islamic Vacation Course">IVC</span>
          </p>
          <p>
            The IVC/Camping is Bi-annual Islamic Vacation Course held during the
            Easter and Christmas holidays corresponding to March/April and
            December respectively. It is a forum where students are enlightened
            on various topical issues of Islamic interest, exposed to the global
            views of Islamic polity and given practical training on application
            of Islamic principles and other benefits like the social interaction
            and re- enforcement of academic excellence through group efforts.
          </p>
        </div>
      </div>
    </section>
    <section class="school">
      <span />
      <div class="text-white">
        <h1 class="heading">Islamic School</h1>
        <p
          class="max-w-2xl mx-auto text-center text-xl border-b border-gray-100 pb-10 text-gray-200"
        >
          The Weekend School of the Islamic Center of Allah is committed to
          providing quality Islamic Education according to the Quran and the
          Sunnah of the Prophet Mohammed (Peace Be upon Him) to a diverse
          student population in the greater area.
        </p>
        <button
          v-ripple
          class="py-3 px-12 mx-auto block my-10 rounded text-2xl font-semibold bg-green-700 text-white focus:outline-none hover:bg-green-500"
        >
          Read more
        </button>
      </div>
    </section>
    <section class="blog-peek bg-gray-100">
      <h1 class="heading -mt-10 pb-10 uppercase">Our Recent News</h1>
      <!-- Data not loaded yet -->
      <div  v-if="!recentPosts" class="wrapper mx-auto my-10 grid row-gap-6 col-gap-10 grid-cols-1 lg:grid-cols-2">
        <p>loading...</p>
      </div>

      <!-- If there are some recent posts... -->
      <div
        v-else
        class="wrapper mx-auto my-10 grid row-gap-6 col-gap-10 grid-cols-1 lg:grid-cols-2"
      >
        <!-- If there are no posts... -->
        <div  v-if="!recentPosts.length" class="post hottest">
          <p>No posts yet! Check Back Later 🙏🏾</p>
        </div>
        <!-- hottest post (first in  recent) -->
        <div v-else class="post hottest">
          <img
            v-if="recentPosts[0].image"
            :src="recentPosts[0].image.publicUrl"
            :alt="recentPosts[0].slug"
          />
          <div class="py-2 px-4">
            <p class="date-time">
              <span>{{ formatDate(recentPosts[0].posted, 'MMMM dd, yyyy') }}</span>
              <!-- <span class="comment">3 Comments</span> -->
              <span v-if="recentPosts[0].author" class="author">{{ recentPosts[0].author.name }}</span>
            </p>
            <p class="title">
              {{ recentPosts[0].title }}
            </p>
            <div v-html="recentPosts[0].headline" />
            <nuxt-link
              v-ripple
              :to="`/blog/${recentPosts[0].slug}`"
              tag="button"
              class="py-2 px-12 my-5 rounded text-2xl font-semibold bg-green-700 text-white focus:outline-none hover:bg-green-500"
              >Read more</nuxt-link
            >
          </div>
        </div>

        <!-- If there are no posts or not more than one... -->
        <div  v-if="recentPosts.length <= 1" class="recent">
          <p>No more posts! Check Back Later for more 🙏🏾</p>
        </div>
        <!-- recent post list -->
        <div v-else class="recent">
          <nuxt-link
            v-for="recentPost in recentPosts.slice(1)"
            :key="`home-recent-post-${recentPost.id}`"
            :to="`/blog/${recentPost.slug}`"
            tag="div"
            class="post"
          >
            <p class="title">
              {{ recentPost.title }}
            </p>
            <p class="date-time">
              <span>{{ formatDate(recentPost.posted, 'MMMM dd, yyyy') }} |</span>
              <!-- <span class="comment">{{ i + 1 }} Comments</span> -->
              <span v-if="recentPost.author" class="author">{{ recentPost.author.name }}</span>
            </p>
          </nuxt-link>
          <nuxt-link
            v-ripple
            to="/blog"
            tag="button"
            class="py-2 px-12 mt-5 mx-auto block rounded text-2xl font-semibold bg-green-700 text-white focus:outline-none hover:bg-green-500"
          >
            All news
          </nuxt-link>
        </div>
      </div>
    </section>
    <stats />
    <foo-ter />
  </div>
</template>

<script>
import NavBar from '~/components/partials/nav'
import FooTer from '~/components/partials/footer'
import Stats from '~/components/partials/stats'

/** 
  GraphQL Queries & Mutations
*/
const GET_RECENT_POSTS = `
  query GetRecentPosts($orderCondition: String!, $num: Int!) {
    allPosts(orderBy: $orderCondition, first: $num) {
      title
      id
      posted
      slug
      headline
      image {
        publicUrl
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
    title: 'Home - MSSN Center Ilorin',
  },
  components: {
    NavBar,
    FooTer,
    Stats
  },
  data: () => ({
    fetching: false,
    solatLocation: null,
    MuslimSalatApiUrl: process.env.MuslimSalatApiUrl,
    solatSchedule: {}
  }),
  async asyncData() {
    const { data: recentData } = await graphql(GET_RECENT_POSTS, { orderCondition: "posted_DESC", num: 5 });
    return {
      recentPosts: recentData.allPosts,
    };
  },
  mounted() {
    this.fetchSolatSchedule()
  },
  methods: {
    gotoUrl(url) {
      window.open(url, '_blank')
    },
    async fetchSolatSchedule() {
      try {
        this.fetching = true
        const { data } = await this.$axios(this.MuslimSalatApiUrl)
        this.solatLocation = data.city
        this.solatSchedule = data.items[0]
      } catch (error) {
      } finally {
        this.fetching = false
      }
    },
    async getRecentPosts() {
      const { data } = await graphql(GET_RECENT_POSTS, { orderCondition: "posted_DESC", num: 5 });
      this.recentPosts = data.allPosts;
    },
  }
}
</script>

<style lang="scss" scoped>
.home {
  header {
    @apply min-h-screen pt-5 relative;
    // background-image: url(https://images.unsplash.com/photo-1559355324-a5879d536e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2609&q=10);
    // background-image: url(https://images.unsplash.com/photo-1575645513913-c002ea3b2e01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=20);
    background-image: url('/images/read-quran.jpeg');
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.1);
    background-blend-mode: lighten;

    .scroll {
      @apply absolute w-full bottom-0 left-0 justify-center;

      img {
        @apply h-10 mb-10;
        filter: invert(1);
      }
    }
  }

  .solats {
    p {
      @apply flex justify-between items-center;

      &.heading {
        @apply text-green-800 text-center font-semibold text-xl justify-center;
      }

      &.location {
        @apply text-center font-medium justify-center;
      }

      &.timing {
        @apply py-2 mt-1 border-b-2 border-gray-300;
      }

      &.footnote {
        @apply text-sm justify-center my-3 text-orange-900;
      }
    }
  }

  .banner {
    @apply mx-auto;
    max-width: 85rem;

    .text {
      @apply text-white text-right;
      font-size: 7rem;

      @media (max-width: 768px) {
        font-size: 3rem;
      }
    }
    .sub-text {
      @apply text-white text-right;
      font-size: 3rem;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }

    .prayer-time {
      @apply p-10 mt-10;
      background-image: url('/images/paper.png');
      background-size: cover;

      @media (min-width: 768px) {
        min-width: 25rem;
      }
    }
  }

  section {
    @apply py-40;

    @media (max-width: 768px) {
      @apply py-24;
    }

    .heading {
      @apply text-4xl font-bold mb-5 text-center;
    }
  }
  .welcome {
    @apply text-center px-8;
    background-image: url('/images/summer-mosque.png');
    background-size: cover;

    p {
      @apply mb-10 text-xl mx-auto max-w-3xl;
    }

    button {
      @apply bg-green-700 text-white py-4 px-20 block mx-auto rounded-full;
    }
  }

  .philosophy {
    .main.heading {
      @apply mb-16 -mt-16 uppercase;
    }
    .points {
      @apply pt-5 px-20;

      .point {
        @apply text-center px-3;

        .icon {
          @apply block mx-auto;
        }
        .heading {
          @apply text-2xl font-semibold uppercase mt-1;
        }
      }
    }
  }

  .support1 {
    @apply flex px-10;
    background-image: url(https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=10);
    background-size: cover;
    background-position: bottom center;
  }
}

.services {
  .service {
    @apply text-center px-4;
    .icon {
      @apply block mx-auto;
    }

    .title {
      @apply font-semibold text-2xl uppercase mb-1 mt-2;
    }
  }
}
.school {
  @apply flex px-4;
  background-image: url('/images/quran-darkmode.webp');
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: multiply;
  background-size: cover;
  text-shadow: 0 0 5px black;

  & > * {
    @apply flex-grow;
  }
}

.blog-peek {
  .post {
    @apply px-5;

    .date-time {
      @apply text-center;

      .comment,
      .author {
        @apply text-green-500;
      }
    }

    &.hottest {
      @apply border bg-white px-0 mx-5;

      .date-time {
        @apply text-left my-2;

        span:first-child {
          @apply border-r pr-3 mr-2 border-gray-600;
        }
      }
      .title {
        @apply text-2xl font-semibold uppercase font-mono my-2;
      }
      img {
        @apply max-w-full;
      }
    }
  }

  .recent {
    @apply flex flex-col text-center py-10 px-20 mx-5 rounded shadow;
    background-image: url('/images/pattern-3dk.jpg');

    @media (max-width: 768px) {
      @apply px-2;
    }

    .post {
      &:not(:last-child) {
        @apply border-b-2 border-gray-500 pb-3 mb-3;

        @media (max-width: 768px) {
          @apply pb-5 mb-5;
        }
      }

      .title {
        @apply text-xl font-semibold my-1 font-mono;
      }
    }
  }
}
</style>
