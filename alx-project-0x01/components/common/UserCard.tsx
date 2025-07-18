import { User } from "@/interfaces";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6 m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.name}</div>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Username:</span> {user.username}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
