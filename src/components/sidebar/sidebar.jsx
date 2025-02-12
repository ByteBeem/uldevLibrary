import "./sidebar.scss";
import "../../App.scss";
import { IoHome} from "react-icons/io5";


const Sidebar = ({ active, closeSidebar }) => {
 
  return (
    <aside className={`sidebar ${active}`}>
      
      <div className="top">
        <h3>uldevSociety</h3>
        <div className="close_btn" onClick={closeSidebar}>
          &times;
        </div>
      </div>
  
      <div className="middle">
       
          <>
          
          </>
        
      </div>
  
      
    </aside>
  );
};  

export default Sidebar;
