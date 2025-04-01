export default function FavouriteCard({ data: { image, title } }) {
    return (
        <div className="w-full h-[100px] p-2 bg-[#3b2f9777] rounded-[10px] flex items-center gap-4">
            <img src={image} alt="" className="w-1/3 h-full rounded-md object-cover object-top" />
            <h3 className="font-bold text-lg">{title}</h3>
        </div>
    )
}
