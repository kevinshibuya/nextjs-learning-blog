import { createClient } from "next-sanity";
import { IPost } from "../types/posts";

const client = createClient({
  projectId: "exhorpxe",
  dataset: "production",
  apiVersion: "2023-10-11",
  useCdn: false,
});

export const getSortedPostsData = async (): Promise<IPost[]> => {
  return await client.fetch(
    `*[_type == "post"]{ _id, date, title, image{ asset->{ url } }, author->{ name, image{ asset->{ url } } } } | order(_createdAt desc)`
  );
};

export const getAllPostIds = async (): Promise<
  {
    params: {
      id: string;
    };
  }[]
> => {
  const postsIds = await client.fetch(`*[_type == "post"]{ _id }`);

  return postsIds.map((post: { _id: string }) => {
    return {
      params: {
        id: post._id,
      },
    };
  });
};

export const getPostData = async (id: string): Promise<IPost> => {
  return await client.fetch(
    `*[_id == '${id}'][0]{ title, date, content, author->{ name, image{ asset->{ url } } } }`
  );
};
