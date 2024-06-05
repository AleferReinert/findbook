import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import { Tag } from '../Tag/Tag'

interface CardProps {
	id: string
	image: string
	title: string
	author: string
	tag: string
	synopsis: string
}

export default function Card({ id, image, title, author, tag, synopsis }: CardProps) {
	const navigate = useNavigate()
	const handleSeledctBook = useCallback(() => {
		navigate(`/${id}`)
	}, [id, navigate])

	return (
		<div className='bg-white p-3 gap-3 grid grid-cols-[35%_auto] sm:p-5 md:gap-4'>
			<div className='flex items-center lg:items-start'>
				<img src={image} alt='Book cover' className='bg-slate-100 text-center mx-auto max-h-min' />
			</div>
			<div className='flex justify-between flex-col'>
				<div>
					<h3 className='text-base sm:text-xl text-gray-700 font-bold'>{title}</h3>
					<p className='text-sm text-neutral-500'>{author}</p>
					<Tag title={tag} />
					<p className='text-black text-sm mb-4'>
						<strong className='font-semibold'>Sinopse:</strong> {synopsis}
					</p>
				</div>
				<div className='flex justify-end'>
					<Button size='small' onClick={handleSeledctBook}>
						Ver mais
					</Button>
				</div>
			</div>
		</div>
	)
}
