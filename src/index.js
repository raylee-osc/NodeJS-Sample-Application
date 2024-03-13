const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

const PORT = 3100;

router.get("/", (ctx, next) => {
    ctx.body = `Hello Wolrd! & Current Request URL : ${ctx.req.url}`;
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(PORT, () => {
    console.log(`KoaJS Test Server Running at ${PORT}`)
});