import { SiMdbook } from "react-icons/si";

export default function Layouts({ children }) {
    return (
        <>
            <header className="w-full py-4 px-5 rounded-[10px] flex items-center justify-between bg-[#303030] *:font-semibold mb-[80px]">
                <h1 className="text-2xl">Book App</h1>
                <SiMdbook className="text-4xl" />
            </header>
            {children}
            <footer className="text-xl w-full py-4 px-5 rounded-[10px] text-center bg-[#303030] mt-[80px]">Developed By <em className="underline underline-offset-8">Reza Geshani</em> with <span className="text-red-600">&hearts;</span></footer>
        </>
    )
}