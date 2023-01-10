import React from 'react'

const Main = () => {
    return (
        <main className="flex justify-start h-full border-t border-primary">
            <section className="flex-1 pr-6 py-6">
                <section className="flex items-center justify-center">
                    <div className="w-full">
                        <h2 className="font-bold uppercase tracking-widest mb-4">Sneaker Company</h2>
                        <h1 className="text-5xl mb-4">Fall Limited Edition Sneakers</h1>
                        <p className="mb-6">
                            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                        </p>
                        <div className="flex items-center justify-start gap-3 mb-2">
                            <h4 className="font-bold text-3xl">$125.00</h4>
                            <h6 className="bg-primary px-2 py-1 rounded-lg text-secondary text-xs">50%</h6>
                        </div>
                        <h6 className="line-through mb-6">$250.00</h6>
                        <div className="flex items-center justify-start gap-6">
                            <div className="border-2 border-primary py-3 flex items-center justify-between gap-4 px-4">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                    </svg>

                                </button>
                                <p>0</p>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </button>
                            </div>
                            <div>
                                <button className="flex items-center border-2 border-primary gap-4 justify-center bg-primary text-secondary px-6 py-3 hover:shadow-lg transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>

                                    <span>
                                        Add to cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full"></div>
                </section>
            </section>
            <section className="w-48 overflow-auto border-l border-l-primary pl-6 py-6">
            </section>
        </main>
    )
}

export default Main