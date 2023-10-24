import { groq } from "next-sanity";

export const postsQuery = groq`*[_type == "post"]`;

export const sortedPostsQuery = groq`*[_type == "post" && defined(slug.current)]{ slug{ current }, publishedAt, title, categories[]->{ description, title }, mainImage{ alt, asset->{ url } }, author->{ name, image{ asset->{ url } } } } | order(publishedAt desc)`;

export const postsIdsQuery = groq`*[_type == "post"]{ _id }`;

export const postQuery = groq`*[_type == "post" && _id == slug.current][0]{ _id, title, date, image{ asset->{ url } }, content, author->{ name, image{ asset->{ url } } } }`;
