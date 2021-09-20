import PatientMenu from './Components/PatientMenu.js';
import InputPatient from './Components/InputPatient.js';
import InputForm from './Components/InputForm.js';
import ReactModal from './Components/ReactModal.js';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirebaseCrud from './Components/FirebaseCrud.js';

function App() {

  return (
    <div className="App">
      <FirebaseCrud/>
    </div>
  );
}
export default App;