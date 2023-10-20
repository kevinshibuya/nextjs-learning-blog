export interface IPost {
  _id?: string;
  title: string;
  date: string;
  body: string;
  content?: string;
  image?: {
    asset: {
      url: string;
    };
  };
  author: IAuthor;
}

export interface IAuthor {
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
}
