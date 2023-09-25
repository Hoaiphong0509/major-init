import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

const defaultButtonVariants = {
	default: '',
	outline: ''
}

const defaultSizeVariants = {
	default: '',
	sm: '',
	lg: ''
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: keyof typeof defaultButtonVariants;
	size?: keyof typeof defaultSizeVariants;
	isLoading?: boolean;
}

const Button: FC<IButtonProps> = ({
	className,
	children,
	variant = 'default',
	isLoading,
	size = 'default',
	color = 'indigo',
	...props
}) => {

	const buttonVariants = {
		...defaultButtonVariants,
		default: `bg-${color}-600 text-white hover:bg-${color}-500`,
		outline: `ring-2 ring-${color}-600 hover:bg-${color}-600 hover:text-white hover:ring-0`
	}

	const sizeVariants = {
		...defaultSizeVariants,
		default: 'h-10 py-2 px-4',
		sm: 'h-9 px-2',
		lg: 'h-11 px-8'
	}

	const buttonClass = clsx(
		`duration-100 active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color disabled:opacity-50 disabled:pointer-events-none`,
		buttonVariants[variant],
		sizeVariants[size],
		className
	)

	return (
		<button
			type='button'
			className={buttonClass}
			disabled={isLoading} {...props}>
			{children}
		</button>
	)
}

export default Button