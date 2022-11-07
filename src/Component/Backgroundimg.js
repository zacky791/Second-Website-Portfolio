import './Background.css'

function BackgroundImg(props) {
  return (
    <div className="backgroundimg">
        {props.children}
    </div>
  );
}

export default BackgroundImg;
