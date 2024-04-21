import { FC } from "react"

const Header: FC = () => {
    return (
        <>
           <header className="bg-black text-white p-3 text-md items-center flex gap-2 items-center justify-center">
                <div className="font-bold border-r pr-2">
                    Brett Commandeur
                </div>
                <div>
                    Projects
                </div>
           </header>
        </>
    ) 
};

export default Header;
