import Link from "next/link";
import { Box } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      component="main"
      sx={{
        color: "text.primary",
        "& a": {
          color: "info.dark",
        },
      }}
    >
      <h2>404 Not Found</h2>
      <p>Could not find the requested movie.</p>
      <Link href="/">Go Back</Link>
    </Box>
  );
}
