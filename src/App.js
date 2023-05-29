import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App bg-red-300">
      {showEmployees ?  (
        <div>
          <input type="text" onChange={(e) => {
            setRole(e.target.value);
          }} />
          <Employee name="Sune" role="presentation" />
          <Employee name="Serein" role={role} />  
          <Employee  name="Kagami"/>  
        </div>
      ) : 
        (<p>Cant not permissions to access</p>)
      }
    </div>
  );
}

export default App;
