import finalImage from "../assets/images/illustration-thank-you.svg";
import { Card } from "./Card";

export function ThankyouCard({ rating }) {
  return (
    <>
      <main>
        <Card>
          <div className="flex justify-center">
            <img src={finalImage} alt="" />
          </div>
          <p className="bg-Grey500/20 rounded-full p-2 px-4 text-lg text-Orange font-overpass font-light w-fit mx-auto mt-8 mb-9">
            You selected {rating} out of 5
          </p>
          <p className="text-center text-3xl font-overpass text-White mb-4">
            Thank you!
          </p>
          <p className="text-center font-overpass text-Grey500 text-lg mb-2">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </Card>
      </main>
    </>
  );
}
