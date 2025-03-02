import { HomePage } from "@/pages/home";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { matchQueryOptions } from "@/entities/match";
import { getQueryClient } from "@/shared/lib/get-query-client";

const Home = () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(matchQueryOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePage />
    </HydrationBoundary>
  );
};

export const dynamic = "force-dynamic";

export default Home;
