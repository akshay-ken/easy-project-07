import { useState } from "react";
import { MainCard } from "./MainCard";
import { ThankyouCard } from "./ThankyouCard";

export function RatingCard() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRatingClick(rating) {
    setSelectedRating(rating);
  }

  function handleSubmit() {
    if (selectedRating !== null) {
      setIsSubmitted(true);
    }
  }

  return (
    <>
      {!isSubmitted ? (
        <MainCard
          selectedRating={selectedRating}
          handleRatingClick={handleRatingClick}
          submitClick={handleSubmit}
        />
      ) : (
        <ThankyouCard rating={selectedRating} />
      )}
    </>
  );
}
