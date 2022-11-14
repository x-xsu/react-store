import { Layout } from "../components/Layout";
import cn from "classnames";
import { ProductDetail } from "../components/ProductDetail";
import { useParams } from "react-router-dom";

export function ProductDetailPage() {
  const params = useParams<"id">()

  return (
    <Layout>
      <div className={ cn("container") }>
        <ProductDetail />
      </div>
    </Layout>
  )
}