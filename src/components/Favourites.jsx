import FavouriteCard from "./FavouriteCard";

export default function Favourites({ liked }) {
    return (
        <div className='w-[40%] p-5 bg-[#6552f4] rounded-[10px]'>
            <h2 className='text-xl font-bold mb-4'>Favourites</h2>
            <div className='w-full flex flex-col gap-4'>
                {liked.map(val => <FavouriteCard key={val.id} data={val} />)}
            </div>
        </div>
    )
}
