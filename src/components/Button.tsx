interface ButtonProps {
  label: string
  loading?: boolean
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  disabled?: boolean
  bgColor?: string
  color?: string
}

function Button({
  label,
  loading = false,
  icon: Icon,
  bgColor = "PINK",
  color = "PINK",
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={loading}
      className={`
      w-full bg-${bgColor} text-${color} 
      h-14 px-8 mt-3 rounded-xl font-medium disabled:cursor-not-allowed disabled:opacity-50 capitalize flex items-center justify-center gap-2
  `}
      {...rest}
    >
      {Icon && <Icon className="text-xl" />}
      {loading ? "Carregando..." : label}
    </button>
  )
}

export default Button
