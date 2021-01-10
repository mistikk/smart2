import api from "../config/api";

export const getProductByCode = (id) =>
  new Promise((resolve, reject) => {
    const product = localStorage.getItem(id);
    const now = new Date();

    const cachedProduct =
      product && JSON.parse(product).remove_from_cache > now;

    if (cachedProduct) {
      resolve(JSON.parse(product).data);
    } else {
      api
        .get(`/apps/products?merchantCode=vineyardvines&codes[]=${id}`)
        .then((res) => {
          localStorage.setItem(
            id,
            JSON.stringify({
              data: res.data.data,
              remove_from_cache: now.setHours(now.getHours() + 1),
            })
          );
          resolve(res.data.data);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
