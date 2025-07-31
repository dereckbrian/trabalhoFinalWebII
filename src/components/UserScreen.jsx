function UserScreen(){
    const name = localStorage.getItem('name');

    return(
        <div className="flex justify-center items-center w-screen h-screen bg-[#4B3C5D]">
            <div className="w-[95%] h-[95%] flex justify-center items-center space-y-7 p-9 rounded-xl bg-slate-700 drop-shadow-[0px_10px_20px_rgba(0,0,0,0.5)]">
                
            </div>
        </div>
    )

}

export default UserScreen

