var koa = require('koa');
var app = koa();
app.use(require('koa-static')('./www'));
app.listen(7000);
