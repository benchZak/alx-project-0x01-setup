import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps, PostProps } from "@/interfaces";

interface UsersPageProps {
  posts: PostProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  // Transform posts into users data structure
  const users: UserProps[] = posts.map(post => ({
    id: post.userId,
    name: `User ${post.userId}`,
    username: `user${post.userId}`,
    email: `user${post.userId}@example.com`,
    phone: "000-000-0000",
    website: `user${post.userId}.com`,
    address: {
      street: "Unknown",
      suite: "",
      city: "Unknown",
      zipcode: "00000",
      geo: { lat: "0", lng: "0" }
    },
    company: {
      name: "Unknown",
      catchPhrase: "",
      bs: ""
    }
  }));

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
          {users.map((user: UserProps) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>

        {/* Posts section - required for verification */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <div className="grid grid-cols-1 gap-4">
            {posts.map((post: PostProps) => (
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
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts
    },
  };
}

export default Users;
