declare global {
  namespace AppDomain {
    interface Post {
      id: string;
      title: string;
      content: string;
      createdAt: Date;
    }
  }
}

export {};
