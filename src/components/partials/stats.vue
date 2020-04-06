<template>
  <section id="stat" class="stat">
    <!-- <div
      class="wrapper mx-auto grid col-gap-10 grid-cols-1 lg:grid-cols-3 gap-12"
    >
      <div class="info">
        <p class="figure">407</p>
        <p class="topic">Schools</p>
        <p class="text">
          Community with over 407 school spanning between primary schools,
          secondary schools and higher institution of learning.
        </p>
      </div>
      <div class="info">
        <p class="figure">500</p>
        <p class="topic">Partners</p>
        <p class="text">
          Community with over 500 school spanning between primary schools,
          secondary schools and higher institution of learning.
        </p>
      </div>
      <div class="info">
        <p class="figure">900</p>
        <p class="topic">Students</p>
        <p class="text">
          Community with over 900 school spanning between primary schools,
          secondary schools and higher institution of learning.
        </p>
      </div>
    </div> -->
    <div class="wrapper mx-auto grid col-gap-10 grid-cols-1">
      <div class="info">
        <p class="arabic">
          لَّيْسَ الْبِرَّ أَن تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ
          وَالْمَغْرِبِ وَلَٰكِنَّ الْبِرَّ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ
          الْآخِرِ وَالْمَلَائِكَةِ وَالْكِتَابِ وَالنَّبِيِّينَ وَآتَى الْمَالَ
          عَلَىٰ حُبِّهِ ذَوِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينَ
          وَابْنَ السَّبِيلِ وَالسَّائِلِينَ وَفِي الرِّقَابِ وَأَقَامَ
          الصَّلَاةَ وَآتَى الزَّكَاةَ وَالْمُوفُونَ بِعَهْدِهِمْ إِذَا
          عَاهَدُوا ۖ وَالصَّابِرِينَ فِي الْبَأْسَاءِ وَالضَّرَّاءِ وَحِينَ
          الْبَأْسِ ۗ أُولَٰئِكَ الَّذِينَ صَدَقُوا ۖ وَأُولَٰئِكَ هُمُ
          الْمُتَّقُونَ - 2:177
        </p>
        <p class="e-text">
          "Righteousness is not that you turn your faces toward the east or the
          west, but [true] righteousness is [in] one who believes in Allah, the
          Last Day, the angels, the Book, and the prophets and gives wealth, in
          spite of love for it, to relatives, orphans, the needy, the traveler,
          those who ask [for help], and for freeing slaves; [and who]
          establishes prayer and gives zakah; [those who] fulfill their promise
          when they promise; and [those who] are patient in poverty and hardship
          and during battle. Those are the ones who have been true, and it is
          those who are the righteous."
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section.stat {
  background-image: url('/images/greenish-design.webp');
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
    .arabic {
      font-family: 'Amiri', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      @apply font-bold text-4xl;
    }
    .topic {
      @apply font-semibold text-3xl -mt-2 mb-2 uppercase;
    }
    .text {
      @apply max-w-sm mx-auto text-xl text-gray-900;
    }
    .e-text {
      @apply mx-auto mt-6 text-2xl italic text-gray-900;
    }
  }
}
</style>
