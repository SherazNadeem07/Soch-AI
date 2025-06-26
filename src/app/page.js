'use client';
import { useRouter } from 'next/navigation';
import PostFeed from './components/postlists/PostFeed';

export default function HomePage() {
    const router = useRouter();

    return (
        <>
        <div className="p-6 space-y-6">
            <button 
                onClick={() => router.push('/create-post')}>
                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2497 18.4167L17.4997 12.75L21.7497 19.125V17H27.4163V7.08333C27.4163 5.52075 26.1456 4.25 24.583 4.25H6.16634C4.60376 4.25 3.33301 5.52075 3.33301 7.08333V24.0833C3.33301 25.6459 4.60376 26.9167 6.16634 26.9167H17.4997V21.25H7.58301L11.833 15.5833L13.2497 18.4167Z" fill="#D6B600" />
                    <path d="M27.4163 19.8335H24.583V24.0835H20.333V26.9168H24.583V31.1668H27.4163V26.9168H31.6663V24.0835H27.4163V19.8335Z" fill="#D6B600" />
                </svg>
            </button>
            <PostFeed />
        </div>
        </>
    );
}
