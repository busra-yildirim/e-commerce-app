import {
  AddProductWrapper,
  Product,
  SelectProduct,
  OptionProduct,
  ProductLabel,
  FormProduct,
  ProductInput,
} from "./ScAddProduct";

import { useState, useEffect, useRef } from "react";
import DropArea from "../../components/DropArea";
import { api } from "../../api";
import Loading from "../../components/Loading";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [color, setColor] = useState([]);
  const [brand, setBrand] = useState([]);
  const [status, setstatus] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
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
      setstatus(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const {
      productName,
      productDescription,
      brand,
      status,
      color,
      price,
      category,
    } = event.target;

    const payload = {
      price: price.value,
      imageUrl: imageUrl,
      title: productName.value,
      status: {
        title: status.selectedOptions[0].text,
        id: status.value,
      },
      color: {
        title: color.selectedOptions[0].text,
        id: color.value,
      },
      brand: {
        title: brand.selectedOptions[0].text,
        id: brand.value,
      },
      category: {
        title: category.selectedOptions[0].text,
        id: category.value,
      },
      description: productDescription.value,
      isOfferable: true,
    };

    api
      .post("/product/create", payload)
      .then((response) => {
        setLoading(false);
        formRef.current.reset();
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      {loading && <Loading />}
      <AddProductWrapper>
        <FormProduct onSubmit={handleSubmit} ref={formRef}>
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
                <SelectProduct required name="category">
                  <OptionProduct value="" defaultValue>
                    Kategori seç
                  </OptionProduct>
                  {categories.map((item) => (
                    <OptionProduct key={item.id} value={item.id}>
                      {item.title}
                    </OptionProduct>
                  ))}
                </SelectProduct>
              </div>
              <div className="SelectWrapper">
                <ProductLabel>Marka</ProductLabel>
                <SelectProduct required name="brand">
                  <OptionProduct value="" defaultValue>
                    Marka seç
                  </OptionProduct>
                  {brand.map((item) => (
                    <OptionProduct key={item.id} value={item.id}>
                      {item.title}
                    </OptionProduct>
                  ))}
                </SelectProduct>
              </div>
              <div className="SelectWrapper">
                <ProductLabel>Renk</ProductLabel>
                <SelectProduct required name="color">
                  <OptionProduct value="" defaultValue>
                    Renk seç
                  </OptionProduct>
                  {color.map((item) => (
                    <OptionProduct key={item.id} value={item.id}>
                      {item.title}
                    </OptionProduct>
                  ))}
                </SelectProduct>
              </div>
              <div className="SelectWrapper">
                <ProductLabel>Kullanım Durumu</ProductLabel>
                <SelectProduct required name="status">
                  <OptionProduct value="" defaultValue>
                    Kullanım durumu seç
                  </OptionProduct>
                  {status.map((item) => (
                    <OptionProduct key={item.id} value={item.id}>
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
    </>
  );
};

export default AddProduct;
