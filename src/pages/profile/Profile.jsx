import { useParams } from "react-router-dom";
import Single from "../../features/single/Single";
import { singleUser } from "../../data";

export default function Profile() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="profile">
      <Single {...singleUser} />
    </div>
  );
}
