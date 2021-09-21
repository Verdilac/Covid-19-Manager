import Boot from "./Boot";
import BarChart from "./BarChart";
import FirebaseCrud from "./FirebaseCrud";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import VaccineCalc from "./VaccineCalc";
import background from "./img/bkImg.jpg"

function VaccineApp() {
  return (
    <div>
      
      {/* <NavBar /> */}
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