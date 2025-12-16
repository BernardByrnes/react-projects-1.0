import logo from "./logo.svg";
import { social, links } from "./data";
import { useGlobalContext } from "./Context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="hey" className="logo" />
      </div>
    </aside>
  );
};
export default Sidebar;
