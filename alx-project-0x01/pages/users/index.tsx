import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal"; // ADDED: Import UserModal
import { UserProps, PostData } from "@/interfaces"; // MODIFIED: Added PostData
import { useState } from "react"; // ADDED: Import useState

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  // ADDED: State for modal and post (from Task 4 requirement)
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<PostData | null>(null); // Kept from Task 4
  const [allUsers, setAllUsers] = useState<UserProps[]>(users); // ADDED: Local users state

  // ADDED: Handler for new users
  const handleAddUser = (newUser: UserProps) => {
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
          {/* MODIFIED: Added onClick handler */}
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition"
          >
            Add User
          </button>
        </div>
        
        {/* User cards section - now uses allUsers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {allUsers.map(user => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      {/* ADDED: UserModal component */}
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
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: { users },
  };
}

export default Users;
