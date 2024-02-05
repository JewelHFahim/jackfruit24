
const TopSellingCard = () => {
    return (
        <div className="p-2 flex items-center gap-x-4">
            <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt="" className="w-[50px] h-[60px] object-fit"/>

            <div>
                <p className="uppercase text-xs font-medium text-slate-500">Ladies wares</p>
                <h3 className="font-medium leading-5 text-sm">LADIES CASUAL CLOTHS</h3>
                <p className="font-bold text-red-700">99 <span className="text-xs text-slate-600 line-through">$115</span></p>
            </div>
            
        </div>
    );
};

export default TopSellingCard;