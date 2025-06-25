'use client';
import { useState } from 'react';
export default function CreatePostForm({ userImage, userName, onSubmit }) {
    const [formData, setFormData] = useState({
        category: '',
        title: '',
        description: '',
        hashtag: '',
        attachments: []
    });

    const categories = ['LEARNING', 'HEALTH', 'TECHNOLOGY', 'BUSINESS', 'ENTERTAINMENT'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            category: '',
            title: '',
            description: '',
            hashtag: '',
            attachments: []
        });
    };

    const handleAttachment = (type) => {
        console.log(`Adding ${type} attachment`);
    };

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-xl shadow-md p-4 w-full max-w-2xl mx-auto mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Create Post</h2>
            </div>

            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                    <img src={userImage} alt={userName} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                        <p className="font-semibold">{userName}</p>
                        <div className="relative">
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 appearance-none pr-6"
                                required
                            >
                                <option value="" disabled>Category</option>
                                {categories.map((cat, index) => (
                                    <option key={index} value={cat}>{cat}</option>
                                ))}
                            </select>
                            <div className="absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-3 rounded-lg p-3">
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Title (optional)"
                        className="w-full p-2 bg-transparent focus:outline-none mb-2 text-sm italic text-gray-600 dark:text-gray-300"
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="What's on your mind?"
                        rows="3"
                        className="w-full p-2 bg-transparent focus:outline-none mb-2 text-base font-medium text-gray-800 dark:text-white"
                        required
                    />
                </div>

                {/* Add to your post - All SVGs in one line */}
                <div className="border border-gray-300 rounded-xl p-3 mb-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Add to your post
                        </span>
                        <div className="flex items-center gap-4">
                            {/* Mic Icon */}
                            <button type="button" onClick={() => handleAttachment('audio')}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.9997 14.896C8.59801 14.896 6.64551 12.9435 6.64551 10.5418V5.50016C6.64551 3.0985 8.59801 1.146 10.9997 1.146C13.4013 1.146 15.3538 3.0985 15.3538 5.50016V10.5418C15.3538 12.9435 13.4013 14.896 10.9997 14.896ZM10.9997 2.521C9.35884 2.521 8.02051 3.85933 8.02051 5.50016V10.5418C8.02051 12.1827 9.35884 13.521 10.9997 13.521C12.6405 13.521 13.9788 12.1827 13.9788 10.5418V5.50016C13.9788 3.85933 12.6405 2.521 10.9997 2.521Z" fill="#28A745" />
                                    <path d="M10.9998 18.104C6.75564 18.104 3.2998 14.6482 3.2998 10.404V8.8457C3.2998 8.46987 3.61147 8.1582 3.9873 8.1582C4.36314 8.1582 4.6748 8.46987 4.6748 8.8457V10.404C4.6748 13.8874 7.51647 16.729 10.9998 16.729C14.4831 16.729 17.3248 13.8874 17.3248 10.404V8.8457C17.3248 8.46987 17.6365 8.1582 18.0123 8.1582C18.3881 8.1582 18.6998 8.46987 18.6998 8.8457V10.404C18.6998 14.6482 15.244 18.104 10.9998 18.104Z" fill="#28A745" />
                                    <path d="M12.2739 6.58163C12.2006 6.58163 12.1181 6.57246 12.0356 6.54496C11.3664 6.29746 10.6331 6.29746 9.96389 6.54496C9.60639 6.67329 9.21222 6.48996 9.08389 6.13246C8.95556 5.77496 9.13889 5.38079 9.49639 5.25246C10.4681 4.90413 11.5406 4.90413 12.5122 5.25246C12.8697 5.38079 13.0531 5.77496 12.9247 6.13246C12.8147 6.40746 12.5489 6.58163 12.2739 6.58163Z" fill="#28A745" />
                                    <path d="M11.7336 8.52496C11.6694 8.52496 11.6144 8.51579 11.5502 8.49746C11.1836 8.39663 10.8077 8.39663 10.4411 8.49746C10.0744 8.59829 9.69857 8.37829 9.59773 8.01163C9.4969 7.65413 9.7169 7.27829 10.0836 7.17746C10.6794 7.01246 11.3211 7.01246 11.9169 7.17746C12.2836 7.27829 12.5036 7.65413 12.4027 8.02079C12.3202 8.32329 12.0361 8.52496 11.7336 8.52496Z" fill="#28A745" />
                                    <path d="M11 20.854C10.6242 20.854 10.3125 20.5423 10.3125 20.1665V17.4165C10.3125 17.0407 10.6242 16.729 11 16.729C11.3758 16.729 11.6875 17.0407 11.6875 17.4165V20.1665C11.6875 20.5423 11.3758 20.854 11 20.854Z" fill="#28A745" />
                                </svg>
                            </button>

                            {/* File Icon */}
                            <button type="button" onClick={() => handleAttachment('file')}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.2228 0.916504H16.5278C15.7303 0.916504 15.1437 1.2465 14.8778 1.83317C14.7312 2.099 14.667 2.41067 14.667 2.77734V5.47234C14.667 6.6365 15.3637 7.33317 16.5278 7.33317H19.2228C19.5895 7.33317 19.9012 7.269 20.167 7.12234C20.7537 6.8565 21.0837 6.26984 21.0837 5.47234V2.77734C21.0837 1.61317 20.387 0.916504 19.2228 0.916504ZM20.0845 4.519C19.9928 4.61067 19.8553 4.67484 19.7087 4.684H18.4162V5.1515L18.4253 5.95817C18.4162 6.114 18.3612 6.24234 18.2512 6.35234C18.1595 6.444 18.022 6.50817 17.8753 6.50817C17.5728 6.50817 17.3253 6.26067 17.3253 5.95817V4.67484L16.042 4.684C15.7395 4.684 15.492 4.42734 15.492 4.12484C15.492 3.82234 15.7395 3.57484 16.042 3.57484L16.8487 3.584H17.3253V2.30067C17.3253 1.99817 17.5728 1.7415 17.8753 1.7415C18.1778 1.7415 18.4253 1.99817 18.4253 2.30067L18.4162 2.9515V3.57484H19.7087C20.0112 3.57484 20.2587 3.82234 20.2587 4.12484C20.2495 4.28067 20.1853 4.409 20.0845 4.519Z" fill="#007BFF" />
                                    <path d="M8.25003 9.51519C9.45493 9.51519 10.4317 8.53842 10.4317 7.33352C10.4317 6.12862 9.45493 5.15186 8.25003 5.15186C7.04512 5.15186 6.06836 6.12862 6.06836 7.33352C6.06836 8.53842 7.04512 9.51519 8.25003 9.51519Z" fill="#007BFF" />
                                    <path d="M19.2222 7.3335H18.7913V11.5593L18.6722 11.4585C17.9572 10.8443 16.8022 10.8443 16.0872 11.4585L12.2738 14.731C11.5588 15.3452 10.4038 15.3452 9.68884 14.731L9.37717 14.4743C8.72634 13.906 7.69051 13.851 6.95717 14.346L3.52884 16.6468C3.32717 16.1335 3.20801 15.5377 3.20801 14.841V7.15933C3.20801 4.57433 4.57384 3.2085 7.15884 3.2085H14.6663V2.77766C14.6663 2.411 14.7305 2.09933 14.8772 1.8335H7.15884C3.82217 1.8335 1.83301 3.82266 1.83301 7.15933V14.841C1.83301 15.8402 2.00717 16.711 2.34634 17.4443C3.13467 19.186 4.82134 20.1668 7.15884 20.1668H14.8405C18.1772 20.1668 20.1663 18.1777 20.1663 14.841V7.12266C19.9005 7.26933 19.5888 7.3335 19.2222 7.3335Z" fill="#007BFF" />
                                </svg>
                            </button>
                            {/* Image Icon */}
                            <button type="button" onClick={() => handleAttachment('image')}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.19715 20.1668H15.8038C18.3338 20.1668 19.3421 18.6177 19.4613 16.7293L19.938 9.15766C20.0663 7.17766 18.4896 5.50016 16.5005 5.50016C15.9413 5.50016 15.428 5.17933 15.1713 4.68433L14.5113 3.35516C14.0896 2.521 12.9896 1.8335 12.0546 1.8335H9.95548C9.01131 1.8335 7.91131 2.521 7.48965 3.35516L6.82965 4.68433C6.57298 5.17933 6.05965 5.50016 5.50048 5.50016C3.51131 5.50016 1.93465 7.17766 2.06298 9.15766L2.53965 16.7293C2.64965 18.6177 3.66715 20.1668 6.19715 20.1668Z" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.625 7.3335H12.375" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.9997 16.4998C12.6405 16.4998 13.9788 15.1615 13.9788 13.5207C13.9788 11.8798 12.6405 10.5415 10.9997 10.5415C9.35884 10.5415 8.02051 11.8798 8.02051 13.5207C8.02051 15.1615 9.35884 16.4998 10.9997 16.4998Z" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>

                            <button type="button" onClick={() => handleAttachment('audio')}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4855 18.7184H5.69217C2.79551 18.7184 1.83301 16.7934 1.83301 14.8592V7.14091C1.83301 4.24424 2.79551 3.28174 5.69217 3.28174H11.4855C14.3822 3.28174 15.3447 4.24424 15.3447 7.14091V14.8592C15.3447 17.7559 14.373 18.7184 11.4855 18.7184Z" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.8931 15.6751L15.3447 13.8876V8.10345L17.8931 6.31595C19.1397 5.44512 20.1664 5.97679 20.1664 7.50762V14.4926C20.1664 16.0235 19.1397 16.5551 17.8931 15.6751Z" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.542 10.0835C11.3014 10.0835 11.917 9.46789 11.917 8.7085C11.917 7.9491 11.3014 7.3335 10.542 7.3335C9.7826 7.3335 9.16699 7.9491 9.16699 8.7085C9.16699 9.46789 9.7826 10.0835 10.542 10.0835Z" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="flex items-center justify-center gap-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium"
                >
                    Post
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.808 1.26156C15.0485 0.181367 16.8092 1.9505 15.7375 5.19109L13.3304 12.4122C11.7144 17.2689 9.06068 17.2689 7.44464 12.4122L6.73018 10.2689L4.5868 9.5544C-0.26982 7.93836 -0.26982 5.29316 4.5868 3.66861L8.49932 2.36727" stroke="white" stroke-width="1.27582" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </button>
            </form>
        </div>
    );
}
