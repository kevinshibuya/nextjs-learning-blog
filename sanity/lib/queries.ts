import { groq } from "next-sanity";

export const postsQuery = groq`*[_type == "post"]`;

export const sortedPostsQuery = groq`*[_type == "post" && defined(slug.current)]{ slug{ current }, publishedAt, title, categories[]->{ description, title }, mainImage{ alt, asset->{ url } }, author->{ name, image{ asset->{ url } } } } | order(publishedAt desc)`;

export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{ "params": { "slug": slug.current } }`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ slug{ current }, publishedAt, title, categories[]->{ description, title }, mainImage{ alt, asset->{ url } }, author->{ name, image{ asset->{ url } } }, body }`;
