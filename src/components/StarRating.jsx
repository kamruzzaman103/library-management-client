const StarRating = ({ rating }) => {
    const totalStars = 5;
  
    return (
      <div className="flex items-center gap-1">
        {[...Array(totalStars)].map((_, index) => {
          const starColor = index < rating ? "text-yellow-400" : "text-gray-300";
          return (
            <span key={index} className={`${starColor} text-lg`}>
              ★
            </span>
          );
        })}
      </div>
    );
  };
  
  export default StarRating;
  