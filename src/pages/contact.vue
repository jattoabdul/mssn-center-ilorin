<template>
  <div class="page contact">
    <header class="pb-0 lg:pb-10">
      <nav-bar />
      <div
        class="flex flex-col justify-center items-center text-center text-white py-20"
      >
        <h1 class="text-6xl font-semibold">Contact Us</h1>
        <p class="flex items-center text-xl my-5">
          <nuxt-link to="/" tag="span" class="cursor-pointer">Home</nuxt-link>
          <span class="mx-2">/</span>
          <span>Contact</span>
        </p>
      </div>
    </header>
    <section
      id="contact-detail"
      class="wrapper mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 contact-detail"
    >
      <div class="contact-info">
        <h1>Contact Info</h1>
        <h2>MSSN Center ILORIN (MSSNCI)</h2>
        <p class="physical-contact">
          Airport Road, along Ilorin-Ogbomoso express way, <br />Adjacent Ilorin
          International Aviation College, Ilorin,<br />
          Kwara State, NG 32802
        </p>
        <p class="electronic-contact">
          Phones:
          <a href="tel:+2348033979970" class="link">234 803 397 9970</a> | <a href="tel:+2348037060620" class="link">234 803 706 0620</a><br />
          Phones:
          <a href="tel:+2348037253303" class="link">234 803 725 3303</a> | <a href="tel:+2348034073585" class="link">234 803 407 3585</a><br />
          Email:
          <a href="mailto:mssncenterilorin@gmail.com" target="_top" class="link"
            >mssncenterilorin@gmail.com</a
          ><br /><br />
          Account Name: <a href="#" class="link text-sm"
            >MUSLIM STUDENTS’ SOCIETY OF NIGERIA, KWARA STATE AREA UNIT</a
          ><br />
          Bank Name: <a href="#" class="link"
            >ACCESS BANK</a
          ><br />
          Naira Account Number: <a href="#" class="link"
            >0059214803</a
          ><br />
          Dollar Account Number: <a href="#" class="link"
            >1382364830</a
          ><br />
          GBP Account Number: <a href="#" class="link"
            >1382371472</a
          ><br />
        </p>
        <div class="mssnci-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63139.45783022604!2d4.519937314848169!3d8.478355189378526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1036528d9c605049%3A0xf59fa28215d71df1!2sIlorin%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1585930865338!5m2!1sen!2sus"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
      <div class="get-in-touch">
        <h1>Get In Touch</h1>
        <h2>
          Have questions about MSSNCI projects or services? Let us help. Use our
          contact form and we’ll get back to you as soon as possible.
        </h2>
        <div class="get-in-touch-form">
          <form
            action="https://formspree.io/mdolkpjb"
            method="POST"
            class="mx-auto wrapper grid grid-cols-1 gap-5"
          >
            <div class="input-field">
              <input type="text" placeholder="Your name" name="fullname" />
            </div>
            <div class="input-field">
              <input type="email" placeholder="Your e-mail" name="_replyto" />
            </div>
            <div class="input-field">
              <textarea
                id="message"
                placeholder="Your message"
                name="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div class="input-field agreement">
              <input
                id="data-privacy-agreement"
                type="checkbox"
                name="data-privacy-agreement"
                value="agreed"
              />
              <label for="data-privacy-agreement"
                >I agree that my submitted data is being collected and
                stored.</label
              >
            </div>
            <button
              v-ripple
              type="submit"
              class="mr-auto bg-orange-400 py-3 px-16 text-2xl text-gray-800 rounded my-3 font-mdium"
            >
              Submit
            </button>
          </form>
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

export default {
  components: {
    NavBar,
    FooTer,
    Stats
  }
}
</script>

<style lang="scss" scoped>
.contact {
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

  section.contact-detail {
    .contact-info {
      h1 {
        @apply text-5xl font-bold mb-8 text-orange-900;
        @media (max-width: 768px) {
          @apply text-3xl;
        }
      }
      h2 {
        @apply text-2xl font-semibold mb-6 text-orange-900;
        @media (max-width: 768px) {
          @apply text-xl;
        }
      }
      .physical-contact {
        @apply mb-8;
        color: #9d9087;
      }
      .electronic-contact {
        @apply mb-8;
        color: #9d9087;

        .link {
          @apply text-orange-800;
        }
      }
    }

    .get-in-touch {
      h1 {
        @apply text-5xl font-bold mb-8 text-orange-900;
        @media (max-width: 768px) {
          @apply text-3xl;
        }
      }
      h2 {
        @apply text-xl mb-32 text-orange-900;
        @media (max-width: 768px) {
          @apply text-xl;
        }
      }

      // TODO: Finish form styling @Ajala
      .get-in-touch-form {
        form {
          .input-field {
            @apply flex items-center;

            input,
            textarea {
              @apply flex-grow py-4 px-3 rounded bg-orange-200 font-medium text-xl;

              &:focus {
                @apply outline-none border border-orange-600;
              }
            }

            input[type='checkbox'] {
              @apply flex-grow-0 mr-4;
            }

            label[for='data-privacy-agreement'] {
              @apply flex-grow text-left;
            }
          }
        }
      }
    }
  }

  .main-showcase {
    @apply mx-auto;
    width: 80rem;
  }
}
</style>
