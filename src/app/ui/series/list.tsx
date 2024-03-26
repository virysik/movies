// app/posts/page.jsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPopularSeries } from "@/app/lib/data";

export default function List() {
  // This useQuery could just as well happen in some deeper
  // child to <Posts>, data will be available immediately either way
  const { data } = useQuery({
    queryKey: ["popular series"],
    queryFn: fetchPopularSeries,
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
          "radial-gradient(circle, rgba(228,124,105,1) 48%, rgba(161,168,161,0.13001264450867056) 100%)",
      }}
    >
      {data
        ? data.results.map((serie) => (
            <ul key={serie.id} style={{ borderBottom: "1px solid black" }}>
              <li>
                <h3>{serie.name}</h3>
                <p>{serie.overview}</p>
              </li>
            </ul>
          ))
        : null}
    </div>
  );
}
