import React, { useState } from "react";
import { api } from "../api";
import uploadImage from "../assets/Group 6911.svg";
import { Product } from "../Pages/AddProduct/ScAddProduct";

const DropArea = ({ changeImageUrl }) => {
  const [data, setData] = useState(false);
  const [err, setErr] = useState(false);

  const onDrop = (e) => {
    e.preventDefault();
    const {
      dataTransfer: { files },
    } = e;
    const { length } = files;
    const reader = new FileReader();
    if (length === 0) {
      return false;
    }
    const fileTypes = ["image/jpeg", "image/jpg", "image/png"];
    const { size, type } = files[0];
    setData(false);
    if (!fileTypes.includes(type)) {
      setErr("File format must be either png or jpg");
      return false;
    }
    if (size / 100 / 100 > 2) {
      setErr("File size exceeded the limit of 100KB");
      return false;
    }
    setErr(false);

    reader.readAsDataURL(files[0]);
    reader.onload = (loadEvt) => {
      setData(loadEvt.target.result);
    };
    const formData = new FormData();
    formData.append("file", files[0]);
    api.post("/file/upload/image", formData).then((response) => {
      changeImageUrl(response.data.url);
    });
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };
  const [imgData, setImgData] = useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      api.post("/file/upload/image", formData).then((response) => {
        changeImageUrl(response.data.url);
      });
    }
  };
  return (
    <Product
      flex="4"
      onDrop={(e) => onDrop(e)}
      onDragOver={(e) => onDragOver(e)}
    >
      <div>Ürün Görseli</div>
      {!data && !imgData && (
        <div className="uploadFile">
          <img src={uploadImage} alt="" />
          <span>Sürükleyip bırakarak yükle</span>
          <span>veya</span>
          <input type="file" onChange={onChangePicture} />
          <span>PNG ve JPEG Dosya boyutu: max. 100kb</span>
        </div>
      )}
      {imgData && (
        <div className="imageWrapper">
          <img src={imgData} className="uploadedImage" alt="" />
          <div className="remove" onClick={() => setImgData(null)}>
            x
          </div>
        </div>
      )}
      {data && (
        <div className="imageWrapper">
          <img src={data} className="uploadedImage" alt="" />
          <div className="remove" onClick={() => setData(false)}>
            x
          </div>
        </div>
      )}
      {err && <p>{err}</p>}
    </Product>
  );
};
export default DropArea;
