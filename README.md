# dexter

To install dependencies:
`npm install`

To run the app:
`npm start`

NOTE: The error 'Error: ENOENT: no such file or directory, open 'secret.txt'' will appear when you attempt to run the site 
without creating a secret.txt file, which will contain the mongo database password and the Vimeo API token. These have been 
sent to Dave from Gabe under an email with the subject: "Dexter Passwords."

ALSO NOTE that in git the current site is under the MONGO branch, not Master.

This web application runs on a node.js, uses the express web application framework, Vue as a front end two-way data
binding framework, and express-Vue to allow information to be passed easily from express to Vue. It is intended to be
used with a non-relational database such as MongoDB, and to take full advantage of a JavaScript Everywhere programming
paradigm.

Of these frameworks, express-Vue is almost certainly the least well documented. However, the current application 
provides a working example of almost every instance in which express-Vue is likely to be used, and another working 
example can be found [here](https://github.com/express-Vue/express-Vue-example).

The purpose of express-Vue is to make it possible to pass information from express to Vue through express' native
data-passing function with the syntax `res.render(index, scope)`, where `index` is the name of the .vue file (see below)
and `scope` is the data, which should be defined above, that is passed to Vue.

Vue uses several different data formats to dynamically generate webpages, most of which are used in this application.
The general format of a .vue file is still used with express-vue:

```
<template>
HTML template for Vue to fill
</template>

<script>
Vue instantiated and used to fill template
</script>

<style>
Stylesheet applied to filled template
</style>
```

Except that, for organizational purposes, all of the css for this project is read from the 
[stylesheets directory](./public/stylesheets) and the `<style>` tags are therefore omitted. 

Additionally, sub-templates, called components, can be created and placed in the 
[components directory](./views/components), referenced in vue object in [app.js](./app.js), and then called in the 
template section of other .vue files with vue variables passed in, as seen in the `<modal>` and `<videos>` tags in 
[index.vue](./views/index.vue). Components can be used to make code more reusable and readable.

Vue also uses methods to generate dynamic content and distribute resources across the
application. Methods are defined with the following syntax:

 ```
   methods: {
     setProperty: function (foo) {
       this.Property = foo;
     }
   }

 ```

Methods can also be passed from application file to template or from template to template. They are passed as a part of 
`export default {}` under the `methods` object, and must be received under the `props` object, unless explicitly routed 
with `res.render()` (that is, index.vue does not require a `props` object under `export default` becase the data is 
explicitly passed to index.vue from app.js with `res.render('index', scope)`). Methods are very useful, but it is 
important to remember that they must be both passed and received in order to be used.

In addition, Vue uses its own in-line syntax for variable and action binding as well as iteration, variable passing, and
pretty much everything else under the sun. Handlebars syntax (`{{some_variable}}`) can be used to display Vue variables
as text, colons are used to pass Vue variables to other components (e.g. `<component :foo="bar"></component>` would pass 
the value of `bar` to the variable `foo` in the component) expressions can be bound to attributes like so: 
`v-bind:class="{active : is_active}"`, which would bind the class of the element to the veracity of the variable 
`is_active` (i.e. if `is_active` is true the element becomes active). Functions can be bound to clicks with the 
`v-on:click=""` syntax. For example, to bind the method `setProperty()`, defined above, the following could be placed in 
an element to cause it to run on click: `v-on:click="setProperty(foo)"` or the shorter `@click="setProperty(foo)"`, with 
the expression in quotes being evaluated when the element is clicked. This syntax is used heavily in the 
[modal component](./views/components/modal.vue) to change the active tab on button clicks.

Vue has several other builtin methods, such as `v-for=""` for iteration, `v-if=""` for conditionals, and `v-show=""` to
control whether elements are displayed. These are used throughout the project and follow the same general syntax as the 
rest of Vue's builtin methods. More thorough documentation of them as well as those delineated above can be found at the
[official Vue documentation](https://vuejs.org/v2/guide/).


Developed by Team Awesome for SupertutorTV