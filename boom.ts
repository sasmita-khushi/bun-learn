Bun.serve({
  async fetch(req) {
    let path = new URL(req.url).pathname;

    if (path === "/") {
      return new Response(Bun.file("boom.html"), {
        headers: { "Content-Type": "text/html" },
        status: 200,
      });
    } else if (path === "/data") {
      if (req.method === "POST") {
        console.log("POST request received");
        let data = await req.formData();
        console.log(
          "name : ",
          data.get("name"),
          "age : ",
          data.get("age"),
          "email: ",
          data.get("email")
        );
        let file = data.get("pic");
        console.log(file);

        if (!file) {
          return new Response("attach  a file to be uploded", { status: 400 });
        } else {
          await Bun.write(`x/${file.name}`, file!);
        }

        return new Response("ok", { status: 200 });
      } else {
        return new Response("bad request", { status: 400 });
      }
    } else {
      return new Response("Not Found", { status: 404 });
    }
  },
});
