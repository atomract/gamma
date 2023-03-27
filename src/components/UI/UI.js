
export const Button = () => {
    return (
        <div>
        <div className="flex  justify-end  items-start ">
          <div className="mt-[105%]  mr-5 md:mr-80 md:mt-[35%] absolute z-[100] ">
            <div className="exploreBtnParent">
              <p className=" exploreBtn w-auto  font-extrabold  text-white bg-[#25415ccc]   ">
                explore
              </p>
            </div>
          </div>
        </div>

        <div className="flex   justify-start  items-start">
          <div className="mt-[105%]  ml-60 md:mr-70 md:mt-[60%] absolute z-[100] ">
            <h1 className="text-white text-5xl">About US</h1>
          </div>
        </div>
      </div>
    )
}