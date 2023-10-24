export interface IPost {
  title: string;
  publishedAt: string;
  body: [];
  mainImage: {
    alt: string;
    asset: {
      url: string;
    };
  };
  author: IAuthor;
  slug: {
    current: string;
  };
  categories: { title: string; description: string }[];
}
export interface IAuthor {
  name: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}
