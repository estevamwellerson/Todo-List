
const Button = ({ className, ...props }) => {
  return <button className={`btn ${className}`} {...props} />
}

export default Button;
