<template>
  <div class="page projects">
    <header class="pb-0 lg:pb-10">
      <nav-bar />
      <div
        class="flex flex-col justify-center items-center text-center text-white py-20"
      >
        <h1 class="text-6xl font-semibold">Our Projects</h1>
        <p class="flex items-center text-xl my-5">
          <nuxt-link to="/" tag="span" class="cursor-pointer">Home</nuxt-link>
          <span class="mx-2">/</span>
          <span>Projects</span>
        </p>
      </div>
    </header>
    <h1 class="text-4xl text-orange-800 text-center font-semibold my-20">
      MSSN CENTER ILORIN <br />
      DEVELOPMENT PROJECT
    </h1>
    <div class="wrapper bg-gray-300 mx-auto">
      <iframe
        class="main-showcase mx-auto w-full rounded"
        height="700"
        src="https://www.youtube.com/embed/ijl5shLRH3I?rel=0&autoplay=1&loop=1&autopause=0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <section id="welcome" class="welcome">
      <h1 class="heading">
        Welcome to the Muslim Students' Society of Nigeria (MSSN) Center, Ilorin
      </h1>
      <p>
        The MSSN Center Ilorin is a Community Centre for all Muslims. The Center
        is committed to preserving an Islamic identity, building and supporting
        a viable Muslim community, promoting a comprehensive Islamic way of life
        and education, based on the Holy Qur'an and the Sunnah of Prophet
        Muhammad.
      </p>
      <button
        v-ripple
        class="focus:outline-none"
        @click="gotoUrl('https://paystack.com/pay/mssnci')"
      >
        Donate now
      </button>
    </section>
    <section class="mssnci-project">
      <p class="wrapper mx-auto my-10 text-xl">
        The MSSN Centre Ilorin is intended to serve as a viable Islamic
        institution and physical base of operations from which the activities
        towards the realization of the lofty aspirations of the Society can be
        coordinated and implemented. Accordingly, the Centre shall be committed
        towards the actualising some of the Society's aims and objectives which
        are:
        <br />
        (a) To serve as an avenue to bring all Muslims together under the true
        spirit of Islamic brotherhood and absolute faith in ALLAH .<br />
        (b) To facilitate and encourage the study of the Glorious Qur'an and
        Arabic language as the lingua franca of the Islamic world and ensure
        proper understanding of Islam among its members<br />
        (c) To promote the general welfare of Muslims and facilitate the
        protection their rights within all communities.<br />

        (d) To serve as a base from which the necessary fortification and
        training can be provided to young Muslim students who shall be tasked
        with the solemn duty of propagating the pristine message of Islam to all
        mankind.<br />

        (e) To facilitate deliberate capacity building with a view to meeting
        the manpower and socio-economic needs of the Ummah and the larger
        society.<br />

        (f) To provide a vibrant avenue for economic self-sustainability of the
        Society and also to promote the development of an economically vibrant
        Muslim Ummah that is self-reliant.
      </p>
      <h1
        class="wrapper text-4xl text-orange-800 text-center font-semibold mx-auto my-10"
      >
        The centre shall serve a multi-purpose, diverse but inter-connected
        functions and shall host the following facilities
      </h1>
      <div
        class="features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-10 row-gap-16 mx-auto"
      >
        <div class="feature">
          <img src="/images/fine_mosque-min.jpg" alt="mosque" />
          <div class="flex justify-between">
            <h1 class="text-2xl font-semibold uppercase text-orange-800 my-1">
              Multipurpose hall/Events centre
            </h1>
            <span class="text-gray-800">Target:200million</span>
          </div>
          <p>
            A rentable Multipurpose hall/Events centre for islamic and general
            non-islamic activities.
          </p>
        </div>
        <div class="feature">
          <img src="/images/fine_mosque-min.jpg" alt="mosque" />
          <div class="flex justify-between">
            <h1 class="text-2xl font-semibold uppercase text-orange-800 my-1">
              Guest Lodge /Residence
            </h1>
            <span class="text-gray-800">Target:200million</span>
          </div>
          <p>
            A bookable Guest Lodge / Residence for travelling/touring members of
            the MSSN association.
          </p>
        </div>
        <div class="feature">
          <img src="/images/fine_mosque-min.jpg" alt="mosque" />
          <div class="flex justify-between">
            <h1 class="text-2xl font-semibold uppercase text-orange-800 my-1">
              Educational Facility/Skill Acquisition Outfit
            </h1>
            <span class="text-gray-800">Target:200million</span>
          </div>
          <p>
            An outfit With adequate Educational Facilities for Academic and
            Technical Studies or Skill Acquisition
          </p>
        </div>
        <div class="feature">
          <img src="/images/fine_mosque-min.jpg" alt="mosque" />
          <div class="flex justify-between">
            <h1 class="text-2xl font-semibold uppercase text-orange-800 my-1">
              Library
            </h1>
            <span class="text-gray-800">Target:200million</span>
          </div>
          <p>
            A Library of islamic history, jurisprudence and general knowledge.
          </p>
        </div>
        <div class="feature">
          <img src="/images/fine_mosque-min.jpg" alt="mosque" />
          <div class="flex justify-between">
            <h1 class="text-2xl font-semibold uppercase text-orange-800 my-1">
              Mega Masjid
            </h1>
            <span class="text-gray-800">Target:200million</span>
          </div>
          <p>
            A Mega Masjid (Mosque) for daily and jum'ah prayers.
          </p>
        </div>
        <div class="feature">
          <img src="/images/fine_mosque-min.jpg" alt="mosque" />
          <div class="flex justify-between">
            <h1 class="text-2xl font-semibold uppercase text-orange-800 my-1">
              Shopping Complex/Ware house.
            </h1>
            <span class="text-gray-800">Target:200million</span>
          </div>
          <p>
            Shopping Complex and Ware houses.
          </p>
        </div>
        <div class="feature">
          <img src="/images/fine_mosque-min.jpg" alt="mosque" />
          <div class="flex justify-between">
            <h1 class="text-2xl font-semibold uppercase text-orange-800 my-1">
              Health Care Facility
            </h1>
            <span class="text-gray-800">Target:200million</span>
          </div>
          <p>
            A Primary health Care Facility
          </p>
        </div>
      </div>
      <p class="wrapper mx-auto my-10 text-xl">
        The aspiration for a centre of this kind has been nurtured by the
        National leadership of the society for over four decades when the land
        was donated to the society and secured by its donors and promoters.
        Unfortunately, this aspiration has not been realised due to a myriad of
        challenges that has hindered its actualisation. These challenges range
        from illegal encroachments on the land site for the proposed project; to
        inaccessibility of funds for the implementation of the project. These
        challenges and consequent neglect of the site over the years has
        occasioned the dilapidation of the structure that is currently on the
        land which itself was the donation of a philanthropist several years
        ago.
      </p>
      <p class="wrapper mx-auto my-10 text-xl">
        We accordingly call on members of the Muslim Ummah in all nations of
        world to engage in this Sadaqatul jariyah (everlasting charity) by
        contributing towards this great project for the enhancement of the
        Muslim Ummah.
      </p>
      <p class="wrapper mx-auto my-10 text-xl">
        You can also setup direct debit donations to the project from your account using the following account information below:
        <br /><br />
          Account Name: <a href="#" class="font-semibold"
            >MUSLIM STUDENTS’ SOCIETY OF NIGERIA, KWARA STATE AREA UNIT</a
          ><br />
          Bank Name: <a href="#" class="font-semibold"
            >ACCESS BANK</a
          ><br />
          Naira Account Number: <a href="#" class="font-semibold"
            >0059214803</a
          ><br />
          Dollar Account Number: <a href="#" class="font-semibold"
            >1382364830</a
          ><br />
          GBP Account Number: <a href="#" class="font-semibold"
            >1382371472</a
          ><br />
      </p>
      <p class="wrapper mx-auto my-10 text-xl">
        May Allah bless you! Thank you. Those who (in charity) spend of their goods by night and by day, in secret and in public, have their reward with their Lord.
      </p>
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
.projects {
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

  .welcome {
    @apply text-center px-8 mt-32;
    background-image: url('/images/summer-mosque.png');
    background-size: cover;

    p {
      @apply mb-10 text-xl mx-auto max-w-3xl;
    }

    button {
      @apply bg-green-700 text-white py-4 px-20 block mx-auto rounded-full;
    }
  }

  section.mssnci-project {
    @apply py-12;

    .features {
      max-width: 85rem;
      @apply mb-8;
    }
  }
}
</style>
