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
		<div className='rounded-2xl shadow-default py-3 px-4 sm:flex gap-5'>
			<div>
				<img src={image} alt='Book cover' width='182' height='258' className='bg-slate-100 text-center' />
			</div>
			<div>
				<h3 className='text-xl text-gray-700 mt-3 font-bold'>{title}</h3>
				<p className='text-xs text-neutral-500'>{author}</p>
				<Tag title={tag} />
				<p className='text-black text-xs mb-4'>
					<strong>Sinopse:</strong> {synopsis}
				</p>
				<Button size='small' onClick={handleSeledctBook}>
					Ver mais
				</Button>
			</div>
		</div>
	)
}
