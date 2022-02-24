import { API } from './API';

export const getWorkoutList = async userId => {
  const url = `/users/${userId}/workout-list/all`;
  const response = await API.get(url);
  return response;
};

export const getWorkout = async (userId, title) => {
  const url = `/users/${userId}/workout-list/${title}`;
  const response = await API.get(url);
  return response;
};
