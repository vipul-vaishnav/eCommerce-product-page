import React, { FC, ReactElement, useState } from 'react'
import { ThumbnailImageData } from '../data/ThumbnailImageData'
import { ProductImageData } from '../data/ProductImageData'
import { toast } from "react-hot-toast"
import { IMain } from './interfaces/IMain'

const Main: FC<IMain> = (props): ReactElement => {
    const { cartCount, setCartCount, selected, setSelected, setShowSlider } = props
    const [count, setCount] = useState<number>(0)

    const SOURCE = ProductImageData.find(item => item.imageNumber === selected)

    const handleAddToCart = () => {
        if (cartCount === 10) {
            toast.success("Max quantity allowed is 10", {
                style: {
                    backgroundColor: "#03210b",
                    color: "#fff9db"
                }
            })
            return
        } else if (cartCount + count > 10) {
            toast.success("Max quantity allowed is 10", {
                style: {
                    backgroundColor: "#03210b",
                    color: "#fff9db"
                }
            })
            return
        } else {
            if (count === 0) {
                setCartCount(prev => prev + 1)
            } else {
                setCartCount(prev => prev + count)
                setCount(0)
            }

            toast.success("Product added successfully!", {
                style: {
                    backgroundColor: "#03210b",
                    color: "#fff9db"
                }
            })
        }
    }

    const increaseCount = () => {
        if (count !== 10) {
            setCount(prev => prev + 1)
        } else {
            toast.success("Max 10 items can be added", {
                style: {
                    backgroundColor: "#03210b",
                    color: "#fff9db"
                }
            })
        }
    }

    const decreaseCount = () => {
        if (count !== 0) {
            setCount(prev => prev - 1)
        } else {
            toast.success("Cannot decrease count further", {
                style: {
                    backgroundColor: "#03210b",
                    color: "#fff9db"
                }
            })
        }
    }

    return (
        <main className="flex justify-start h-full border-t border-primary">
            <section className="flex-1 pr-0 md:pr-6 py-6 grid place-content-center h-auto sm:h-[calc(100%-78px)]">
                <section className="flex flex-col-reverse sm:flex-row items-center justify-center gap-6 pt-12 pb-6 sm:py-0">
                    <div className="w-full">
                        <h2 className="font-bold uppercase tracking-widest mb-4 text-sm lg:text-base">Sneaker Company</h2>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Fall Limited Edition Sneakers</h1>
                        <p className="mb-6 text-sm lg:text-base">
                            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                        </p>
                        <div className="flex items-center justify-start gap-3 mb-2">
                            <h4 className="font-bold text-2xl lg:text-3xl">$125.00</h4>
                            <h6 className="bg-primary px-1 lg:px-2 py-1 rounded-lg text-secondary text-xs">50%</h6>
                        </div>
                        <h6 className="line-through mb-6">$250.00</h6>
                        <div className="flex items-center justify-start gap-6">
                            <div className="border-2 border-primary py-2 lg:py-3 flex items-center justify-between gap-2 lg:gap-4 lg:px-4 px-2">
                                <button onClick={decreaseCount}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                    </svg>

                                </button>
                                <p>{count}</p>
                                <button onClick={increaseCount}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <button onClick={handleAddToCart} className="flex items-center border-2 border-primary gap-2 lg:gap-4 justify-center bg-primary text-secondary px-3 lg:px-6 py-2 lg:py-3 hover:shadow-lg transition-all duration-300">
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
                    <div className="w-full">
                        <div onClick={() => setShowSlider(true)} className="w-full max-w-[396px] h-auto aspect-square cursor-pointer mx-auto">
                            <img src={SOURCE?.source} alt="image" />
                        </div>
                    </div>
                </section>
            </section>
            <section className="w-32 lg:w-48 border-l border-l-primary pl-6 py-6 md:grid place-content-center h-[calc(100%-78px)] hidden">
                <section className="flex flex-col gap-6">
                    {ThumbnailImageData.map((item, idx) => {
                        return <div onClick={() => setSelected(item.thumbnailNumber)} className="w-full h-auto aspect-square max-w-[128px] mx-auto cursor-pointer relative" key={idx}>
                            {selected === item.thumbnailNumber && <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-50 text-secondary grid place-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                            </div>}
                            <img src={item.source} alt="image" />
                        </div>
                    })}
                </section>
            </section>
        </main>
    )
}

export default Main