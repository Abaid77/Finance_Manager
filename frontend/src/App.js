import "./App.css";
import AppBar from "./components/AppBar";
import Table from "./components/Table";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <AppBar />
      <div className="App">Welcome to Finance Manager</div>
      <div>
        <Grid>
          <Grid>
            <Table />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
