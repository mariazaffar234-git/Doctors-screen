

import '../cssfiles/Sidebar.css'



function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="sidebar-label">Your Profile Access To</p>

      <ul className="sidebar-menu">
        <li><a href="#"><i className="fa-solid fa-table-cells-large"></i>Dashboard</a></li>
        <li className="active"><a href="#"><i className="fa-solid fa-user-doctor"></i>Doctors</a></li>
        <li><a href="#"><i className="fa-solid fa-user-group"></i>Patients</a></li>
        <li><a href="#"><i className="fa-solid fa-calendar-check"></i>Appointments</a></li>
        <li><a href="#"><i className="fa-solid fa-briefcase-medical"></i>Services</a></li>
        <li><a href="#"><i className="fa-solid fa-credit-card"></i>Subscriptions</a></li>
        <li><a href="#"><i className="fa-solid fa-money-bill-transfer"></i>Transactions</a></li>
        <li><a href="#"><i className="fa-solid fa-comment-dots"></i>User Inquiries</a></li>
        <li><a href="#"><i className="fa-solid fa-gear"></i>Settings</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;

     
  