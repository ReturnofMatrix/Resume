export default function EduInfo({Sname, setSname, city, setCity, passYear, setPassYear}){
    return (
        <div className="eduInfo">
            <label htmlFor="Sname">School Name : </label>
            <input required type="text" id="Sname" name="Sname" value={Sname} onChange={(e) => setSname(e.target.value)}/>
            <label htmlFor="city">City : </label>
            <input required type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)}/>
            <label htmlFor="email">Passing out year : </label>
            <input required type="number" id="email" name="year" value={passYear} onChange={(e) => setPassYear(e.target.value)}/>
        </div>
    )
}