import { Link } from 'react-router-dom'
import { truncate } from '../../utils/truncate'
import { CategoryTag } from '../Tag/Tag'

interface CardProps {
	id: string
	image: string
	title: string
	author: string
	category: string
	shortDescription: string
	longDescription: string
}

export default function Card({
	id,
	image,
	title,
	author,
	category,
	shortDescription,
	longDescription
}: CardProps) {
	const synopsis = shortDescription || longDescription

	return (
		<Link
			to={`/${id}`}
			title='Ver detalhes'
			className='text-left bg-white p-3 gap-3 w-full grid grid-cols-[max-content_auto] sm:p-5 md:gap-4'
		>
			<div className='w-24 flex items-center lg:items-start'>
				<img src={image} alt='Book cover' className='bg-slate-100 text-center mx-auto w-full' />
			</div>
			<div className='flex justify-between flex-col'>
				<div>
					<h3 className='text-base sm:text-xl text-gray-700 font-bold'>{title}</h3>
					{author && <p className='text-xs text-gray-500'>{author}</p>}
					{category && <CategoryTag title={category} />}
					<p className='text-gray-500 text-sm mb-4 leading-[1.15rem]'>
						{truncate(synopsis, 80) || 'Sinopse não disponível.'}
					</p>
				</div>
			</div>
		</Link>
	)
}
