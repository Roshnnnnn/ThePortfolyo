import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ marginRight: "1rem", width: "20rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                minHeight: "100px",
              }}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "12px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          flexShrink: "0",
          marginLeft: "1rem",
        }}
      >
        <img
          src="https://images.pexels.com/photos/5541019/pexels-photo-5541019.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Contact Us Image"
          style={{
            height: "20rem",
            width: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        />
      </div>
    </div>
  );
};

export default ContactForm;
