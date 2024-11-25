import React from "react";

const Footer = () => {
  const footerStyles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#1f2937", // Match navbar background
      color: "#ffffff", // White text
      padding: "10px 20px",
      borderTop: "2px solid #2563eb", // Optional: Add a border for better separation
    },
    content: {
      textAlign: "center",
      fontSize: "0.9rem", // Slightly smaller font size
    },
    text: {
      margin: "5px 0", // Space between lines
      transition: "color 0.3s", // Smooth transition for hover effect
    },
    hover: {
      color: "#60a5fa", // Light blue hover color
    },
  };

  return (
    <footer style={footerStyles.container}>
      <div style={footerStyles.content}>
        <p
          style={footerStyles.text}
          onMouseOver={(e) => (e.target.style.color = footerStyles.hover.color)}
          onMouseOut={(e) => (e.target.style.color = footerStyles.color)}
        >
          &copy; 2024 By Thales
        </p>
        <p
          style={footerStyles.text}
          onMouseOver={(e) => (e.target.style.color = footerStyles.hover.color)}
          onMouseOut={(e) => (e.target.style.color = footerStyles.color)}
        >
          Developed by Byte Busters
        </p>
      </div>
    </footer>
  );
};

export default Footer;
