Bun.serve({
  async fetch(req) {
    let url = new URL(req.url);
    //console.log(`.${url.pathname}`);

    const file = Bun.file(`.${url.pathname}`);
    // console.log(file.type);
    let fileExists = await file.exists();
    if (fileExists) {
      return new Response(file, {
        headers: { "Content-Type": "text/plain" },
      });
    } else {
      return new Response("File not found", { status: 404 });
    }
  },
  port: 3000,
});
