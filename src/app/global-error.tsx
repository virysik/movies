"use client";

import { Button, Typography } from "@mui/material";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Typography component="h2" variant="h4" mb={2}>
          Something went wrong!
        </Typography>
        <Button variant="contained" onClick={() => reset()}>
          Try again
        </Button>
      </body>
    </html>
  );
}
