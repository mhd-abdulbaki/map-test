import { Box, Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Box sx={{ px: "40px", height: "500px", position: "relative" }}>
      <Skeleton
        variant="rectangular"
        sx={{
          height: "100%",
          width: "100%",
          borderRadius: "16px",
          mt: "40px",
          mx: "auto",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "50px",
          zIndex: "9999",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Skeleton
          variant="rectangular"
          height={40}
          width={100}
          sx={{ borderRadius: "20px" }}
        />
        <Skeleton variant="circular" height={40} width={40} />
        <Skeleton variant="circular" height={40} width={40} />
        <Skeleton variant="circular" height={40} width={40} />
      </Box>
    </Box>
  );
}
