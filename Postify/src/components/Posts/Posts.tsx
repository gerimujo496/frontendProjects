import { PostType } from "../../types/postType";
import { Post } from "../Post/Post";
import styles from "./Posts.module.css";

interface Props {
  posts: PostType[];
  error: string;
  incrementLike: (userid: string) => void;
  deletePost: (id: number, userId: string) => void;
}

export const Posts: React.FC<Props> = ({
  posts,
  error,
  incrementLike,
  deletePost,
}) => {
  return (
    <div className={styles.postsContainer}>
      {error && <p className="text-danger">{error}</p>}

      {posts.map((data, i) => (
        <Post
          deletePost={deletePost}
          id={data.id}
          key={i}
          incrementLike={incrementLike}
          title={data.title}
          body={data.body}
          uniqueId={data.uniqueId}
          likes={data.likes}
          timestamp={data.timestamp}
          userId={data.userId}
        />
      ))}
    </div>
  );
};
