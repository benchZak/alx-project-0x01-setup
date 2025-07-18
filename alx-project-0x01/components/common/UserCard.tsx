import { UserProps } from "@/interfaces";

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
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
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Website:</span> {user.website}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Address</h3>
          <p>{user.address.street}, {user.address.suite}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
