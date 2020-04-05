<template>
  <div class="page about">
    <header class="pb-0 lg:pb-10">
      <nav-bar />
      <div class="flex flex-col justify-center items-center text-center text-white py-20">
        <h1 class="text-6xl font-semibold">Our Services</h1>
        <p class="flex items-center text-xl my-5">
          <nuxt-link to="/" tag="span" class="cursor-pointer">Home</nuxt-link>
          <span class="mx-2">/</span>
          <span>Services</span>
        </p>
      </div>
    </header>
    <section class="services services-group-2">
      <!-- <h1 class="heading uppercase -mt-12 pb-16 text-center">Our Services</h1> -->
      <div
        class="mx-auto wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-10 row-gap-12"
      >
        <div class="service">
          <img src="/vectors/mosque.svg" alt="advice" class="icon h-20" />
          <p class="title" style="color: #965352;">Daily/Jum'ah Prayer</p>
          <p>
            Friday Khutba start at 12:30 pm
            <br />We perform all the five daily solawaat at the times specified on our
            prayer time app on this website.
          </p>
          <p class="my-2">
            <a href="#" class="text-orange-800 hover:underline">Learn more</a>
          </p>
        </div>
        <div class="service">
          <img src="/vectors/coffin.svg" alt="advice" class="icon h-20" />
          <p class="title" style="color: #965352;">Funeral Services</p>
          <p>
            Islamic Funeral and Burial Arrangement/Service
            <br />” …to Allah we Belong and to Him we Will Return”
            <br />The MSSN Center Ilorin will assist your family…
          </p>
          <p class="my-2">
            <a href="#" class="text-orange-800 hover:underline">Learn more</a>
          </p>
        </div>
        <div class="service">
          <img src="/vectors/law.svg" alt="advice" class="icon h-20" />
          <p class="title" style="color: #965352;">Counselling</p>
          <p>
            The society believes that giving sincere advice is one of the
            prominent characteristics of Islamic brotherhood; it is part of
            perfect faith and ihsaan, for a Muslim’s faith cannot be perfect
            until he loves for his brother what he loves for himself, and until
            he hates for his brother what he hates for himself. This forms the
            motive for giving sincere advice.
          </p>
          <p class="my-2">
            <a href="#" class="text-orange-800 hover:underline">Learn more</a>
          </p>
        </div>
      </div>
    </section>
    <section class="school">
      <span />
      <div class="text-white">
        <h1 class="heading text-center text-white">Islamic School</h1>
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
        >Read more</button>
      </div>
    </section>
    <section class="services services-group-2">
      <!-- <h1 class="heading uppercase -mt-12 pb-16 text-center">Our Services</h1> -->
      <div
        class="mx-auto wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-10 row-gap-12"
      >
        <div class="service">
          <img src="/vectors/hotel.svg" alt="advice" class="icon h-20" />
          <p class="title" style="color: #965352;">Lodging/Hall Rentals</p>
          <p>
            The hall and lodging facilities shall be operated on a commercial or
            profit basis and in accordance with Islamic principles. It shall
            also serve as venues for the missionary activities of the Society
            and shall host delegates and officials of the Society during these
            programmes. Furthermore, it shall be operated in such a way as to
            empower Muslim brothers and sisters through the generation of
            employments.
          </p>
          <p class="my-2">
            <a href="#" class="text-orange-800 hover:underline">Learn more</a>
          </p>
        </div>
        <div class="service">
          <img src="/vectors/camp.svg" alt="advice" class="icon h-20" />
          <p class="title" style="color: #965352;">
            Camping/
            <span title="Islamic Vacation Course">IVC</span>
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
          <p class="my-2">
            <a href="#" class="text-orange-800 hover:underline">Learn more</a>
          </p>
        </div>
        <div class="service">
          <img src="/vectors/invest.svg" alt="advice" class="icon h-20" />
          <p class="title" style="color: #965352;">Zakaah / Sadaqah</p>
          <p>
            The Society and the centre is offering Zakah Administration services
            through a specially constituted committee of experts. Members of the
            public are free to contact the Centre for any advice or request
            regarding the calculation and disbursements of their Zakah
          </p>
          <p class="my-2">
            <a href="#" class="text-orange-800 hover:underline">Learn more</a>
          </p>
        </div>
      </div>
    </section>
    <section id="support1" class="support1">
      <span class="flex-grow" />
      <div class="content flex-grow text-white">
        <h2 class="text-5xl font-semibold text-white uppercase text-center">
          Support us,
          <br />we need your help.
        </h2>
        <p class="mx-auto max-w-3xl text-center text-2xl font-light mt-6">
          Support our Islamic Centre Project. The project is intended as a world
          class Islamic Centre which shall include a Multipurpose Hall/Events
          Centre, Guest Lodge and Residence, School, Educational Facilities and
          a Technical/Skill Acquisition Centre, Library, A Mosque, Shopping
          Complex, Warehouse and Primary Health Care Facility. The project shall
          be executed in tranches and each of these structures shall be
          implemented one after the other.
          <br />Visit the Contact page for Account Details via this link
          <nuxt-link to="/contact" class="text-green-500 font-bold text-2xl">Here</nuxt-link>.
        </p>
        <div class="flex items-center mx-auto max-w-3xl justify-center mb-10 mt-5">
          <p class="text-5xl font-medium">Goal</p>
          <img src="/vectors/arrow-right-white.svg" alt="->" class="h-10 mx-5" />
          <p class="text-5xl font-medium">₦750 Million</p>
        </div>
        <button
          v-ripple
          class="bg-green-700 hover:bg-green-600 focus:outline-none text-white rounded py-3 px-12 block mx-auto mt-2 mb-10 text-2xl shadow"
          @click="gotoUrl('https://paystack.com/pay/mssnci')"
        >Donate now</button>
        <p class="mx-auto max-w-xl text-center">
          May Allah bless you! Thank you. Those who (in charity) spend of their
          goods by night and by day, in secret and in public, have their reward
          with their Lord
        </p>
      </div>
    </section>
    <stats />
    <foo-ter />
  </div>
