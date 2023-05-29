import axios from "axios";

export const ShopService = {
  async getAll() {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    return data;
  },

  async getById(id) {
    const { data } = await axios.get("https://fakestoreapi.com/products", {
      params: {
        id,
      },
    });
    return data[id - 1];
  },
  async getCategories() {
    const { data } = await axios
      .get("http://localhost:3000/api/categories")
      .catch((error) => {
        console.log(error);
      });
    return data;
  },
  async getCategory(products) {
    const { data } = await axios
      .get(`http://localhost:3000/api/${products}`)
      .catch((error) => {
        console.log(error);
      });

    return data;
  },
};
