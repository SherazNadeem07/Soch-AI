'use client';
import SvgIcon from '../SvgIcon';
import ReactionButtons, { useReactions } from '../reactions/ReactionButtons';

export default function CreatePost({
  userImage,
  userName,
  postTime,
  category,
  title,
  description,
  images = [],
  tags = [],
  likes = 0,
  dislikes = 0,
  comments = 0,
  heart = 0,
  share = 0
}) {
  const {
    reactions,
    handleLike,
    handleDislike,
    handleHeart
  } = useReactions({
    likes,
    dislikes,
    hearts: heart,
    isLiked: false,
    isDisliked: false,
    isHearted: false
  });

  // Grid layout class
  const getImageGridClass = (count) => {
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    if (count === 3) return 'grid-cols-2 grid-rows-2';
    return 'grid-cols-2 grid-rows-2';
  };

  const displayImages = images.slice(0, 4);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-xl shadow-md p-4 w-full max-w-2xl">
      {/* Header */}
      <div className="cursor-pointer flex justify-between items-start mb-3">
        <div className="flex items-center space-x-3">
          <img src={userImage} alt={userName} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-sm sm:text-base">{userName}</p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{postTime} · {category}</p>
          </div>
        </div>
        <SvgIcon src="category" />
      </div>

      {/* Content */}
      <h2 className="text-md sm:text-lg font-bold mb-2">{title}</h2>
      <p className="text-xs sm:text-sm mb-3">{description}</p>

      {/* Images */}
      {displayImages.length > 0 && (
        <div className={`grid ${getImageGridClass(displayImages.length)} gap-2 mb-3`}>
          {displayImages.map((img, index) => (
            <div key={index} className="relative">
              <img src={img} alt={`post-image-${index}`} className={`w-full h-full object-cover rounded-lg ${displayImages.length === 3 && index === 2 ? 'row-span-2' : ''}`} />
              {images.length > 4 && index === 3 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                  <span className="text-white font-bold text-lg">+{images.length - 4}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Reactions */}
      <ReactionButtons
        likes={reactions.likes}
        dislikes={reactions.dislikes}
        hearts={reactions.hearts}
        comment={comments}
        shares={share}
        onLike={handleLike}
        onDislike={handleDislike}
        onHeart={handleHeart}
        isLiked={reactions.isLiked}
        isDisliked={reactions.isDisliked}
        isHearted={reactions.isHearted}
      />
    </div>
  );
}