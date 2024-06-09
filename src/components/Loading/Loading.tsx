interface LoadingProps {
	show: boolean
}

export function Loading({ show }: LoadingProps) {
	return (
		<div
			className={`
				${show ? 'opacity-100 ' : 'opacity-0 '}
				bg-slate-100/95 fixed inset-0 z-30 transition pointer-events-none flex justify-center items-center
		`}
		>
			<div
				title='Carregando...'
				className='border-slate-300 h-12 w-12 animate-spin rounded-full border-4 border-t-emerald-500'
			/>
		</div>
	)
}
