import starIcon from "../assets/images/icon-star.svg";
import { Card } from "./Card";
import { RatingButton } from "./RatingButton";
export function MainCard({ selectedRating, handleRatingClick, submitClick }) {
  return (
    <>
      <main>
        <Card>
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
          <ul className="flex flex-row *:w-10 *:h-10 *:rounded-full justify-around text-center *:p-2 *:font-overpass text-Grey500  text-xl *:hover:bg-Orange *:active:bg-White *:hover:text-Grey900">
            {[1, 2, 3, 4, 5].map((el) => {
              return (
                <RatingButton
                  key={el}
                  number={el}
                  onClick={handleRatingClick}
                  isSelected={selectedRating}
                />
              );
            })}
          </ul>

          <button
            type="button"
            className="bg-Orange w-full p-3 rounded-full mt-8 font-overpass font-bold text-Grey950 text-xl hover:bg-White active:bg-White"
            onClick={() => submitClick()}
          >
            SUBMIT
          </button>
        </Card>
      </main>
    </>
  );
}
