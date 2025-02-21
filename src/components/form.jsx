import Info from './Info.jsx';
import EduInfo from './eduInfo.jsx';
import CompInfo from './comInfo.jsx';
import { useState } from 'react';
import '../styles/form.css';

export default function Form(){
    const [Pname, setPname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [Sname, setSname] = useState('');
    const [city, setCity] = useState('');
    const [passYear, setPassYear] = useState('');
    const [Cname, setCname] = useState('');
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event){
        event.preventDefault()
        setSubmitted(true);
    }

    function handleEdit(event){
        event.preventDefault()
        setSubmitted(false);
    }

    if(submitted){
        return (
            <div className="submittedData">
            <h4>Submitted data:</h4>
            <ul>
              <li>{Pname}</li>
              <li>{email}</li>
              <li>{phone}</li>
              <li>{Sname}</li>
              <li>{passYear}</li>
              <li>{Cname}</li>
              <li>{title}</li>
              <li>{start}</li>
              <li>{end}</li>
            </ul>
            <button id="EditButton" onClick={handleEdit}>Edit Form</button>
          </div>          
        )
    }

    return ( 
            <form action="Submit">
                <Info Pname={Pname} setPname={setPname} email={email} setEmail={setEmail}  phone={phone} setPhone={setPhone}/>
                <EduInfo Sname={Sname} setSname={setSname} city={city} setCity={setCity}  passYear={passYear} setPassYear={setPassYear}/>
                <CompInfo Cname={Cname} setCname={setCname} title={title} setTitle={setTitle}  start={start} setStart={setStart} end={end} setEnd={setEnd}/>
                <button id='submitButton' onClick={handleSubmit}>Submit Form</button>
            </form>
    )

}