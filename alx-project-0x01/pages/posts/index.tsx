import PostCard from "@/components/common/PostCard"; // Required for Task 2
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import UserProps from "@/interfaces";
import { UserData, PostData } from "@/interfaces"; // Added PostData import
import { useState } from "react";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [allUsers, setAllUsers] = useState<UserProps[]>(users);
  
  // KEPT FROM TASK 4 AS REQUIRED (even though not used in this component)
  const [post, setPost] = useState<PostData | null>(null); 

  const handleAddUser = (newUser: UserData) => {
    const userWithId = {
      ...newUser,
      id: allUsers.length + 1
    };
    setAllUsers([userWithId, ...allUsers]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">User Directory</h1>
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition"
          >
            Add User
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allUsers.map(user => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: { users },
  };
}

export default Users;
