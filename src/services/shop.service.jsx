import axios from "axios";

export const ShopService = {
  async getAll() {
    const { data } = await axios.get(`${process.env.API_HOST_FAKE}/products`);
    return data;
  },
  async getById(id) {
    const { data } = await axios.get(`${process.env.API_HOST_FAKE}/products`, {
      params: {
        id,
      },
    });
    return data[id - 1];
  },
  async getCategories() {
    const { data } = await axios
      .get(`${process.env.API_HOST}/categories`)
      .catch((error) => {
        console.log("erroooor: ", error);
      });
    return data;
  },
  async getCategory(products) {
    const { data } = await axios
      .get(`${process.env.API_HOST}/${products}`)
      .catch((error) => {
        console.log(error);
      });
    return data;
  },
  async sendForm(dataFromForm) {
    const { data } = await axios({
      url: `${process.env.API_HOST}/form`,
      method: "POST",
      data: dataFromForm,
    });
    return data;
  },
};
