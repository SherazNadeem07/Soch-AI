'use client';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreatePost from '../../createpost/CreatePost';
import { fetchPosts } from '../../../../Redux/Slices/postsSlice';
import SvgIcon from '../SvgIcon';

export default function PostFeed() {
    const { items, status, error } = useSelector(state => state.posts);
    const dispatch = useDispatch()

    useEffect(() => {
        if (items.length === 0) {
            dispatch(fetchPosts())
        }
    }, [dispatch, items.length])


    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;


    return (
        <div className="space-y-6">
            {items.length === 0 ? (
                <p>No posts found</p>
            ) : (
                items.map(post => (
                    <CreatePost key={post.id} {...post} />
                ))
            )}
            <SvgIcon src='liked'/>
        </div>
    );
}
