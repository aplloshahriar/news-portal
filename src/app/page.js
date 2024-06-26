import SideBar from "@/components/ui/SideBar/SideBar";
import LatestNews from "@/components/ui/shared/LatestNews/LatestNews";
import { Grid } from "@mui/material";

const HomePage = () => {
  // throw new Error();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews></LatestNews>
        </Grid>
        <Grid item xs={4}>
          <SideBar></SideBar>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;