import Icon from "./Icon";

type RatingStarsProps = {
  rating: number;
  totalStars?: number;
  starSize?: string;
  fullStarIconName?: string;
  emptyStarIconName?: string;
};

const RatingStars = ({
  rating,
  totalStars = 5,
  starSize = "16px",
  fullStarIconName = "star-full",
  emptyStarIconName = "star-empty",
}: RatingStarsProps) => {
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    const iconToUse = i <= rating ? fullStarIconName : emptyStarIconName;
    stars.push(
      <Icon
        key={i}
        iconName={iconToUse}
        style={{
          width: starSize,
          height: starSize,
          marginRight: "2px",
        }}
      />
    );
  }
  return <div>{stars}</div>;
};

export default RatingStars;
