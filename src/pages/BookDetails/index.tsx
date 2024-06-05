import { books } from '../../assets/mock/books'
import { Container } from '../../components/Container/Container'
import { Logo } from '../../components/Logo/Logo'
import { SectionBookList } from '../../components/SectionBookList/SectionBookList'

export function BookDetailsPage() {
	// const { id } = useParams()

	return (
		<>
			<Container>
				<Logo />
				<article className='mt-8 mb-8 grid gap-12 justify-between lg:grid-cols-3 lg:mt-20 lg:gap-8'>
					<div className='lg:col-span-2'>
						<h1 className='text-3xl text-gray-700 font-extrabold sm:text-4xl lg:text-5xl lg:mt-2'>
							O Código Limpo
						</h1>
						<h2 className='text-neutral-500 mt-3 mb-8 text-xl lg:text-2xl'>Robert C. Martin</h2>
						<p className='text-neutral-500 text-base'>
							Mesmo um código que não é ideal pode funcionar. Mas se ele não estiver adequado, pode
							comprometer uma empresa de desenvolvimento. Horas incontáveis e recursos significativos são
							perdidos anualmente devido a um código mal elaborado. O renomado especialista em software,
							Robert C. Martin, apresenta um paradigma com "Código limpo: Habilidades Práticas do Agile
							Software". Martin, junto com seus colegas do Mentor Object, destila práticas eficientes de
							elaboração de códigos em um livro que vai introduzir gradualmente os valores da habilidade de um
							profissional de softwares e ajudar a se tornar um programador melhor – mas somente com prática.
							O trabalho consiste em ler códigos, muitos códigos. E será necessário identificar o que está
							adequado e o que não está. Mais importante, será preciso reavaliar valores profissionais e o
							comprometimento com a profissão. "Código limpo" está dividido em três partes. A primeira contém
							capítulos que descrevem os princípios, padrões e práticas para elaborar um código adequado. A
							segunda parte apresenta casos de estudo de complexidade crescente, cada um um exercício para
							aprimorar um código – transformar o código base que tem problemas em algo melhor e mais
							eficiente. A terceira parte é a compensação: um capítulo com uma lista de heurísticas e pontos
							de atenção reunidos durante os estudos de caso. O conhecimento adquirido descreve a forma de
							pensar ao criar, ler e aprimorar um código. Após a leitura, os leitores saberão: - Como
							identificar um código de qualidade; - Como redigir códigos de qualidade e como aprimorar um que
							não esteja bom; - Como criar nomes, funções, objetos e classes de qualidade; - Como organizar o
							código para máxima legibilidade; - Como implementar tratamento de erro de forma completa sem
							comprometer a lógica; - Como aplicar testes de unidade e praticar o desenvolvimento orientado a
							testes. Este livro é fundamental para qualquer desenvolvedor, engenheiro de software, gerente de
							projeto, líder de equipe ou analista de sistemas com interesse em construir códigos de melhor
							qualidade.
						</p>
					</div>
					<div>
						<img
							src='/book-example.webp'
							alt='Book Cover'
							width='412'
							height='583'
							className='bg-slate-100 text-center mx-auto'
						/>
					</div>
				</article>
			</Container>
			<SectionBookList title='Recomendações com base nesse livro' books={books} />
		</>
	)
}
