export default function CompInfo({Cname, setCname, title, setTitle, start, setStart, end, setEnd}){
    return (
        <div className="compInfo">
            <label htmlFor="nameC">Company Name : </label>
            <input required type="text" id="nameC" name="nameC" value={Cname} onChange={(e) => setCname(e.target.value)}/>
            <label htmlFor="title">Job Title : </label>
            <input required type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label htmlFor="start">Start Date : </label>
            <input required type="date" id="start" name="start" value={start} onChange={(e) => setStart(e.target.value)}/>
            <label htmlFor="end">End Date : </label>
            <input required type="date" id="end" name="end" value={end} onChange={(e) => setEnd(e.target.value)}/>
        </div>
    )
}