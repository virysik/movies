import { Box, Skeleton } from "@mui/material";

/* change skeleton here */
export function OneMovieSkeleton() {
  return (
    <Skeleton
      variant="rectangular"
      width={"100%"}
      height={"200px"}
      animation="wave"
      sx={{
        maxWidth: { xs: "380px", sm: "346px", md: "264px" },
        borderBottomLeftRadius: "6px",
        borderBottomRightRadius: "6px",
      }}
    />
  );
}

export function TextSkeleton() {
  return (
    <Skeleton
      variant="rectangular"
      width={"100%"}
      height={"28px"}
      animation="wave"
      sx={{
        maxWidth: { xs: "380px", sm: "346px", md: "264px" },
        borderBottomLeftRadius: "6px",
        borderBottomRightRadius: "6px",
      }}
    />
  );
}
export function ImgSkeleton() {
  return (
    <Skeleton
      variant="rectangular"
      width={"100%"}
      animation="wave"
      sx={{
        mb: "4px",
        height: { xs: "580px", sm: "300px" },
        maxWidth: { xs: "380px", sm: "346px", md: "264px" },
        borderTopLeftRadius: "6px",
        borderTopRightRadius: "6px",
      }}
    />
  );
}

export function CardSkeleton() {
  return (
    <Box>
      <ImgSkeleton />
      <TextSkeleton />
    </Box>
  );
}
export default function CardsSkeleton() {
  return (
    <Box
      sx={{
        padding: 0,
        display: "grid",
        gap: { xs: "24px", md: "32px" },
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        },
      }}
    >
      {Array.from(Array(20).keys()).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </Box>
  );
}
