import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import BarChart from "./BarChart";
import SingleSeriesTimeline from "./singleTimeline";
import MultiSeriesTimeline from "./MultiTimeline";
import Pie_ from "./Pie";
import Treemap_ from "./treeMap";
import Grid from "@mui/material/Grid";
import Heatmap from "./heatmap";
import StackedBar from "./StackedBar";
import Scatterplot from "./Scatterplot";

function CardGrid({ apiKey, setHome }) {
  setHome(false);
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item>
        <Card sx={{ minWidth: 275, width: 450 }}>
          <CardContent>
            <BarChart apiKey={apiKey}></BarChart>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ minWidth: 275, width: 450 }}>
          <CardContent>
            <SingleSeriesTimeline apiKey={apiKey}></SingleSeriesTimeline>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ minWidth: 275, width: 450 }}>
          <CardContent>
            <MultiSeriesTimeline apiKey={apiKey}></MultiSeriesTimeline>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ minWidth: 275, width: 450 }}>
          <CardContent>
            <Pie_ apiKey={apiKey}></Pie_>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ minWidth: 275, width: 450 }}>
          <CardContent>
            <Treemap_ apiKey={apiKey}></Treemap_>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ minWidth: 275, width: 450 }}>
          <CardContent>
            <Heatmap apiKey={apiKey}></Heatmap>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ minWidth: 275, width: 450 }}>
          <CardContent>
            <StackedBar apiKey={apiKey}></StackedBar>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ minWidth: 275, width: 450 }}>
          <CardContent>
            <Scatterplot apiKey={apiKey}></Scatterplot>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CardGrid;
