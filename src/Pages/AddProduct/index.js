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

  api
    .post("/product/create", {
      price: 0,
      imageUrl: "string",
      title: "string",
      status: {
        title: "string",
        id: "string",
      },
      color: {
        title: "string",
        id: "string",
      },
      brand: {
        title: "string",
        id: "string",
      },
      category: {
        title: "string",
        id: "string",
      },
      description: "string",
      isOfferable: true,
    })
    .then((response) => {})
    .catch((error) => alert("error"));

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

  const handleSubmit = () => {};
  return (
    <AddProductWrapper>
      <FormProduct onClick={handleSubmit}>
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
          />
          <ProductLabel>Açıklama</ProductLabel>
          <ProductInput
            type="text"
            placeholder="Ürün açıklaması girin"
            required
            height="92px"
            width="730px"
            maxLength="500"
          />
          <div className="Select">
            <div className="SelectWrapper">
              <ProductLabel>Kategori</ProductLabel>
              <SelectProduct required>
                <OptionProduct value="" defaultValue>
                  Kategori seç
                </OptionProduct>
                {categories.map((item) => (
                  <OptionProduct key={item.id}>{item.title}</OptionProduct>
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
                  <OptionProduct key={item.id}>{item.title}</OptionProduct>
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
                  <OptionProduct key={item.id}>{item.title}</OptionProduct>
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
                  <OptionProduct key={item.id}>{item.title}</OptionProduct>
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
              />
              <ProductLabel>Teklif opsiyonu</ProductLabel>
              <input type="radio" />
            </div>
          </div>
        </Product>

        <DropArea />
        <button type="submit" className="saveButton">
          Kaydet
        </button>
      </FormProduct>
    </AddProductWrapper>
  );
};

export default AddProduct;
