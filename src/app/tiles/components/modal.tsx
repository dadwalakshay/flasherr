function ColourPaletteModal({ onConfirm, onClose }) {
    return (
        <div id="popup-modal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-lg max-h-full">
                <div className="relative bg-white rounded-sm shadow dark:bg-gray-700">
                    <div className="p-4 md:p-5 text-center grid grid-cols-2 gap-2">
                        <button onClick={(e) => onConfirm(e, 0)} data-modal-hide="popup-modal" type="button" className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            White
                        </button>
                        <button onClick={(e) => onConfirm(e, 1)} data-modal-hide="popup-modal" type="button" className="text-black bg-red-500 focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Red
                        </button>
                        <button onClick={(e) => onConfirm(e, 2)} data-modal-hide="popup-modal" type="button" className="text-black bg-green-500 focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Green
                        </button>
                        <button onClick={(e) => onConfirm(e, 3)} data-modal-hide="popup-modal" type="button" className="text-black bg-blue-500 focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Blue
                        </button>
                        <button onClick={(e) => onConfirm(e, 4)} data-modal-hide="popup-modal" type="button" className="text-black bg-orange-500 focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Orange
                        </button>
                        <button onClick={(e) => onConfirm(e, 5)} data-modal-hide="popup-modal" type="button" className="text-black bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Yellow
                        </button>
                        <button onClick={(e) => onConfirm(e, 6)} data-modal-hide="popup-modal" type="button" className="text-black bg-purple-500 focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Purple
                        </button>
                        <button onClick={(e) => onConfirm(e, 7)} data-modal-hide="popup-modal" type="button" className="text-black bg-pink-500 focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Pink
                        </button>
                    </div>
                    <div className="p-4 md:p-5 text-center">
                        <button onClick={(e) => onClose(e)} data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ColourPaletteModal };
