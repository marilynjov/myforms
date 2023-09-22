import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"});
  const [validationStates, validation] = useState({email:true, password:true});

  const handleEmailChange = ((e) => {
    setFormValues({ ...formValues, email: e.target.value });
  });
 
  const handlePasswordChange = ((e) => {

    setFormValues({...formValues, password: e.target.value})
  });
 
  const handleSelectChange = ((e) => {
    setFormValues({...formValues, favClass: e.target.value})
  });

  const clickSubmit = (() => {
    const noVacioP = formValues.password !==""; 
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email);

    if (noVacioP && correoValido) {
      validation({...validationStates,email:true, password:true})  
    
      setFormValues({...formValues, email: "", password:""})
      
      alert('Formulario enviado con éxito');


    } else {
      

      validation({...validationStates,email:correoValido,password:noVacioP})  
      // validation({...validationStates,password:VacioP})



      alert('Por favor, completa los campos correctamente.');
    }


  })

  return (
    <div>
     <h1>Ejemplo de formularios!</h1>
    
     <Form>
     <Form.Group className="mb-6" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} isInvalid={!validationStates.email}/>
       { !validationStates.emailState && <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>}
       <Form.Control.Feedback type="invalid">Ingresa un correo electrónico válido</Form.Control.Feedback>
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} isInvalid={!validationStates.password}/>
       { !validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>}
       <Form.Control.Feedback type="invalid">Ingresa una contraseña válida</Form.Control.Feedback>
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicCheckbox">
       <Form.Label>Favorite Class</Form.Label>
       <Form.Select onChange={handleSelectChange}>
         <option value="1">ISIS3710</option>
         <option value="2">Programación con tecnologias web</option>
       </Form.Select>
     </Form.Group>

     <Button variant="primary" onClick={clickSubmit}>
       Submit
     </Button>
   </Form>
   </div>
  );
}

export default App;
