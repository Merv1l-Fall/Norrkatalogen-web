

const ModalWrapper: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({ children, onClose }) => {


	return (
		<div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center p-8 z-50" onClick={onClose}>
			<div className="z-50" onClick={(e) => e.stopPropagation()}>
			{children}
			</div>
		</div>
	)
}

export default ModalWrapper;