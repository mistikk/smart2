import { useEffect, useState } from "react";
import isEqual from "lodash/isEqual";

import { getProductByCode } from "../../services/product";

const ProductContainer = ({ children, productCode }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductByCode(productCode).then((data) => {
      setProducts(data);
    });
  }, [productCode]);

  const changeProductAttr = (productIndex, attrs) => {
    const _selectedSku = products[productIndex].skus.find((item) =>
      isEqual(item.attrs, attrs)
    );

    products[productIndex].selectedSku = _selectedSku;
    setProducts([...products]);
  };

  return children && children({ products, changeProductAttr });
};

export default ProductContainer;
