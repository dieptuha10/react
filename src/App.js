import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      { 
        name: "Sune", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/16532850/pexels-photo-16532850/free-photo-of-portrait-of-elegant-pensioner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      { 
        name: "Serein", 
        role: "Manager", 
        img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      { 
        name: "Kagami", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/4156467/pexels-photo-4156467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      { 
        name: "Kuragi", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      { 
        name: "Mirate", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/2110858/pexels-photo-2110858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      { 
        name: "Potato", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/6001808/pexels-photo-6001808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ]);
  
  function updateEmployee(id, newName, newRole) {
    
  }
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?  (
        <div>
          <input type="text" onChange={(e) => {
            setRole(e.target.value); }} 
          />
          <div className="flex flex-wrap justify-center">
            {
              employees.map((employee) => {
                console.log(uuidv4());
                return (
                  <Employee
                    key = {uuidv4()}
                    name = {employee.name} 
                    role = {employee.role} 
                    img = {employee.img}
                  />
                )
              })
            }
          </div>

        </div>
      ) : 
        (<p>Cant not permissions to access</p>)
      }
    </div>
  );
}

export default App;
