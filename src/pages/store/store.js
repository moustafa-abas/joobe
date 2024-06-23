// import { configureStore } from "@reduxjs/toolkit";
// import quizReducer from'./quizSlice'
// import userReducer from'./userSlice'
// const store=configureStore({
//     reducer:{
//         user:userReducer,
//         Quizzes:quizReducer
//     }
// })
// export default store
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import quizReducer from './quizSlice';
import userReducer from './userSlice';
import jobsReducer from './JobsSlice';
import communityReducer from './CommunitySlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedQuizReducer = persistReducer(persistConfig, quizReducer);
const persistedJobsReducer = persistReducer(persistConfig, jobsReducer);
const persistedCommunityReducer = persistReducer(persistConfig, communityReducer);

const rootReducer = {
  user: persistedUserReducer,
  quizzes: persistedQuizReducer,
  jobs: persistedJobsReducer,
  community: persistedCommunityReducer
};

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);