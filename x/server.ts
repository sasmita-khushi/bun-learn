Bun.serve({
  fetch(req) {
    let url = new URL(req.url);
   // console.log(url.pathname);

    if (url.pathname === "/") {
      return new Response("Welcome to HomePage");
    } else if (url.pathname === "/foo") {
      let x = { a: 10, b: "khushi" };
      let res = new Response(JSON.stringify(x), {
        headers: { "content-type": "application/json" },
      });
      return res;
    } else {
      return new Response("unrecognized type..");
    }

    // res.headers.set("content-type", "application/json");
  },
  port: 3000,
});

console.log("server started at port 3000");