</template>

<script>
import NavBar from "~/components/partials/nav";
import FooTer from "~/components/partials/footer";
import Stats from "~/components/partials/stats";

export default {
  components: {
    NavBar,
    FooTer,
    Stats
  },
  methods: {
    gotoUrl(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
.about {
  header {
    @apply pt-5 relative bg-orange-900;
    background-image: url("/images/bg.webp");
    background-size: cover;
    // background-color: rgba(255, 255, 255, 0.1);
    // background-blend-mode: lighten;
  }

  .wrapper {
    max-width: 90rem;
  }

  section {
    @apply py-32;

    @media (max-width: 768px) {
      @apply py-20;
    }

    .heading {
      @apply text-5xl font-bold mb-5;

      @media (max-width: 768px) {
        @apply text-3xl;
      }
    }
  }

  section.board {
    background-image: url("/images/wide-brown-caligraphy.jpg");
    background-size: cover;
  }

  section.support1 {
    @apply flex px-10;
    background-image: url(https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=10);
    background-size: cover;
    background-position: bottom center;
  }

  section.place {
    background-image: url("/images/place.webp");
    background-size: cover;
    @apply py-56;
  }

  .school {
    @apply flex px-4;
    background-image: url("/images/quran-darkmode.webp");
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: multiply;
    background-size: cover;
    text-shadow: 0 0 5px black;

    & > * {
      @apply flex-grow;
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

  section.stat {
    background-image: url("/images/greenish-design.webp");
    background-size: cover;
    padding: {
      top: 4rem;
      bottom: 4rem;
    }

    .info {
      @apply text-center text-white;

      .figure {
        @apply font-bold text-6xl font-mono;
      }
      .topic {
        @apply font-semibold text-3xl -mt-2 mb-2 uppercase;
      }
      .text {
        @apply max-w-sm mx-auto text-xl text-gray-900;
      }
    }
  }
}
</style>
