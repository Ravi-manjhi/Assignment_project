import { useParams } from "react-router-dom";
import Single from "../../features/single/Single";
import { singleProduct } from "../../data";

export default function Product() {
  const { id } = useParams();
  console.log(id);

  return <Single {...singleProduct} />;
}
