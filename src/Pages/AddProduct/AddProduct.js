import {
  AddProductWrapper,
  Product,
  SelectProduct,
  OptionProduct,
  ProductLabel,
  FormProduct,
  ProductInput,
} from "../../Components/ScAddProduct";
import uploadImage from "../../Assets/Group 6911.svg";

const AddProduct = () => {
  return (
    <AddProductWrapper>
      <FormProduct>
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
                <OptionProduct value="" default selected>
                  Kategori seç
                </OptionProduct>
              </SelectProduct>
            </div>
            <div className="SelectWrapper">
              <ProductLabel>Marka</ProductLabel>
              <SelectProduct required>
                <OptionProduct value="" default selected>
                  Marka seç
                </OptionProduct>
              </SelectProduct>
            </div>
            <div className="SelectWrapper">
              <ProductLabel>Renk</ProductLabel>
              <SelectProduct required>
                <OptionProduct value="" default selected>
                  Renk seç
                </OptionProduct>
              </SelectProduct>
            </div>
            <div className="SelectWrapper">
              <ProductLabel>Kullanım Durumu</ProductLabel>
              <SelectProduct required>
                <OptionProduct value="" default selected>
                  Kullanım durumu seç
                </OptionProduct>
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

        <Product flex="4">
          <div>Ürün Görseli</div>
          <div className="uploadFile">
            <img src={uploadImage} alt="" />
            <span>Sürükleyip bırakarak yükle</span>
            <span>veya</span>
            <div class="selectImage">Görsel Seçin</div>
            <span>PNG ve JPEG Dosya boyutu: max. 100kb</span>
          </div>
        </Product>
        <button className="saveButton">Kaydet</button>
      </FormProduct>
    </AddProductWrapper>
  );
};

export default AddProduct;
