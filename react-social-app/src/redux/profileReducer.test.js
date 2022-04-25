import profileReducer, {
  addPost,
  deletePost,
  likeTogglePost,
} from "./profileReducer";

let state = {
  postsData: [
    {
      id: 1,
      post: "С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия.",
      likesCount: 1023,
    },
    {
      id: 2,
      post: "Если у вас есть какие то интересные предложения, обращайтесь! Студия Web-Boss всегда готова решить любую задачу.",
      likesCount: 319,
    },
    {
      id: 3,
      post: "Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.",
      likesCount: 238,
    },
    {
      id: 4,
      post: "С другой стороны рамки и место обучения кадров способствует подготовки и реализации модели развития.",
      likesCount: 194,
    },
    {
      id: 5,
      post: "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития.",
      likesCount: 739,
    },
  ],
};

test("length of posts should be incremented", () => {
  let action = addPost("Hey there.");

  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(6);
  expect(newState.postsData[0].post).toBe("Hey there.");
});

test("deleting post", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(4);
});

test("liking post", () => {
  let action = likeTogglePost(1);

  let newState = profileReducer(state, action);
  expect(newState.postsData[0].likesCount).toBe(1024);
});
