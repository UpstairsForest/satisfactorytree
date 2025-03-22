import React from "react";
import SidebarButton from "./SidebarButton";

const Sidebar = ({onAddNode}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: isOpen ? "200px" : "40px",
                backgroundColor: "#111",
                color: "#fff",
                transition: "width 0.3s ease",
                overflow: "hidden",
                zIndex: 10,
            }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div style={{padding: "10px"}}>
                <div style={{marginBottom: "12px"}}>☰</div>
                {isOpen && (
                    <>
                        <SidebarButton label="Button One" onClick={onAddNode}/>
                        <SidebarButton label="Button Two" onClick={onAddNode}/>
                    </>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
