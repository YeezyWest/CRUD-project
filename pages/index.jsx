import Head from "next/head";
import Image from "next/image";
import { useQuery, QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ArticleCollection from "../components/ArticleCollection";

const queryClient = new QueryClient();

function Content() {
  const { data, isLoading, error } = useQuery("myData", () =>
    fetch("https://dev.to/api/articles").then((res) => res.json())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

// const fetcher = () =>(
//   fetch("https://dev.to/api/articles").then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
// );
const Home = () => {
  // const { data: articles, isLoading, error } = useQuery("articles", fetcher);

  // if (isLoading) return "Loading...";
  // if (error) return `An error has occurred: ${error.message}`;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Article</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </div>
  );
};

export default Home;
