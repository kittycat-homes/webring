<template>
  <div class="@container">
    <h2 class="font-display text-3xl text-primary" id="join">join. now.</h2>
    <div class="grid gap-5 @md:grid-cols-2 @7xl:grid-cols-5">
      <div>
        <h3 class="font-display text-2xl text-secondary">contact</h3>
        contact zoe or tiger to join
        <h4 class="font-display text-xl text-secondary">zoe</h4>
        <ul class="list-inside list-disc">
          <li>
            <a class="link" href="mailto:zoe@kittycat.homes"
              >zoe@kittycat.homes</a
            >
            (e-mail)
          </li>
          <li>
            <a
              class="link"
              href="https://matrix.to/#/@bat:matrix.kittycat.homes"
              >@bat:matrix.kittycat.homes</a
            >
            (matrix)
          </li>
          <li>
            <a
              class="link"
              href="https://discordapp.com/users/200666655016091648"
              >fruits_bat</a
            >
            (discord)
          </li>
        </ul>
        <h4 class="font-display text-xl text-secondary">tiger</h4>
        <ul class="list-inside list-disc">
          <li>
            <a class="link" href="mailto:tiger@kittycat.homes"
              >tiger@kittycat.homes</a
            >
            (e-mail)
          </li>
          <li>
            <a class="link" href="https://discord.com/users/152843864342790145"
              >comforttiger</a
            >
            (discord)
          </li>
        </ul>
      </div>
      <div>
        <h3 class="font-display text-2xl text-secondary">
          required information
        </h3>
        <ul class="list-inside list-disc">
          <li>username (ascii characters only, no spaces)</li>
          <li>displayname</li>
          <li>a link to your website</li>
          <li>pronouns (optional)</li>
          <li>a short description (optional)</li>
          <li>an image with a description (optional)</li>
        </ul>
      </div>
      <div class="@md:col-span-2 @7xl:col-span-3">
        <h3 class="font-display text-2xl text-secondary @container">
          adding the ring to your website
        </h3>
        <div class="grid gap-5 @md:grid-cols-2 @2xl:grid-cols-3">
          <div>
            <h4 class="font-display text-xl text-secondary">
              next and previous links
            </h4>
            <p>
              once you are added to the webring you can use
              <code>https://webring.kittycat.homes/next/${your-username}</code>
              and
              <code
                >https://webring.kittycat.homes/previous/${your-username}</code
              >
              to link to the next and previous sites.
            </p>
            <p>just add these to your website and you are good to go!</p>
          </div>
          <div>
            <h4 class="font-display text-xl text-secondary">iframes</h4>
            <p>
              we have iframes at
              <code>https://webring.kittycat.homes/frame/${your-username}</code
              >. these are very easy to add to your site, but you can't style
              them yourself.
            </p>
          </div>
          <div class="@md:col-span-2 @2xl:col-span-1">
            <h4 class="font-display text-xl text-secondary">json files</h4>
            <p>
              if you really want to get down and dirty you can use your json
              file! this is probably the most complicated option but gives you
              the most control. this is available at
              <code
                >https://webring.kittycat.homes/members/{$your-username}.json</code
              >. there is also one with everyone's information at
              <code>https://webring.kittycat.homes/everyone.json</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
