import React from 'react';

const AnnouncementStyle = {
    height: "30px",
    backgroundColor: "teal",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: 500
}

const Announcement = () => {
    return (
        <div style={AnnouncementStyle}>
            <p>Super Deal! Free Shipping Orders Over $50</p>
        </div>
    );
};

export default Announcement;