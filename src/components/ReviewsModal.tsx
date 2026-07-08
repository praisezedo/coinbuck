import type {Review} from "../constants/reviews";

export default function ReviewsModal({ reviewdata, closeModal, isModalOpen }: {reviewdata: Review, closeModal: () => void, isModalOpen: boolean}) {
    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${isModalOpen ? 'bg-black/70 backdrop-blur-sm' : 'bg-transparent pointer-events-none'}`}
            onClick={closeModal}
        >
            <div 
                className={`relative bg-[#1A0E07] rounded-3xl border border-[#D4AF37]/30 p-8 max-w-md mx-4 transition-all duration-300 ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={closeModal}
                    className="absolute top-4 hover:cursor-pointer right-4 text-[#F4D03F] hover:text-[#F7E8C8] transition-colors"
                    aria-label="Close modal"
                >
                    ✕
                </button>

                <div className="mb-4 flex gap-1 text-[#D4AF37] tracking-widest">
                    ★★★★★
                </div>
                <p className="leading-7 text-[#F7E8C8]/90 text-sm sm:text-base font-medium">
                    "{reviewdata?.review}"
                </p>
                <p className="mt-6 font-black text-[#F4D03F] text-sm">
                    {reviewdata?.name}
                </p>

                <button 
                    onClick={closeModal}
                    className="mt-6 w-full hover:cursor-pointer flex items-center justify-center gap-2 rounded-full bg-[#2B1207] px-7 py-3 font-semibold text-[#F4D03F] shadow-[0_18px_40px_rgba(43,18,7,0.25)] transition hover:brightness-125"
                >
                    Close
                </button>
            </div>
        </div>
    )
}