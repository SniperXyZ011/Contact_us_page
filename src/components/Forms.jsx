export default function Forms() {
  return (
    <div className="flex justify-between ml-40 mr-28 mt-4 ">
      <div className="flex-grow">
        <div className="w-[350px] h-[350px] mt-8 flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between  ">
              <button className="text-xs bg-slate-950	text-white p-2 px-7 flex gap-2 rounded items-center hover:bg-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="size-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 0 0 1.33 0l1.713-3.293a.783.783 0 0 1 .642-.413 41.102 41.102 0 0 0 3.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0 0 10 2ZM6.75 6a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
                VIA SUPPORT CHAT
              </button>
              <button className="text-xs bg-slate-950	text-white p-2 px-8 flex gap-2 rounded items-center hover:bg-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="size-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
                VIA CALL
              </button>
            </div>
            <div className="flex items-center justify-center hover:bg-gray-100">
              <button className="flex text-xs border border-black rounded p-2 w-full items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="size-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 0 0 1.33 0l1.713-3.293a.783.783 0 0 1 .642-.413 41.102 41.102 0 0 0 3.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0 0 10 2ZM6.75 6a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
                VIA EMAIL FORM
              </button>
            </div>
          </div>
          <div className="flex flex-col m-2 gap-3">
            <div className="flex flex-col gap-3">
              <div><input type="text" class="border border-black  p-2 w-full focus:bg-gray-100" placeholder="Name"></input></div>
              <div><input type="" placeholder="E-mail" class="border border-black focus:bg-gray-100  p-2 w-full"></input></div>
              <div><textarea placeholder="Text" rows={3} class="border border-black  p-2 w-full resize-none focus:bg-gray-100"></textarea></div>
            </div>
            <div className="flex justify-end"><button className="text-xs bg-slate-950	text-white p-1 flex gap-2 rounded items-center p-2 px-10">Submit</button></div>
          </div>
        </div>
      </div>
      <div className="w-[650px] h-[500px] ">
        <img
          src={`./images/content.svg`}
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
