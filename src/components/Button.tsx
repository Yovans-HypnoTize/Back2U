import { Button as MuiButton } from "@mui/material"

interface ButtonComponent {
    variant?: "contained" | "outlined" | "text",
    type?: "button" | "submit" | "reset",
    title: string,
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    handleOnClick?: () => void;
    sx?: object;
    disabled?: boolean;
}
const Button:React.FC<ButtonComponent> = ({
    variant = "contained",
    type = "button",
    title,
    endIcon,
    startIcon,
    disabled,
    sx,
    handleOnClick = () => {},
  }) => {
  return (
    <MuiButton 
    type={type}
    variant={variant}
    sx={sx}
    color="primary"
    startIcon={startIcon}
    disabled={disabled}
    endIcon={endIcon}
    onClick={handleOnClick}>{title}</MuiButton>
  )
}

export default Button