import { useParams } from "react-router-dom";

export function ProductDetailsPage() {
  const params = useParams<'id'>();
  return (
    <div className="container mx-auto pt-5 max-w-[760px]">
      <h1>ProductDetails {params.id}</h1>
    </div>

  )
}
