import { Link } from "react-router-dom"

interface ButtonTextProps {
  title: string
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  to: string
}

const ButtonText: React.FC<ButtonTextProps> = ({ title, icon: Icon, to }) => {
  return (
    <Link to={to} className="bg-none text-PINK">
      <span className="first-letter:capitalize flex items-center gap-2">
        {Icon && <Icon className="text-xl" />}
        {title}
      </span>
    </Link>
  )
}

export default ButtonText
