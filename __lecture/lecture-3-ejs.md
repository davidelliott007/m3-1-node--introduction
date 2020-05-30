# 3.1.3 - Module Spotlight: EJS

---

EJS is a **templating language**

---

# What is a templating language?

---

EJS is:

- Superset of HTML
- alloys you to "mix" JS to create dynamic HTML

---

### Example

```html
<ol>
  <% friends.forEach((name) => { %>
  <li><%= name %></li>
  <% }); %>
</ol>
```

---

We **compile** a template to plain HTML.

---

```js
let template = `
<ol>
  <% friends.forEach((name) => { %>
    <li><%= name %></li>
  <% }); %>
</ol>
`;

let data = ['Anjula', 'Bouchard', 'Chad'];

ejs.render(str, data);
// => Rendered HTML string
```

```html
<ol>
  <li>Anjula</li>
  <li>Bouchard</li>
  <li>Chad</li>
</ol>
```

---

This is just scratching the surface.

You will want to _use the docs_ for today's workshop.

---

https://ejs.co/#docs

https://expressjs.com/en/guide/routing.html

---
