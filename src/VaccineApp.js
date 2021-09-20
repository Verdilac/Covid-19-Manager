import Boot from "./Components/Boot";
import BarChart from "./Components/BarChart";
import FirebaseCrud from "./FirebaseCrud";
import { Container } from "semantic-ui-react";
import NavBar from "./Components/NavBar";
import VaccineCalc from "./Components/VaccineCalc";
import background from "./Components/img/bkImg.jpg"

function VaccineApp() {
  return (
    <div>
      
      <NavBar />
      <div  style={{ backgroundImage: `url(${background})`} }>
      <VaccineCalc />

      <Boot />
      <BarChart />
      </div>

      <Container>{<FirebaseCrud></FirebaseCrud>}</Container>
    </div>
  );
}

export default VaccineApp;