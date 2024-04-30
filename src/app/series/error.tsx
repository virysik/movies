"use client";

import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box component="main" color={"text.primary"}>
      <Typography component="h2" variant="h4" mb={2}>
        Something went wrong!
      </Typography>
      <Button variant="contained" onClick={() => reset()}>
        Try again
      </Button>
    </Box>
  );
}
