import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "ryuuikimap",
  apiKey: process.env.API_KEY,
});

export async function getPostBySlug(id) {
  try {
    const post = await client.get({
      endpoint: "river-map",
      queries: { filters: `id[equals]${id}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log("--getPostBySlug--");
    console.log(err);
  }
}
