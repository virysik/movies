// app/posts/page.jsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "@/app/lib/data";

export default function List() {
  // This useQuery could just as well happen in some deeper
  // child to <Posts>, data will be available immediately either way
  const { data } = useQuery({
    queryKey: ["popular movies"],
    queryFn: fetchPopularMovies,
  });

  // This query was not prefetched on the server and will not start
  // fetching until on the client, both patterns are fine to mix.
  // const { data: commentsData } = useQuery({
  //   queryKey: ["posts-comments"],
  //   queryFn: getComments,
  // });

  return (
    <div
      style={{
        background:
          "radial-gradient(circle, rgba(174,238,199,1) 48%, rgba(161,168,161,0.13001264450867056) 100%)",
      }}
    >
     
      {data
        ? data.results.map((movie) => (
            <ul key={movie.id} style={{ borderBottom: "1px solid black" }}>
              <li>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
              </li>
            </ul>
          ))
        : null}
    </div>
  );
}
