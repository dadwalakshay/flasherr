function ColourPaletteModal({ onConfirm, onClose }) {
    return (
        <div id="popup-modal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-lg max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="p-4 md:p-5 text-center">
                        <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Choose Tile colour:</h3>
                        <button onClick={(e) => onConfirm(e, 0)} data-modal-hide="popup-modal" type="button" className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center m-5">
                            White
                        </button>
                        <button onClick={(e) => onConfirm(e, 1)} data-modal-hide="popup-modal" type="button" className="text-black bg-red-600 focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center m-5">
                            Red
                        </button>
                        <button onClick={(e) => onConfirm(e, 2)} data-modal-hide="popup-modal" type="button" className="text-black bg-green-600 focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center m-5">
                            Green
                        </button>
                        <button onClick={(e) => onConfirm(e, 3)} data-modal-hide="popup-modal" type="button" className="text-black bg-blue-600 focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center m-5">
                            Blue
                        </button>
                        <button onClick={(e) => onConfirm(e, 4)} data-modal-hide="popup-modal" type="button" className="text-black bg-pink-600 focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center m-5">
                            Pink
                        </button>
                        <button onClick={(e) => onConfirm(e, 5)} data-modal-hide="popup-modal" type="button" className="text-black bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center m-5">
                            Yellow
                        </button>
                        <button onClick={(e) => onConfirm(e, 6)} data-modal-hide="popup-modal" type="button" className="text-black bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-black-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center m-5">
                            Cyan
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
