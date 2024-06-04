import { useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { Container } from '../../components/Container/Container'
import { HeaderTitle } from '../../components/Header/HeaderTitle'
import { Heading } from '../../components/Heading/Heading'

export function BookDetailsPage() {
	const { id } = useParams()

	return (
		<>
			<Container>
				<HeaderTitle />
				<div className='mt-8 lg:mt-20 flex flex-col gap-12 lg:gap-24 justify-between mb-28'>
					<div>
						<h1 className='text-4xl lg:text-7xl text-evergreen font-bold'>O Código Limpo</h1>
						<p className='text-neutral-500 text-xl lg:text-3xl mt-3 mb-8 lg:mb-16'>Robert C. Martin</p>
						<p className='text-neutral-500 text-xl'>Lorem ipsum dolor sit amet.</p>
					</div>
					<div>
						<img
							src='kkaa.png'
							alt='Book Cover'
							width='412'
							height='583'
							className='bg-slate-100 text-center'
						/>
					</div>
				</div>

				<Heading title='Recomendações com base nesse livro' />
				<div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-11 mb-11'>
					<Card
						id='1asd2'
						image='xuxu.png'
						title='O Código Limpo'
						author='Robert C. Martin'
						tag='Computer Engineer'
						synopsis='lorem ipsum dolor'
					/>
				</div>
			</Container>
		</>
	)
}
