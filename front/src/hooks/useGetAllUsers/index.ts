/* eslint-disable prefer-destructuring */
import { useQuery } from "react-query";

import axios from "axios";
import { Filter, UserProps } from "./types";

export const QUERY_USERS_KEY = "QUERY_USERS_KEY";

export async function getAllUsers({ page, results }: Filter) {
  try {
    const { data } = await axios.get("http://localhost:3000/user/all/", {
      params: {
        ...(page ? { page } : {}),
        ...(results ? { results } : { results: 12 }),
      },
    });

    return data as UserProps;
  } catch (error) {
    return Promise.reject(error);
  }
}

export function useGetAllUsers({ results, page }: Filter) {
  const { data, isLoading } = useQuery(
    [QUERY_USERS_KEY, page, results],
    () => getAllUsers({ results }),
    { keepPreviousData: true }
  );

  return {
    data,
    isLoading,
  };
}
