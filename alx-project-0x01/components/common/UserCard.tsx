import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  address,
  company
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6 m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Username:</span> {username}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Phone:</span> {phone}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
