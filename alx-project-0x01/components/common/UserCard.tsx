import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
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
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Website:</span> {website}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Address</h3>
          <p>{address.street}, {address.suite}</p>
          <p>{address.city}, {address.zipcode}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg mt-3">
          <h3 className="font-bold text-lg mb-2">Company</h3>
          <p className="font-semibold">{company.name}</p>
          <p>{company.catchPhrase}</p>
          <p className="text-sm text-gray-600">{company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
