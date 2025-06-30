'use client';
import SvgIcon from '../SvgIcon';
import ReactionButtons, { useReactions } from '../reactions/ReactionButtons';

export default function CommentCard({
  userImage = '/user1.jpg',
  userName = 'Ahtisham',
  postTime = '2min ago',
  comments = 'I love My Father Because he is my Hero.',
  initialLikes = 0,
  initialDislikes = 0,
  initialHearts = 0,
  commentCount = 0,
  shareCount = 0
}) {
  const {
    reactions,
    handleLike,
    handleDislike,
    handleHeart
  } = useReactions({
    likes: initialLikes,
    dislikes: initialDislikes,
    hearts: initialHearts,
    isLiked: false,
    isDisliked: false,
    isHearted: false
  });

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-xl shadow-md p-4 w-full max-w-2xl">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <img
            src={userImage}
            alt={userName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm sm:text-base">{userName}</p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{postTime}</p>
          </div>
        </div>
        <SvgIcon src="category" />
      </div>

      {/* Comment Text */}
      <p className="text-sm mb-4">{comments}</p>

      {/* Reactions */}
      <ReactionButtons
        likes={reactions.likes}
        dislikes={reactions.dislikes}
        hearts={reactions.hearts}
        comments={commentCount}
        shares={shareCount}
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