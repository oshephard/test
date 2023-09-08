import { Container, Typography } from "@mui/material";

function HomePage() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h6">Welcome to Venue Git!</Typography>
    </Container>
  );
}

export default HomePage;
