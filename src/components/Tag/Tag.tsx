interface CategoryTagProps {
	title: string
	size?: 'small' | 'normal'
}

export function CategoryTag({ title, size = 'small' }: CategoryTagProps) {
	const commonStyles = 'bg-emerald-100 text-emerald-700 rounded-2xl font-medium w-fit my-2 '
	const sizeSmallStyles = 'text-xxs px-2 py-1  '
	const sizeNormalStyles = 'text-xs px-3 py-2 sm:my-4 '

	return <p className={(size === 'small' ? sizeSmallStyles : sizeNormalStyles) + commonStyles}>{title}</p>
}
