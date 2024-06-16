interface CategoryTagsProps {
	size?: 'small' | 'normal'
	categories: string[]
}

export function CategoryTags({ categories, size = 'small' }: CategoryTagsProps) {
	const commonStyles = 'bg-emerald-100 text-emerald-700 rounded-2xl font-medium w-fit my-2 '
	const sizeSmallStyles = 'text-xxs px-2 py-1  '
	const sizeNormalStyles = 'text-xs px-3 py-2 sm:my-4 '

	return (
		<p className='flex gap-1'>
			{categories.sort().map((category, index) => {
				return (
					<span
						key={index}
						className={(size === 'small' ? sizeSmallStyles : sizeNormalStyles) + commonStyles}
					>
						{category}
					</span>
				)
			})}
		</p>
	)
}
