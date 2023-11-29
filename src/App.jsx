import Countdown from "./component/Countdown";

export default function App() {
  return (
    <div>
      <div className="flex justify-center py-20 bg-slate-900">
        <div className="w-[741.2px]">
          <Countdown />
        </div>
      </div>
      <div className="page page1">
        <div className="p1 background relative justify-center">
          <h1 className="text-6xl text-white font-pacifico mt-[15%] tracking-widest ml-10">
            Save the date
          </h1>
          <img
            src="images/p1decorative.png"
            className="absolute bottom-0 left-20"
            alt=""
          />
        </div>
      </div>
      <div className="page page2">
        <div className="p2 background flex-col text-white items-center">
          <h3 className="mt-4 text-center tracking-widest">
            WE ARE PLEASED TO INVITE YOU <br />
            TO OUR WEDDING
          </h3>
          <h1 className="font-pacifico text-6xl mt-[8%]">
            Sujata <span className="text-4xl">Weds</span> Nikhil
          </h1>
        </div>
      </div>
      <div className="page page3">
        <div className={`p3 background flex-col items-center text-[#f3ac7e]`}>
          <h1 className={`font-pacifico text-6xl mt-[35%]`}>Mandap</h1>
          <p className="text-slate-500 flex items-center gap-2 mt-2 text-sm">
            <span className="text-2xl">08</span> DECEMBER 2023
          </p>
          <p className="font-pacifico">Friday</p>
        </div>
      </div>
      <div className="page page4">
        <div className="p4 background relative justify-center">
          <img
            src="/images/person4.png"
            className="absolute bottom-[14%] h-[60%]"
            alt=""
          />
          <div className={`flex flex-col mt-[25%] items-center text-[#b8b6a5]`}>
            <h1 className={`font-pacifico text-6xl`}>Sangeet</h1>
            <p className="text-slate-500 flex items-center gap-2 mt-2 text-sm">
              <span className="text-2xl">08</span> DECEMBER 2023
            </p>
            <p className="font-pacifico">Friday</p>
          </div>
        </div>
      </div>
      <div className="page page5">
        <div className={`p5 background flex-col items-center text-[#fcd24b]`}>
          <h1 className={`font-pacifico text-6xl mt-[35%]`}>Haldi</h1>
          <p className="text-slate-500 flex items-center gap-2 mt-2 text-sm">
            <span className="text-2xl">09</span> DECEMBER 2023
          </p>
          <p className="font-pacifico">Saturday</p>
        </div>
      </div>
      <div className="page page6">
        <div className={`p6 background flex-col items-center text-[#eb5055]`}>
          <h1 className={`font-pacifico text-6xl mt-[15%]`}>Wedding</h1>
          <p className="text-slate-500 flex items-center gap-2 mt-2 text-sm">
            <span className="text-2xl">09</span> DECEMBER 2023
          </p>
          <p className="font-pacifico">Saturday</p>
        </div>
      </div>
      <div className="page page7">
        <div className={`p7 background flex-col items-center text-[#f3ac7e]`}>
          <h1 className={`font-pacifico text-6xl mt-[26%]`}>Reception</h1>
          <p className="text-slate-500 flex items-center gap-2 mt-2 text-sm">
            <span className="text-2xl">09</span> DECEMBER 2023
          </p>
          <p className="font-pacifico">Saturday</p>
        </div>
      </div>
      <div className="page page8">
        <div className="p8 background flex items-center flex-col gap-5 justify-center text-[#f3ac7e] text-center">
          <h1 className="font-alice text-4xl">
            WITH LOVE,
            <br /> GUATAM & KASHYAP <br />
            FAMILY
          </h1>
          <h1 className="font-pacifico text-4xl">
            Awaiting your presence at the <br />
            biggest celebration of <br />
            our lives!
          </h1>
          <div className="text-slate-700">
            <p>VENUE - NARAYAN MANGALAM</p>
            <p className="text-sm">
              Mungeli road, near nature city, sakri, Bilaspur
            </p>
            <img
              src="/images/qr-code.jpeg"
              className="w-40 h-40 mx-auto my-3 object-contain rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
