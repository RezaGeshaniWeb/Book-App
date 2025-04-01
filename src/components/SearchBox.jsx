import { IoIosSearch } from "react-icons/io"

export default function SearchBox({ handleSearch }) {
    return (
        <div className="mb-14 flex items-center w-[350px] h-[50px] bg-white rounded-md">
            <span className="w-[10%] h-full flex items-center justify-center pl-2">
                <IoIosSearch className="w-[30px] h-[30px] text-gray-800" />
            </span>
            <input type="text" placeholder="Search title..." className="h-full px-2 w-[90%] border-none outline-none text-black text-lg" onInput={handleSearch} />
        </div>
    )
}
