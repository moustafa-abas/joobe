
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import quizReducer from './quizSlice';
import userReducer from './userSlice';
import jobsReducer from './JobsSlice';
import communityReducer from './CommunitySlice';
import coursesReducer from './CoursesSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedQuizReducer = persistReducer(persistConfig, quizReducer);
const persistedJobsReducer = persistReducer(persistConfig, jobsReducer);
const persistedCommunityReducer = persistReducer(persistConfig, communityReducer);
const persistedCoursesReducer = persistReducer(persistConfig, coursesReducer);

const rootReducer = {
  user: persistedUserReducer,
  quizzes: persistedQuizReducer,
  jobs: persistedJobsReducer,
  community: persistedCommunityReducer,
  courses: persistedCoursesReducer
};

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);