'use client';
import { useState } from 'react';

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
  heart = 0
}) {
  
  const [reaction, setReaction] = useState(0); 
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [heartCount, setHeartCount]=useState(heart)

  const handleLike = () => {
    if (reaction === 1) {
      setReaction(0);
      setLikeCount(prev => prev - 1);
    } else {
      setReaction(1);
      setLikeCount(prev => prev + 1);
      if (reaction === -1) setDislikeCount(prev => prev - 1);
      setReaction(1);
    }
  };

  const handleDislike = () => {
    if (reaction === -1) {
      setReaction(0);
      setDislikeCount(prev => prev - 1);
    } else {
      setReaction(-1);
      setDislikeCount(prev => prev + 1);
      if (reaction === 1) setLikeCount(prev => prev - 1);
    }
  };

  const handleHeart=()=>{
    if(reaction === -1){
        setReaction(0);
        setHeartCount(prev=>prev -1)
    }else{
        setReaction(-1);
        setHeartCount(prev=>prev+1);
        if(reaction ===1) setHeartCount(prev=>prev -1)
    }
  }
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-xl shadow-md p-4 w-full max-w-2xl mx-auto">
            {/* Top Section - User Info */}
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-3">
                    <img
                        src={userImage}
                        alt={userName}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold">{userName}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {postTime} · {category}
                        </p>
                    </div>
                </div>
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.95833 8.83154C3.0875 8.83154 2.375 9.54404 2.375 10.4149C2.375 11.2857 3.0875 11.9982 3.95833 11.9982C4.82917 11.9982 5.54167 11.2857 5.54167 10.4149C5.54167 9.54404 4.82917 8.83154 3.95833 8.83154Z" stroke="#959595" stroke-width="1.18" />
                    <path d="M15.0413 8.83154C14.1705 8.83154 13.458 9.54404 13.458 10.4149C13.458 11.2857 14.1705 11.9982 15.0413 11.9982C15.9122 11.9982 16.6247 11.2857 16.6247 10.4149C16.6247 9.54404 15.9122 8.83154 15.0413 8.83154Z" stroke="#959595" stroke-width="1.18" />
                    <path d="M7.91602 10.4149C7.91602 11.2857 8.62852 11.9982 9.49935 11.9982C10.3702 11.9982 11.0827 11.2857 11.0827 10.4149C11.0827 9.54404 10.3702 8.83154 9.49935 8.83154" stroke="#959595" stroke-width="1.18" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

            <h2 className="text-lg font-bold mb-2">{title}</h2>

            <p className="text-sm mb-3">{description}</p>

            {images.length > 0 && (
                <div className={`flex grid-cols-${images.length > 1 ? 2 : 1} gap-3 mb-3`}>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`post-image-${index}`}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    ))}
                </div>
            )}

            {/* Tags */}
            {tags.length > 0 && (
                <div className="flex flex-wrap gap-1 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {tags.map((tag, index) => (
                        <span key={index} className=" ">
                            #{tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between text-gray-600 dark:text-gray-300 text-sm">
                <div className="flex gap-4">
                    {/* Likes */}
                    <div className="flex items-center gap-1 cursor-pointer" onClick={handleLike}>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9677 9.53416C17.3627 8.4283 16.6518 7.48043 15.4669 7.48043H12.3073C11.8334 7.48043 11.4385 7.08548 11.5174 6.53255L11.9124 4.00488C12.0704 3.29397 11.5964 2.50408 10.8855 2.26711C10.2536 2.03014 9.46372 2.3461 9.14776 2.82004L5.90918 7.63841" stroke="#007BFF" strokeWidth="1.18485" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.90918 14.5893L8.35786 16.485C8.67382 16.801 9.38473 16.959 9.85866 16.959H12.8603C13.8081 16.959 14.835 16.2481 15.072 15.3002L16.0515 12.3223" stroke="#007BFF" strokeWidth="1.18485" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.87988 14.5894V6.84846C1.87988 5.7426 2.35382 5.34766 3.45968 5.34766H4.24957C5.35543 5.34766 5.82937 5.7426 5.82937 6.84846V14.5894C5.82937 15.6953 5.35543 16.0903 4.24957 16.0903H3.45968C2.35382 16.0903 1.87988 15.6953 1.87988 14.5894Z" stroke="#007BFF" strokeWidth="1.18485" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{likeCount}</span>
                    </div>

                    {/* Dislikes */}
                    <div className="flex items-center gap-1 cursor-pointer" onClick={handleDislike}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.47758 9.61281C2.08263 10.7187 2.79354 11.6665 3.97838 11.6665L7.13797 11.6665C7.61191 11.6665 8.00686 12.0615 7.92787 12.6144L7.53292 15.1421C7.37494 15.853 7.84888 16.6429 8.55978 16.8799C9.1917 17.1168 9.9816 16.8009 10.2976 16.3269L13.5361 11.5086" stroke="#FF0000" strokeWidth="1.18485" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.5361 4.5577L11.0875 2.66195C10.7715 2.34599 10.0606 2.18801 9.58665 2.18801L6.58504 2.18801C5.63716 2.18801 4.6103 2.89892 4.37333 3.84679L3.39386 6.82471" stroke="#FF0000" strokeWidth="1.18485" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.5645 4.55752V12.2985C17.5645 13.4044 17.0905 13.7993 15.9847 13.7993H15.1948C14.0889 13.7993 13.615 13.4044 13.615 12.2985V4.55752C13.615 3.45167 14.0889 3.05672 15.1948 3.05672H15.9847C17.0905 3.05672 17.5645 3.45167 17.5645 4.55752Z" stroke="#FF0000" strokeWidth="1.18485" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{dislikeCount}</span>
                    </div>

                    {/* Comments */}
                    <div className="flex items-center gap-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.77148 6.4137C1.77148 3.25411 3.35128 1.67432 6.51087 1.67432H12.83C15.9896 1.67432 17.5694 3.25411 17.5694 6.4137V10.3632C17.5694 13.5228 15.9896 15.1026 12.83 15.1026H12.4351C12.1902 15.1026 11.9533 15.221 11.8032 15.4185L10.6183 16.9983C10.097 17.6934 9.24391 17.6934 8.72258 16.9983L7.53773 15.4185C7.41135 15.2447 7.11909 15.1026 6.90581 15.1026H6.51087C3.35128 15.1026 1.77148 14.3127 1.77148 10.3632V9.57328" stroke="#959595" strokeWidth="1.18485" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12.83" cy="8.78" r="0.75" fill="#959595" />
                            <circle cx="9.67" cy="8.78" r="0.75" fill="#959595" />
                            <circle cx="6.51" cy="8.78" r="0.75" fill="#959595" />
                        </svg>
                        <span>{comments}</span>
                    </div>

                    {/* Share */}
                    <div className="flex items-center gap-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4496 2.85031C16.4595 1.84701 18.0948 3.49021 17.0994 6.50011L14.8637 13.2072C13.3627 17.7181 10.8979 17.7181 9.39695 13.2072L8.73335 11.2164L6.74255 10.5528C2.23165 9.05181 2.23165 6.59491 6.74255 5.08601L10.3765 3.87731" stroke="#959595" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.88379 10.8766L11.712 8.04053" stroke="#959595" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Heart */}
                <div className="flex items-center gap-1 cursor-pointer" onClick={handleHeart}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7769 4.01978C17.4721 4.80188 17.8908 5.82888 17.8908 6.95858C17.8908 12.4886 12.7716 15.7513 10.4806 16.5413C10.212 16.6361 9.76962 16.6361 9.50102 16.5413C7.21002 15.7513 2.09082 12.4886 2.09082 6.95858C2.09082 4.51748 4.05792 2.54248 6.48322 2.54248C7.92102 2.54248 9.19292 3.23768 9.99082 4.31208C10.7887 3.23768 12.0685 2.54248 13.4984 2.54248" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{heartCount}</span>
                </div>
            </div>
        </div>
    );
}
