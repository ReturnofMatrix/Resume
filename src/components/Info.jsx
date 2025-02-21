export default function Info({Pname, setPname, email, setEmail, phone, setPhone}){
    return (
        <div className='pInfo'>
            <label htmlFor="nameP">Name : </label>
            <input required type="text" id="nameP" name="nameP" value={Pname} onChange={(e) => setPname(e.target.value)}/>
            <label htmlFor="phone">Phone No. : </label>
            <input required type="phone" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <label htmlFor="email">Email : </label>
            <input required type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
    )
}