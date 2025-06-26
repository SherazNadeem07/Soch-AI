import CommentCard from "@/app/components/globalcomponents/comment/comment"
import PostFeed from "../../../components/globalcomponents/postlists/PostFeed"
export default function page() {
    return(
         <div className="p-6 space-y-6">
            <PostFeed />
            <CommentCard/>
        </div>
    )
}