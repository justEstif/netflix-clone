# Notes

## Landing Page

<pre>
purpose:
  show the landing page if the user isn't logged in
  if the user is logged in:
    will be redirected to their Home page

steps:
  1. user open page
    - check if there is an accout in the local storage
      yes: go to the home page
      no: stay on the landing page
  2. user clicks on buttons
    - sign in: go to sign in page
    - get started:
      - require email
        - check if email is registerd
          - yes: sign in page
          - no: sign up page
</pre>

## Signin Page

<pre>
purpose:
 - [x] auth user
 - [x] redirect to the home page
</pre>

## App

<pre>
purpose:
  setup the browser router
  provide the user to all the paths
</pre>

## Home Page

create new grid config

```js
<div>
  <img
    className="w-full h-full"
    src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
    alt={movie?.title}
  />
</div>
```
