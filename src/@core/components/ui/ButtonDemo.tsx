import { ButtonHTMLAttributes, FC } from 'react'

export interface ButtonDemoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const ButtonDemo: FC<ButtonDemoProps> = ({
	className,
	children,
	color = 'indigo',
	...props
}) => {

	// const buttonClass = clsx(className, 'h-10 py-2 px-4 text-white rounded-md', `bg-${color}-500`)
	const buttonClass = `${className} h-10 py-2 px-4 text-white rounded-md bg-${color}-500`

	return (
		<button
			className={buttonClass} {...props}>
			{children}
		</button>
	)
}

export default ButtonDemo