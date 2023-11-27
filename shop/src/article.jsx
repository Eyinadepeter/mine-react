const Article = () => {
    return ( 
        <div className="header w-[409px] h-[104px] gap-[16px]  md:w-[800px] md:h-[60px] bg-black text-white absolute md:bottom-[0px] md:left-[23%] lg:flex  md:justify-between items-center md:rounded-xl md:p-[12px 8px 12px 16px] top-20">
            <p className="font-inter w-[390px] text-[14px] pl-[9px] pt-3 leading-[18px] text-left md:text-[18px] md:w-[800px] md:pt-1">Extend Your Trail For $1/Month for 3 Months on selected plan</p>
            <div className="md:flex md:gap-4">
            <button className="bg-white rounded-xl md:w-[120px] md:h-8 text-black font-inter md:text-[13px] font-medium absolute left-2 top-[60px] h-[28px] w-[99px] text-[13px] md:left-[80%] md:top-[15px]">Select a plan</button>
             <button className=" absolute top-5 right-3 md:top-4">X</button>

            </div>
            
        </div>
     );
}
 
export default Article;