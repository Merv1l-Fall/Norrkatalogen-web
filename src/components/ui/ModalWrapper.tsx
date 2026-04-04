

const ModalWrapper: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({ children, onClose }) => {


	return (
		<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={onClose}>
			<div onClick={(e) => e.stopPropagation()}>
			{children}
			</div>
		</div>
	)
}

export default ModalWrapper;