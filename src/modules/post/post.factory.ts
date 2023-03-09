export const createPost = (data: Partial<AppDomain.Post>): AppDomain.Post => {
  return {
    id: "post123",
    title: "This is a title",
    content: "This is a content",
    createdAt: new Date(),
    ...data,
  };
};
