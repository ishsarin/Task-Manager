

const Button = ({color,text,clickFunc}) => {


  return (
    <div>
      <button  className="btn btn-block" onClick={clickFunc} style={{backgroundColor : color}}>{text}</button>
    </div>
  )
}

Button.defaultProps = {
    color:'blue',
    text:'Hello, default message inside btn'
}

export default Button
