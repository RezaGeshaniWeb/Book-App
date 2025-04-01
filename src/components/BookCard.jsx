import { useState } from "react"
import { AiFillHeart } from "react-icons/ai"

export default function BookCard({ book, book: { image, title, author, language, pages, id }, handleLikedList }) {
    const [like, setLike] = useState(JSON.parse(localStorage.getItem(`like_${id}`)) || false)

    const likeHandler = () => {
        handleLikedList(book, like)
        const newLikeStatus = !like
        setLike(newLikeStatus)
        localStorage.setItem(`like_${id}`, JSON.stringify(newLikeStatus))
    }

    return (
        <div className='w-full h-44 bg-[#303030] rounded-[10px] flex mb-4 p-4 relative'>
            <figure className='w-[100px] h-full'>
                <img src={image} alt="" className='w-full h-full object-cover rounded-md' />
            </figure>
            <div className='pl-6'>
                <h3 className='text-xl font-bold mb-2'>{title}</h3>
                <h4 className='text-lg font-semibold mb-12'>{author}</h4>
                <span className='mr-7'>{language}</span>
                <span>{pages} pages</span>
            </div>
            <button onClick={likeHandler} className='w-9 h-9 absolute top-4 right-4 flex justify-center items-center cursor-pointer'>
                <AiFillHeart className="w-7 h-7 hover:scale-110 transition duration-150" style={{ color: like ? 'red' : '#e0e0e0' }} />
            </button>
        </div>
    )
}
