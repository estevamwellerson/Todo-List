import classes from './button.module.css'

const Button = ({ className, ...props }) => {
  return <button className={`${classes.btn} ${className}`} {...props} />
}

export default Button;
