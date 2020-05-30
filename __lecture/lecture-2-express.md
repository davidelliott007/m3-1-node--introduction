# 3.1.2 - Module Spotlight: Express

<img src={express} style="min-width: 50%;" />

---

## One of the most important node modules

It removes _a lot_ of the complexity around creating and maintaining a server.

---

### Example

This will give us a barebones server that we can _GET_ content.

```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(4000);
```

---

_Let's create a server right now!_

---

[Next lecture: EJS](../lecture-3-ejs)
