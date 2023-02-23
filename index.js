const Notification = (props) => {
  //  Write your code here.
  const { name,className, imageUrl} = props
  return (
    <div className={`notification-container ${className}`}>
        <img className="icon" src={imageUrl} />
        <p className="message">{name}</p>
    </div>;
  )
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <h1 className="head">Notification</h1>
    <div className="list-container">
        <Notification
        name="Information Message"
        className="bg1"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
        <Notification name="Success Message" className="bg2" imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
        <Notification name="Warning Message" className="bg3" imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
        <Notification name="Error Message" className="bg4" imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
