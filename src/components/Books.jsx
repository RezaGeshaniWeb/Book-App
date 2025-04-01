import { useEffect, useState } from "react"
import { books } from "../constants/mockData"
import BookCard from "./BookCard"
import Favourites from "./Favourites"
import SearchBox from "./SearchBox"

export default function Books() {
    const [liked, setLiked] = useState(JSON.parse(localStorage.getItem('favourites')) || [])
    const [mainBooks, setMainBooks] = useState(books)

    const handleLikedList = (book, status) => {
        if (status) {
            const newLikedList = liked.filter(val => val.id !== book.id)
            setLiked(newLikedList)
        } else {
            setLiked(prev => [...prev, book])
        }
    }

    const handleSearch = e => {
        const value = e.target.value.trim().toLowerCase()
        setMainBooks(books.filter(b => b.title.toLowerCase().includes(value)))
    }

    useEffect(() => localStorage.setItem('favourites', JSON.stringify(liked)), [liked])

    return (
        <>
            <SearchBox handleSearch={handleSearch} />
            <section className="w-full flex gap-6 items-start">
                {/* aside left */}
                <div className='w-full'>
                    {mainBooks.map(book => <BookCard key={book.id} book={book} handleLikedList={handleLikedList} />)}
                </div>

                {/* aside right */}
                {!!liked.length && <Favourites liked={liked} />}
            </section>
        </>
    )
}
