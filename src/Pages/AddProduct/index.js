import {
  AddProductWrapper,
  Product,
  SelectProduct,
  OptionProduct,
  ProductLabel,
  FormProduct,
  ProductInput,
} from "./ScAddProduct";

import { useState, useEffect } from "react";
import DropArea from "../../components/DropArea";
import { api } from "../../api";
const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [color, setColor] = useState([]);
  const [brand, setBrand] = useState([]);
  const [status, setStatus] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  /*
  api
    .post("/product/create", )
    .then((response) => {})
    .catch((error) => alert("error"));
*/
  useEffect(() => {
    api.get("/detail/category/all").then((response) => {
      setCategories(response.data);
    });
  }, []);
  useEffect(() => {
    api.get("/detail/color/all").then((response) => {
      setColor(response.data);
    });
  }, []);
  useEffect(() => {
    api.get("/detail/brand/all").then((response) => {
      setBrand(response.data);
    });
  }, []);
  useEffect(() => {
    api.get("/detail/status/all").then((response) => {
      setStatus(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { productName, productDescription, brand, status, color, price } =
      event.target;
    console.log("status", status.value);
    const payload = {
      price: price,
      imageUrl: imageUrl,
      title: productName.value,
      status: {
        title: status,
        id: "string",
      },
      color: {
        title: color,
        id: "string",
      },
      brand: {
        title: brand,
        id: "string",
      },
      category: {
        title: "string",
        id: "string",
      },
      description: productDescription.value,
      isOfferable: true,
    };
    console.log("payload", payload);
  };
  return (
    <AddProductWrapper>
      <FormProduct onSubmit={handleSubmit}>
        <Product flex="5">
          <div> Ürün Detayları </div>
          <ProductLabel>Ürün Adı</ProductLabel>
          <ProductInput
            type="text"
            placeholder="Örnek: Iphone 12 Pro Max"
            required
            height="45px"
            width="730px"
            maxLength="100"
            name="productName"
          />
          <ProductLabel>Açıklama</ProductLabel>
          <ProductInput
            type="text"
            placeholder="Ürün açıklaması girin"
            required
            height="92px"
            width="730px"
            maxLength="500"
            name="productDescription"
          />
          <div className="Select">
            <div className="SelectWrapper">
              <ProductLabel>Kategori</ProductLabel>
              <SelectProduct required>
                <OptionProduct value="" defaultValue>
                  Kategori seç
                </OptionProduct>
                {categories.map((item) => (
                  <OptionProduct key={item.id} name="category">
                    {item.title}
                  </OptionProduct>
                ))}
              </SelectProduct>
            </div>
            <div className="SelectWrapper">
              <ProductLabel>Marka</ProductLabel>
              <SelectProduct required>
                <OptionProduct value="" defaultValue>
                  Marka seç
                </OptionProduct>
                {brand.map((item) => (
                  <OptionProduct key={item.id} name="brand">
                    {item.title}
                  </OptionProduct>
                ))}
              </SelectProduct>
            </div>
            <div className="SelectWrapper">
              <ProductLabel>Renk</ProductLabel>
              <SelectProduct required>
                <OptionProduct value="" defaultValue>
                  Renk seç
                </OptionProduct>
                {color.map((item) => (
                  <OptionProduct key={item.id} name="color">
                    {item.title}
                  </OptionProduct>
                ))}
              </SelectProduct>
            </div>
            <div className="SelectWrapper">
              <ProductLabel>Kullanım Durumu</ProductLabel>
              <SelectProduct required>
                <OptionProduct value="" defaultValue>
                  Kullanım durumu seç
                </OptionProduct>
                {status.map((item) => (
                  <OptionProduct key={item.id} name="status" value={item.id}>
                    {item.title}
                  </OptionProduct>
                ))}
              </SelectProduct>
            </div>
            <div className="priceAndOfferWrapper">
              <ProductLabel>Fiyat</ProductLabel>
              <ProductInput
                type="number"
                placeholder="Bir fiyat girin TL"
                required
                height="45px"
                width="236px"
                name="price"
              />
              <ProductLabel>Teklif opsiyonu</ProductLabel>
              <input type="radio" />
            </div>
          </div>
        </Product>
        <DropArea changeImageUrl={setImageUrl} />
        <button type="submit" className="saveButton">
          Kaydet
        </button>
      </FormProduct>
    </AddProductWrapper>
  );
};

export default AddProduct;
