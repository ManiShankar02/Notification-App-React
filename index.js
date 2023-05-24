const Notification= props =>{
    const {className, icon, message} = props;
    const containerClassName = {`notification-container ${className}`}

  return (
    <div className={containerClassName}>
      <img className="icon" src={icon} />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <div className="sub-container">
      <h1 className="head"> Notifications</h1>
      <div className = "notification-container">
          <Notification 
            className ="image1"
            icon = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
            message = "Information Message"
          />

           <Notification 
            className ="image2"
            icon = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            message = "Success Message"
          />

           <Notification 
            className ="image3"
            icon = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
            message = "Warning Message"
          />

           <Notification 
            className ="image4"
            icon = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
            message = "Error Message"
          />
          
      </div>
        
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
