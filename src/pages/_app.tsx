import {
  AppBar,
  Box,
  Divider,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";

import { CacheProvider } from "@emotion/react";
import Link from "next/link";
import createEmotionCache from "../lib/createEmotionCache";
import { venueLight } from "@venuedevops/venue-theme";

const clientSideEmotionCache = createEmotionCache();

function App({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={venueLight}>
        <AppBar sx={{ height: "50px" }}>
          <Box
            paddingLeft="32px"
            display="flex"
            gap="16px"
            alignItems="center"
            height="100%"
            sx={{
              color: venueLight.palette.primary.contrastText,
              cursor: "pointer",
              "& a": {
                color: venueLight.palette.primary.contrastText,
                textDecoration: "none",
              },
            }}
          >
            <Typography variant="subtitle1">
              <Link href="/">Home</Link>
            </Typography>
            <Divider
              orientation="vertical"
              sx={{ borderColor: venueLight.palette.primary.contrastText }}
            />
            <Typography variant="subtitle1">
              <Link href="/edit">Make Changes to a Git Repo</Link>
            </Typography>
            <Divider
              orientation="vertical"
              sx={{ borderColor: venueLight.palette.primary.contrastText }}
            />
            <Tooltip title="coming soon" arrow={true}>
              <Typography variant="subtitle1">Create a New Repo</Typography>
            </Tooltip>
          </Box>
        </AppBar>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
