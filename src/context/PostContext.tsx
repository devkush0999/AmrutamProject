import React, { createContext, useReducer, ReactNode } from 'react';

interface Post {
  id: number;
  user?: string;
  question?: string;
  thought?: string;
  likes: number;
  comments?: number;
  saved: boolean;
}

interface State {
  posts: Post[];
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  posts: [],
};

const postReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LIKE_POST':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload
            ? { ...post, likes: post.likes + 1 }
            : post
        ),
      };
    case 'SAVE_POST':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload
            ? { ...post, saved: !post.saved }
            : post
        ),
      };
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export const PostContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
