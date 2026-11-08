import '../cssfiles/DoctorsContent.css'
import { Link } from "react-router-dom";

function DoctorsContent() {
const doctors = [
        { id: 51655, name: "Cody Fisher", email: "cody.fisher@example.com", phone: "(219) 555-0114", specialist: "Skin Care", date: "Sep 23, 2024" },
        { id: 51655, name: "Kristin Watson", email: "kristin@example.com", phone: "(308) 555-0121", specialist: "Skin Care", date: "Sep 23, 2024" },
        { id: 51655, name: "Cameron Williamson", email: "cwcameron@example.com", phone: "(229) 555-0109", specialist: "Skin Care", date: "Sep 23, 2024" },
        { id: 51655, name: "Theresa Webb", email: "theresaweb@example.com", phone: "(702) 555-0122", specialist: "Skin Care", date: "Sep 23, 2024" },
    ];
return (
        <>
           <main className="doctors">
                <h2 className="doctors-title">Doctor</h2>

                {/* Tabs + filters */}
                <div className="doctors-top">
                    <div className="tabs">
                        <button className="tab active">Registered</button>
                        <button className="tab">New Requests</button>
                    </div>

                    <div className="filters">
                        <select className="filter"><option>By service</option></select>
                        <select className="filter"><option>Sort by</option></select>
                    </div>
                </div>

                {/* Card with search + table */}
                <div className="card">
                    <div className="card-top">
                        <input className="search" type="text" placeholder="Search" />
                        <Link to="Add-Doctor" className="btn-primary">Add Doctor</Link>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Doctor</th>
                                <th>Email</th>
                                <th>Contact no.</th>
                                <th>Specialist in</th>
                                <th>Added on</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td>
                                        <div className="doctor-cell">
                                            <span className="doctor-avatar">{d.name[0]}</span>
                                            {d.name}
                                        </div>
                                    </td>
                                    <td>{d.email}</td>
                                    <td>{d.phone}</td>
                                    <td>{d.specialist}</td>
                                    <td>{d.date}</td>
                                    <td><i className="fa-solid fa-ellipsis-vertical"></i></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="pagination">
                        <button className="page active">1</button>
                        <button className="page">2</button>
                        <button className="page">3</button>
                        <button className="page">4</button>
                        <button className="page">5</button>
                    </div>
                </div>
            </main>




        </>
    )

};

export default DoctorsContent;
