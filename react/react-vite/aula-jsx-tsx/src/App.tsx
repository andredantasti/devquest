import "./App.css";
import { Card } from "./components/Card";
import { Dashboard } from "./components/Dashboard";

import { Tasks } from "./components/Tasks";

function App() {


  return (
    <>
      <Card>
        <Tasks></Tasks>
      </Card>
      <Card>
        <Dashboard username={"André Alexandre"}></Dashboard>
      </Card>
      
    </>
  );
}

export default App;
