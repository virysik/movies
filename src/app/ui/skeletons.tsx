import { Box, Skeleton } from "@mui/material";

export function OneMediaImgSkeleton() {
  return (
    <Skeleton variant="rounded" width={"100%"} height={400} animation="wave" />
  );
}

export function OneMediaHeaderSkeleton() {
  return (
    <Skeleton
      variant="text"
      sx={{
        fontSize: "30px",
      }}
    />
  );
}

export function OneMediaTextSkeleton() {
  return <Skeleton variant="text" />;
}

export function OneMediaCircleSkeleton() {
  return <Skeleton variant="circular" width={40} height={40} />;
}

/* change skeleton here */
export function OneMediaSkeleton() {
  return (
    <Box>
      <OneMediaImgSkeleton />
      <Box>
        <OneMediaHeaderSkeleton />
        <OneMediaCircleSkeleton />
        <OneMediaTextSkeleton />
        <OneMediaTextSkeleton />
        <OneMediaTextSkeleton />
        <OneMediaTextSkeleton />
      </Box>
    </Box>
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
      height={300}
      animation="wave"
      sx={{
        mb: "4px",
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
