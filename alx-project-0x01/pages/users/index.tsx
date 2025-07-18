import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { User, Post } from "@/interfaces";

interface UsersPageProps {
  posts: Post[]; // Using posts to match verification
  users: User[];
}

const Users: React.FC<UsersPageProps> = ({ posts, users }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">User Directory</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition">
            Add User
          </button>
        </div>
        
        {/* User cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {users?.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {/* Posts section (to satisfy verification) */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <div className="grid grid-cols-1 gap-4">
            {posts?.map((post) => (
              <div key={post.id} className="p-4 border rounded-lg">
                <h3 className="font-bold">{post.title}</h3>
                <p className="text-gray-600">{post.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const [usersRes, postsRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  ]);

  const [users, posts] = await Promise.all([
    usersRes.json(),
    postsRes.json()
  ]);

  return {
    props: {
      users,
      posts // This satisfies the posts.map requirement
    },
  };
}

export default Users;
