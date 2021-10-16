import { useParams } from "react-router-dom";
const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <img src={id} alt="product" />
      <div>product title</div>
      <div>Marka</div>
      <div>Renk</div>
      <div>Kullanım Durumu</div>
      <div>Fiyat</div>
      <div>Teklif</div>
      <button>Satın Al</button>
      <button>Teklif Geri Çek</button>
      <div>Açıklama</div>
    </div>
  );
};

export default ProductDetailPage;
