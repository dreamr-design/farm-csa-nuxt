<script setup>
definePageMeta({ slug: 'about' });
useHead({
  title: 'About the farm | Bramblecut Farm',
  meta: [
    { name: 'description', content: 'How two growers turned one borrowed acre into a 22-acre certified organic farm near Viroqua, Wisconsin. Meet the crew, read how we farm, and find the farm stand.' },
  ],
});
</script>

<template>
<main id="main">
    <section class="about-hero" aria-labelledby="page-title">
      <div class="wrap">
        <p class="kicker">Our story · Since 2011</p>
        <h1 id="page-title">Two people, one borrowed acre, and a lot of rocks.</h1>
        <p class="lede">Bramblecut started as a quarter-mile of rented hillside and a truck bed of lettuce. Fifteen seasons on, it is 22 acres, five growers and 310 kitchens, and we still pull rocks every spring.</p>
      </div>
      <img src="/assets/img/hills.svg" alt="Screenprint of the Bramblecut hollow at sunrise: the red barn, a silo, and striped crop rows on the hill" width="1440" height="320">
    </section>

    <section class="section band" aria-labelledby="story-title">
      <div class="wrap story">
        <div class="story__text">
          <p class="kicker">How it started</p>
          <h2 id="story-title">From a truck bed to a hollow of our own</h2>
          <p>Mae Lindqvist and Tomás Rivera met pulling weeds on someone else's farm. In 2011 a retired dairyman named Walt let them work one acre of his worst ground for the price of a weekly bag of vegetables. The soil was thin, the hill was steep, and the rocks came up faster than the carrots.</p>
          <p>They sold that first summer from the tailgate at the Viroqua market. Two years later, 24 neighbors paid up front for a season of crates, and the CSA was born out of a borrowed walk-in cooler and a very long spreadsheet.</p>
          <p>In 2017 the hollow down the road came up for sale: 22 acres of south-facing slope, a spring-fed creek, and a barn with half a roof. We bought it with a farm loan and a lot of member prepayments, and every crate since has come out of that ground.</p>
        </div>
        <blockquote class="pull">
          <p>We plant for the people who paid in February. That is the whole business plan, and it has held for fifteen years.</p>
          <footer>Mae Lindqvist, co-owner and grower</footer>
        </blockquote>
      </div>
    </section>

    <section class="section" aria-labelledby="team-title">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">Who grows it</p>
            <h2 id="team-title">The crew in the rows</h2>
          </div>
          <p>Five people farm Bramblecut year round, with a dozen seasonal hands and a Saturday volunteer crew that has not missed a harvest in six years.</p>
        </div>
        <div class="team">
          <article class="person"><div class="avatar" aria-hidden="true">ML<img src="/assets/img/veg/tomato.svg" alt="" width="46" height="46"></div><h3>Mae Lindqvist</h3><p class="person__role">Co-owner · Grower</p><p>Plans the crop calendar at the kitchen table every January, and has an opinion about every tomato ever bred.</p></article>
          <article class="person"><div class="avatar" aria-hidden="true">TR<img src="/assets/img/veg/carrot.svg" alt="" width="46" height="46"></div><h3>Tomás Rivera</h3><p class="person__role">Co-owner · Soil and machines</p><p>Keeps a 1958 tractor running on hope and baling twine, and runs our cover crop trials.</p></article>
          <article class="person"><div class="avatar" aria-hidden="true">JH<img src="/assets/img/veg/radish.svg" alt="" width="46" height="46"></div><h3>Juniper Hale</h3><p class="person__role">CSA and farm stand</p><p>Packs the crates, writes the Wednesday email, and knows every member by their pickup day.</p></article>
          <article class="person"><div class="avatar" aria-hidden="true">DA<img src="/assets/img/veg/squash.svg" alt="" width="46" height="46"></div><h3>Dev Anand</h3><p class="person__role">Chef · Farm dinners</p><p>Cooked on Chicago lines for ten years before trading them for a field kitchen and one long table.</p></article>
          <article class="person"><div class="avatar" aria-hidden="true">RB<img src="/assets/img/veg/kale.svg" alt="" width="46" height="46"></div><h3>Rosa Beltrán</h3><p class="person__role">Field crew lead</p><p>Six seasons here. Transplants a flat of kale faster than anyone in Vernon County.</p></article>
        </div>
      </div>
    </section>

    <section class="section band" aria-labelledby="values-title">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">Growing instructions</p>
            <h2 id="values-title">How we farm, on the back of the packet</h2>
          </div>
          <p>Four rules we wrote on the barn door the week we bought the hollow. They still decide most things.</p>
        </div>
        <div class="values">
          <div class="value"><h3>Feed the soil, not the plant</h3><p>Cover crops on every bed over winter, compost from our own piles, and rotations planned four years ahead.</p></div>
          <div class="value"><h3>Nothing sprayed we would not eat</h3><p>Certified organic since 2014. When a bug wins a crop, we lose it and write about it in the note.</p></div>
          <div class="value"><h3>Share the risk and the good years</h3><p>Members pay up front and carry the weather with us. In a bumper year, the crates get heavier.</p></div>
          <div class="value"><h3>Nobody leaves without dinner</h3><p>Sliding-scale shares, SNAP at the stand, and work shares mean the price never decides who eats.</p></div>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="time-title">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">Row markers</p>
            <h2 id="time-title">Fifteen seasons, staked out</h2>
          </div>
          <p>Every year gets a stake at the end of the first row planted. These are the ones worth keeping.</p>
        </div>
        <ol class="stakes">
          <li class="stake"><span class="stake__post">2011</span><div><h3>One borrowed acre</h3><p>Rent paid in vegetables. Sold from a tailgate in Viroqua.</p></div></li>
          <li class="stake"><span class="stake__post">2013</span><div><h3>The first 24 members</h3><p>Neighbors paid up front. The CSA crates start that June.</p></div></li>
          <li class="stake"><span class="stake__post">2014</span><div><h3>Certified organic</h3><p>Three years of records, one very thorough inspector.</p></div></li>
          <li class="stake"><span class="stake__post">2017</span><div><h3>We buy the hollow</h3><p>22 acres, a creek, and a barn with half a roof.</p></div></li>
          <li class="stake"><span class="stake__post">2019</span><div><h3>The stand goes up</h3><p>A red barn at the end of the lane, and the honor box beside it.</p></div></li>
          <li class="stake"><span class="stake__post">2021</span><div><h3>First farm dinner</h3><p>Forty seats between the squash rows. It rained. Nobody left.</p></div></li>
          <li class="stake"><span class="stake__post">2024</span><div><h3>Two high tunnels</h3><p>Tomatoes into October, and spinach in the dead of March.</p></div></li>
          <li class="stake"><span class="stake__post">2026</span><div><h3>310 households</h3><p>Six pickup towns, twenty sliding-scale shares, zero empty weeks.</p></div></li>
        </ol>
      </div>
    </section>

    <section class="section--tight dark" aria-labelledby="num-title">
      <div class="wrap">
        <h2 id="num-title" class="sr-only">The farm in numbers</h2>
        <ul class="numbers">
          <li><strong>22</strong><span>acres of Driftless hillside</span></li>
          <li><strong>140</strong><span>varieties grown each year</span></li>
          <li><strong>310</strong><span>member households</span></li>
          <li><strong>6</strong><span>Thursday pickup towns</span></li>
          <li><strong>0</strong><span>synthetic sprays, ever</span></li>
        </ul>
      </div>
    </section>

    <section class="section band" id="visit" aria-labelledby="visit-title">
      <div class="wrap">
        <div class="closing__card">
          <p class="stamp stamp--leaf" aria-hidden="true">Honor box: always open</p>
          <div>
            <p class="kicker">Visit the farm stand</p>
            <h2 id="visit-title">Come down the lane.</h2>
            <p>The stand is the red barn at the bottom of our lane, 4 miles south of Viroqua on County Road B. Look for the painted tomato on the mailbox. Park on the grass, not the lane: the tractor needs it.</p>
            <div class="btn-row"><a class="btn" href="/pricing/">See the shares</a><a class="btn btn--ghost" href="/contact/">Ask about a tour</a></div>
          </div>
          <dl class="packet__back">
            <dt>Stand hours</dt><dd>Friday to Sunday, 9 am to 6 pm</dd>
            <dt>Honor box</dt><dd>Every day. Pay in the coffee can, or tap a card on the reader.</dd>
            <dt>CSA pickup</dt><dd>Thursdays, 3 to 7 pm, at the barn</dd>
            <dt>Address</dt><dd>E4410 County Road B, Viroqua, WI 54665</dd>
            <dt>Tours</dt><dd>First Saturday of the month, June to September, 10 am</dd>
          </dl>
        </div>
      </div>
    </section>
  </main>
</template>
