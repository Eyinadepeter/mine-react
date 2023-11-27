import logo from "./assets/logo/logo.svg"
import Notification from "./assets/Notification.svg"
import mobile from "./assets/logo/mobile.svg"
import search from "./assets/search.svg"

const Header = () => {
    return ( 
        <div className="header bg-black flex justify-between w-auto h-[56px] lg:w- lg:h-[56px] place-items-center ">
            <div className="logo ml-[15px] cursor-text">
           <button className="hidden lg:flex md:flex"><img src={logo} alt="logo Here"/></button> 
           <button className="lg:hidden md:hidden"><img src={mobile} alt="logo Here"/></button> 
            </div>
            <div className="search flex bg-slate-600 h-[32px] rounded-lg md:w-[300px] lg:w-[480px] ml-3">
                <img src={search} alt="" className=" w-[20px] h-[20px] mt-2 ml-3"/>
                <input type="text" placeholder="search" id="search" autoComplete="off" className="bg-slate-600  w-full border-none pl-3 text-white"/>
        </div>
        <div className="notificat flex md:gap-4">
            <div className=" pl-[15px]  md:bg-slate-600 md:rounded-lg lg:h-[40px]">
               <button type="button"><img src={Notification} alt=""/></button> 

            </div>
            <div className="text-white rounded-lg text-center items-center mr-5">
                <button className="text-white bg-slate-600 w-[142px] h-[40px] rounded-lg hidden lg:inline">Davil Connection</button>
                <button className="rounded-lg bg-green-500 w-[35px] h-[35px]  md:h-[40px] md:w-[50px]">DC</button>
            </div>
            {/* <button className=" cursor-pointer text-white bg-slate-600 w-[150px] rounded-lg hover:bg-gray-900 ">Davil Collection</button>
            <button className="cursor-pointer mr-[15px] text-white bg-green-500 w-[50px] rounded-lg hover:bg-green-900">DC</button>
            */}
        </div>
           
        </div>
     );
}
 
export default Header;