import starIcon from "../assets/images/icon-star.svg";

export function RatingCard() {
  return (
    <>
      <main>
        <div className="w-full max-w-sm bg-Grey900 rounded-3xl p-6 mx-auto my-38">
          <div className="w-10 h-10 bg-Grey950/50 rounded-full flex justify-center items-center">
            <img src={starIcon} alt="" className=" w-6 h-6" />
          </div>
          <p className="font-overpass font-medium text-White text-3xl mt-6">
            How did we do?
          </p>
          <p className="font-overpass font-medium text-Grey500 text-lg mt-6 mb-6">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul className="flex flex-row *:w-10 *:h-10 *:rounded-full justify-around text-center *:p-2 *:font-overpass text-Grey500 *:bg-Grey950/50 text-xl *:hover:bg-Orange *:active:bg-White *:hover:text-Grey900">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <button className="bg-Orange w-full p-3 rounded-full mt-8 font-overpass font-bold text-Grey950 text-xl">
            SUBMIT
          </button>
        </div>
      </main>
    </>
  );
}
