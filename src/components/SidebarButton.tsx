import React from "react";

const SidebarButton = ({label, onClick}) => {
    return (
        <button
            onClick={onClick}
            style={{
                display: "block",
                marginBottom: "8px",
                padding: "10px 12px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
            }}
        >
            {label}
        </button>
    );
};

export default SidebarButton;
