'use client';
import { useState } from 'react';
import SvgIcon from '../SvgIcon';

export function useReactions(initialState = {
  likes: 0,
  dislikes: 0,
  hearts: 0,
  isLiked: false,
  isDisliked: false,
  isHearted: false
}) {
  const [reactions, setReactions] = useState(initialState);

  const handleLike = () => {
    setReactions(prev => {
      const newState = { ...prev };
      if (!prev.isLiked) {
        newState.isLiked = true;
        newState.likes = prev.likes + 1;
        if (prev.isDisliked) {
          newState.isDisliked = false;
          newState.dislikes = prev.dislikes - 1;
        }
      } else {
        newState.isLiked = false;
        newState.likes = prev.likes - 1;
      }
      return newState;
    });
  };

  const handleDislike = () => {
    setReactions(prev => {
      const newState = { ...prev };
      if (!prev.isDisliked) {
        newState.isDisliked = true;
        newState.dislikes = prev.dislikes + 1;
        if (prev.isLiked) {
          newState.isLiked = false;
          newState.likes = prev.likes - 1;
        }
      } else {
        newState.isDisliked = false;
        newState.dislikes = prev.dislikes - 1;
      }
      return newState;
    });
  };

  const handleHeart = () => {
    setReactions(prev => {
      const newState = { ...prev };
      if (!prev.isHearted) {
        newState.isHearted = true;
        newState.hearts = prev.hearts + 1;
      } else {
        newState.isHearted = false;
        newState.hearts = prev.hearts - 1;
      }
      return newState;
    });
  };

  return {
    reactions,
    handleLike,
    handleDislike,
    handleHeart
  };
}

export default function ReactionButtons({
  likes = 0,
  dislikes = 0,
  comments = 0,
  hearts = 0,
  shares = 0,
  onLike,
  onDislike,
  onHeart,
  isLiked = false,
  isDisliked = false,
  isHearted = false
}) {
  return (
    <div className="flex items-center justify-between text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
      <div className="flex gap-2 sm:gap-4">
        {/* Like */}
        <div className="flex items-center gap-1 cursor-pointer" onClick={onLike}>
          <SvgIcon src={isLiked ? 'liked' : 'like'} />
          <span>{likes}</span>
        </div>

        {/* Dislike */}
        <div className="flex items-center gap-1 cursor-pointer" onClick={onDislike}>
          <SvgIcon src={isDisliked ? 'disliked' : 'dislike'} />
          <span>{dislikes}</span>
        </div>

        {/* Comment */}
        <div className="flex items-center gap-1">
          <SvgIcon src="comment" />
          <span>{comments}</span>
        </div>

        {/* Share */}
        <div className="flex items-center gap-1">
          <SvgIcon src="share" />
          <span>{shares}</span>
        </div>
      </div>

      {/* Heart */}
      <div className="flex items-center gap-1 cursor-pointer" onClick={onHeart}>
        <SvgIcon src={isHearted ? 'hearted' : 'heart'} />
        <span>{hearts}</span>
      </div>
    </div>
  );
}