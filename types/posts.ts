export interface IPost {
  _id: string;
  title: string;
  publishedAt: string;
  body: string;
  content: [];
  mainImage: {
    asset: {
      url: string;
    };
  };
  author: IAuthor;
  slug: {
    current: string;
  };
}

export interface IAuthor {
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
}
