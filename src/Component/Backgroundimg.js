import pic from "../Assets/mypic5.jpg"; 

function BackgroundImg(props) {
  return (
    <div style={{ backgroundImage:`url(${pic})`,width:"100%",height:"100vh",backgroundSize:"cover",backgroundPosition:"top right"}}>
        {props.children}
    </div>
  );
}

export default BackgroundImg;

//