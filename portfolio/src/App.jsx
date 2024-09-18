const App = () => {
  return(
    <>
    <div className="h-screen w-screen flex flex-col  justify-start items-center bg-slate-400" >
      <div className="h-[90%] w-[90%] flex flex-col bg-gray-700  justify-start items-center">
        <div className="h-[6rem] w-full bg-gray-900  flex flex-row justify-between items-center">
          <h1 className="font-bold text-3xl m-5 p-2 text-white">kathiravan B</h1>
          <div className="h-[3rem] w-[30%] flex flex-row gap-5 justify-center items-center text-lg font-sans">
            <ul className="h-[3rem] w-[30%] font-bold text-2xl flex flex-row gap-5 text-white justify-center items-center font-sans">
              <li className="hover:cursor-pointer text-cyan-500 border-b-4 p-1"> Profile</li>
              <li className="hover:cursor-pointer hover:text-cyan-500">Projects</li>
              <li className="hover:cursor-pointer hover:text-cyan-500"> Contacts</li>

            </ul>


          </div>
        </div>
      </div>
    </div>
    </>

  )
}
export default App;