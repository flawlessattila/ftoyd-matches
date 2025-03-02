import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Match } from "../model/match.types";
import { customFetch } from "@/shared/lib/custom-fetch";

export const matchQueryOptions = queryOptions({
  queryKey: ["matches"],
  queryFn: async (): Promise<Match[]> => {
    const response = await customFetch(
      `${process.env.NEXT_PUBLIC_API_ORIGIN}/fronttemp`,
      { cache: "no-store" }
    );

    const json = await response.json();
    if (response.status > 299 || !json.ok) {
      throw new Error("wrong-status");
    }

    return json.data.matches;
  },
});

export const useMatches = () => {
  return useSuspenseQuery(matchQueryOptions);
};
