import * as AlertDialog from '@radix-ui/react-alert-dialog'

interface AlertProps {
	openAlert: boolean
	setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>
	title?: string
	message?: string
}

function Alert({ openAlert, setOpenAlert, title, message }: AlertProps) {
	return (
		<AlertDialog.Root open={openAlert} onOpenChange={setOpenAlert}>
			<AlertDialog.Portal>
				<AlertDialog.Overlay
					onClick={() => setOpenAlert(false)}
					className='bg-slate-100/95 z-30 data-[state=open]:animate-overlayShow fixed inset-0'
				/>
				<AlertDialog.Content className='text-center z-40 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
					{title && <AlertDialog.Title className='font-semibold m-0 text-lg'>{title}</AlertDialog.Title>}

					{message && (
						<AlertDialog.Description className='mt-4 mb-5 text-base leading-normal'>
							{message}
						</AlertDialog.Description>
					)}
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	)
}
export default Alert
