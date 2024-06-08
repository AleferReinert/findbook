import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { truncate } from '../../utils/truncate'
import { Button } from '../Button/Button'
import { CategoryTag } from '../Tag/Tag'

interface CardProps {
	id: string
	image: string
	title: string
	author: string
	category: string
	synopsis: string
}

export default function Card({ id, image, title, author, category, synopsis }: CardProps) {
	const navigate = useNavigate()
	const handleSelectedBook = useCallback(() => {
		navigate(`/${id}`)
	}, [id, navigate])

	return (
		<div className='bg-white p-3 gap-3 grid grid-cols-[35%_auto] w-full sm:p-5 md:gap-4'>
			<div className='flex items-center lg:items-start'>
				<img src={image} alt='Book cover' className='bg-slate-100 text-center mx-auto w-full max-h-min' />
			</div>
			<div className='flex justify-between flex-col'>
				<div>
					<h3 className='text-base sm:text-xl text-gray-700 font-bold'>{title}</h3>
					{author && <p className='text-sm text-neutral-500'>{author}</p>}
					{category && <CategoryTag title={category} />}
					<p className='text-black text-sm mb-4'>
						<strong className='font-semibold'>Sinopse: </strong>
						{synopsis ? truncate(synopsis, 150) : 'não disponível.'}
					</p>
				</div>
				<div className='flex justify-end'>
					<Button size='small' onClick={handleSelectedBook}>
						Ver mais
					</Button>
				</div>
			</div>
		</div>
	)
}
