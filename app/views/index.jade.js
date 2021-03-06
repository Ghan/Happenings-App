- var items = ["facebook", "github", "twitter", "instagram"]

- if (!everyauth.loggedIn)
  h2 Not Authenticated
  each item in items
   a(href='/auth/' + item)
     span Connect with <span style="text-transform: capitalize">!{item}</span><br />

- else
  h2 Authenticated
  #user-id Logged in with `user.id` #{user.id} - aka `everyauth.user.id` #{everyauth.user.id}
  - if (everyauth.facebook)
    h3 Facebook User Data
    p= JSON.stringify(everyauth.facebook.user)
  - if (everyauth.twitter)
    h3 Twitter User Data
    p= JSON.stringify(everyauth.twitter.user)
  - if (everyauth.github)
    h3 GitHub User Data
    p= JSON.stringify(everyauth.github.user)
  - if (everyauth.instagram)
    h3 Instagram User Data
    p= JSON.stringify(everyauth.instagram.user)
  h3
    a(href='/logout') Logout