import { createClient } from "next-sanity";

const client = createClient({
  projectId: "exhorpxe",
  dataset: "production",
  apiVersion: "2023-10-11",
  useCdn: false,
});

export async function getSortedPostsData() {
  return await client.fetch(
    `*[_type == "post"]{ _id, date, title, author->{name, image} } | order(_createdAt desc)`
  );
}

export async function getAllPostIds() {
  const postsIds = await client.fetch(`*[_type == "post"]{ _id }`);

  return postsIds.map((post) => {
    return {
      params: {
        id: post._id,
      },
    };
  });
}

export async function getPostData(id) {
  return await client.fetch(
    `*[_id == '${id}'][0]{ title, date, content, author->{name, image} }`
  );
}
