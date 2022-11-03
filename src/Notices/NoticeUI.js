import { ThemeProvider } from "@emotion/react";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";


const theme = createTheme(theme => ({
    AppBar: {
        display: "flex",
        justifyContent: "center",
        align: "center",
        }
}));


export default function NoticeUI() {
  const cookies = useCookies(["XSRF-TOKEN"]);
  const [notices, setNotices] = useState([]);

  const handleFetch = async () => {
    const notice = await fetch("/notices");
    if(notice.status !== 200) {
        throw new Error("No data to fetch!");
    }
    const data = await notice.json();

    setNotices(data);
    if (data === null || data === undefined) {
      setNotices("nothing here");
    }
  };
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar  align="center" justifyContent="center" textAlign="center">
        <Toolbar align="center" display="flex" justifyContent="center" textAlign="center">
          <Typography align="center" className="header" display="flex" justifyContent="center" variant="h6" color="inherit">
            Announcements:
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Notice board:
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              All news, updates and annoucements will be listed here:
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {notices.map((notice) => (
              <Grid item key={notice.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56",
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h4">
                      Start date - {notice.noticBegDt}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      {notice.noticeSummary}
                    </Typography>
                    <Typography>
                        {notice.noticeDetails}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h4">
                      End date - {notice.noticEndDt}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
