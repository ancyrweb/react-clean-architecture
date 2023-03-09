import produce, { Draft } from "immer";
import { Reducer } from "redux";
import { AllActions } from "./../core/redux.actions";

type PostState = {
  allPosts: Record<string, AppDomain.Post>;
};

const defaultState: PostState = {
  allPosts: {},
};

export const postReducer: Reducer<PostState, AllActions> = produce(
  (draft: Draft<PostState>, action: AllActions) => {
    switch (action.type) {
      case "POST_CREATED": {
        draft.allPosts[action.post.id] = action.post;
      }
    }
  },
  defaultState
);
