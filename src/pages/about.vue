<template>
  <div class="page about">
    <header class="pb-0 lg:pb-10">
      <nav-bar />
      <div
        class="flex flex-col justify-center items-center text-center text-white py-20"
      >
        <h1 class="text-6xl font-semibold">About Us</h1>
        <p class="flex items-center text-xl my-5">
          <nuxt-link to="/" tag="span" class="cursor-pointer">Home</nuxt-link>
          <span class="mx-2">/</span>
          <span>About us</span>
        </p>
      </div>
    </header>
    <section class="welcome">
      <h1 class="heading text-center">Welcome to the Muslim Students' Society of Nigeria (MSSN) Center, Ilorin</h1>

      <div class="mx-auto wrapper grid grid-cols-1 lg:grid-cols-2 mt-20 gap-10">
        <img
          src="/images/white-mosque.jpg"
          class="w-full h-full object-cover"
          alt="masjid"
        />
        <div class="flex flex-col justify-between">
          <p class="mb-3 text-base">
            The MSSN Center Ilorin is a Community Centre for all Muslims. The
            Center is committed to preserving an Islamic identity, building and
            supporting a viable Muslim community, promoting a comprehensive
            Islamic way of life and education, based on the Holy Qur'an and the
            Sunnah of Prophet Muhammad.
          </p>
          <p class="mb-3 text-base">
            The MSSN Centre Ilorin is intended to serve as a viable Islamic
            institution and physical base of operations from which the
            activities towards the realization of the lofty aspirations of the
            Society can be coordinated and implemented. Accordingly, the Centre
            shall be committed towards the actualising some of the Society's
            aims and objectives which are:
          </p>
          <p class="mb-3 text-sm">
            (a) To serve as an avenue to bring all Muslims together under the
            true spirit of Islamic brotherhood and absolute faith in ALLAH .
            <br />(b) To facilitate and encourage the study of the Glorious
            Qur'an and Arabic language as the lingua franca of the Islamic world
            and ensure proper understanding of Islam among its members <br />(c)
            To promote the general welfare of Muslims and facilitate the
            protection their rights within all communities.<br />
            (d) To serve as a base from which the necessary fortification and
            training can be provided to young Muslim students who shall be
            tasked with the solemn duty of propagating the pristine message of
            Islam to all mankind.<br />
            (e) To facilitate deliberate capacity building with a view to
            meeting the manpower and socio-economic needs of the Ummah and the
            larger society.<br />
            (f) To provide a vibrant avenue for economic self-sustainability of
            the Society and also to promote the development of an economically
            vibrant Muslim Ummah that is self-reliant.
          </p>
          <div
            class="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            <div
              class="action flex h-48 bg-yellow-600 font-semibold text-white justify-center items-center text-center p-1 uppercase text-3xl rounded shadow cursor-pointer"
            >
              <nuxt-link to="/" tag="span">Prayer Times</nuxt-link>
            </div>
            <div
              class="action flex h-48 bg-teal-500 font-semibold text-white justify-center items-center text-center p-1 uppercase text-3xl rounded shadow cursor-pointer"
              @click="gotoUrl('https://paystack.com/pay/mssnci')"
            >
              Donate Online
            </div>
            <div
              class="action flex h-48 bg-orange-500 font-semibold text-white justify-center items-center text-center p-1 uppercase text-3xl rounded shadow cursor-pointer"
            >
              <nuxt-link to="/contact" tag="span">Get in touch</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="board">
      <div class="wrapper mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 class="heading uppercase tracking-wider">
            Our Project Management Board
          </h1>
          <p class="text-xl mb-4">
            The Muslim Students’ Society of Nigeria(MSSN), Kwara State Area Unit
            with the project committee under the leadership and guardianship of
            the Board of Trustee Chairman, the pioneer Grand Kadi, Kwara State
            Shari’ah Court of Appeal Hon Justice AbdulKadir Orire (CON) Sarkin
            Malamai and Marafan Ilori has directed the committee with the
            responsibility to generate funds for the development of MSSN Land.
          </p>

          <p class="text-xl mb-4">
            The land is situated at Airport Road, along Ilorin-Ogbomoso express
            way, adjacent Ilorin International Aviation College, Ilorin, Kwara
            State and the responsibility of the team is to manage the
            development of the center and some of its maiden activites.
          </p>

          <p class="text-xl mb-4">
            The Board meets on the second Thursday of every month. These
            meetings are open to the public.
          </p>
        </div>
        <div class="bg-white shadow rounded p-12">
          <div class="flex items-center border-b mb-8 pb-8">
            <img
              src="/images/nasir.jpg"
              alt="nasir"
              class="rounded-full shadow h-20 mr-4"
            />
            <div>
              <p class="text-2xl font-medium">
                Prof. Yusuf ‘Lanre Badmus
              </p>
              <p class="text-xl font-semibold text-green-700">
                State Coordinator
              </p>
              <p class="text-xl text-orange-500">lanrebadmus@mssncenterilorin.org</p>
            </div>
          </div>
          <div class="flex items-center border-b mb-8 pb-8">
            <img
              src="/images/nasir.jpg"
              alt="nasir"
              class="rounded-full shadow h-20 mr-4"
            />
            <div>
              <p class="text-2xl font-medium">
                Arch. Sayfullah Ahmad Alege
              </p>
              <p class="text-xl font-semibold text-green-700">
                State Coordinator
              </p>
              <p class="text-xl text-orange-500">archalege@mssncenterilorin.org</p>
            </div>
          </div>
          <div class="flex items-center border-b mb-8 pb-8">
            <img
              src="/images/nasir.jpg"
              alt="nasir"
              class="rounded-full shadow h-20 mr-4"
            />
            <div>
              <p class="text-2xl font-medium">
                Dr. Aliu Alabi Badmus
              </p>
              <p class="text-xl font-semibold text-green-700">
                State Coordinator
              </p>
              <p class="text-xl text-orange-500">aliubadmus@mssncenterilorin.org</p>
            </div>
          </div>
          <div class="flex items-center">
            <img
              src="/images/nasir.jpg"
              alt="nasir"
              class="rounded-full shadow h-20 mr-4"
            />
            <div>
              <p class="text-2xl font-medium">
                Barr. Nurudeen Ibrahim
              </p>
              <p class="text-xl font-semibold text-green-700">
                State Coordinator
              </p>
              <p class="text-xl text-orange-500">nurudeen@mssncenterilorin.org</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="support1" class="support1">
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
    <section class="mission">
      <div class="wrapper mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <img
          src="/images/yahya.png"
          alt="shuaib"
          class="rounded-full shadow max-h-full block mx-auto"
          style="max-width: 20rem"
        />
        <div class="lg:col-span-2">
          <h1 class="heading uppercase">MSSN Mission statement</h1>
          <p class="mb-5 text-xl">
            The new vision of MSSN is: "To establish an Islamic Ummah governed
            by the principles and rules of the shariah within the next fifty
            year" While the Mission statement is: "The MSSN will work
            relentlessly towards the establishment of a society that fosters all
            - round human development.
          </p>
          <p class="mb-5 text-xl">
            To achieve this, MSSN will continuously strive towards strengthening
            the Ummah educationally, economically, spiritually and politically
            through a wide spectrum of activities in schools and the larger
            society in partnership with likeminded organizations. To succeed,
            MSSN must ensure that its member are God fearing, knowledgeable,
            united and with superior moral values"
          </p>
        </div>
      </div>
    </section>
    <section class="place">
      <div class="max-w-6xl mx-auto text-white text-center">
        <h1 class="heading uppercase" style="color: white">A place for you</h1>
        <p class="text-2xl">
          Our Islamic Center takes pride in its heritage of diversity,
          open-mindedness, civic engagement and community building. Get to know
          what makes us tick — our approach to Islam and our definition of a
          true Muslim identity, all of which shape the character of our
          community.
        </p>
        <button
          v-ripple="'rgba(255, 255, 255, 0.1)'"
          class="bg-green-700 rounded py-4 font-medium block mx-auto my-10 focus:outline-none hover:bg-orange-700 px-10 text-xl shadow"
          @click="gotoUrl('https://paystack.com/pay/mssnci')"
        >
          Donate now
        </button>
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

export default {
  components: {
    NavBar,
    FooTer,
    Stats
  },
  methods: {
    gotoUrl(url) {
      window.open(url, '_blank')
    }
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

  section.board {
    background-image: url('/images/wide-brown-caligraphy.jpg');
    background-size: cover;
  }

  section.support1 {
    @apply flex px-10;
    background-image: url(https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=10);
    background-size: cover;
    background-position: bottom center;
  }

  section.place {
    background-image: url('/images/place.webp');
    background-size: cover;
    @apply py-56;
  }
}
</style>
