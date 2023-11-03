import code from "./assets/image-qr-code.png";
function App() {
  return (
    <>
      <div className="h-screen w-screen bg-Light-gray flex items-center justify-center">
        <div className="bg-White rounded-[15px] w-[300px]">
          <img className="p-[10px] rounded-[15px]" src={code} alt="" />
          <div className="flex flex-col justify-center items-center">
            <p
              className="flex flex-col text-[15px] text-black font-bold
            justify-center items-center my-[10px] "
            >
              Improve your front-end{" "}
              <span className="">skills by building projects</span>
            </p>
            <p
              className="flex flex-col text-[15px] text-black font-normal 
            justify-center items-center mb-[10px]"
            >
              Scan the QR code to visit Frontend{" "}
              <span className="">Mentor and take your coding skills to</span>{" "}
              the next level
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
