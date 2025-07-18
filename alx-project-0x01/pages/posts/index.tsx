import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal"; // NEW: Import the modal component
import Header from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces"; // NEW: Added PostData import
import { useState } from "react"; // NEW: Import useState hook

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  // NEW: State for modal visibility and posts list
  const [isModalOpen, setModalOpen] = useState(false);
  const [allPosts, setAllPosts] = useState<PostProps[]>(posts); // NEW: Local state for posts

  // NEW: Handler for adding new posts
  const handleAddPost = (newPost: PostData) => {
    // Create new post with generated ID
    const postWithId = {
      ...newPost,
      id: allPosts.length + 1 // Simple ID generation
    };
    // Add new post to beginning of array
    setAllPosts([postWithId, ...allPosts]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          {/* NEW: Added click handler to open modal */}
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* CHANGED: Now using allPosts instead of posts */}
          {allPosts.map(post => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
              id={post.id}
            />
          ))}
        </div>
      </main>

      {/* NEW: Modal rendering logic */}
      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)} // Closes modal
          onSubmit={handleAddPost} // Handles form submission
        />
      )}
    </div>
  );
};

// Unchanged static props function
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
}

export default Posts;
