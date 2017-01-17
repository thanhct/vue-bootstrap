<template>
  <div id="app">
    {{#bootstrap}}
    <nav class="navbar navbar-fixed-top navbar-toggleable-md navbar-inverse bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/">{{ name }}</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
    {{/bootstrap}}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: '{{ name }}'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  components: {
    // Components go here
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  .navbar { margin-bottom: 50px; }

  p {
    margin: 0em;
  }

  p.lead {
    font-weight: 500;
    margin-bottom: 1em;
    color: #888;
  }

  h1, h2 {
    font-weight: 900;
    margin-bottom: 1em;
  }

  h3, h4 {
    margin-top: 1em;
    font-weight: 700;
    margin-bottom: 1em;
  }
</style>
