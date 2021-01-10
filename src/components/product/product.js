import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import get from "lodash/get";

import ProductContainer from "./productContainer";

import Select from "./select";

const ProductView = ({ match }) => (
  <ProductContainer productCode={get(match, "params.id")}>
    {({ products, changeProductAttr }) => (
      <Container>
        {products.map((product, index) => (
          <Fragment key={get(product, "selectedSku._id")}>
            <ProductInfo>
              <ProductImage
                src={get(
                  product,
                  "selectedSku.images[0]",
                  "https://cdn2.smartgiftit.com/merchants/smartgift/assests/logo-text.svg"
                )}
              ></ProductImage>
              <Desc
                dangerouslySetInnerHTML={{
                  __html: get(product, "selectedSku.desc"),
                }}
              />
            </ProductInfo>
            <ProductSettings>
              <Title>{get(product, "selectedSku.name")}</Title>
              <SelectWrapper>
                {Object.keys(get(product, "attrList")).map((attr) => (
                  <Select
                    key={attr}
                    defaultOption={get(product, `selectedSku.attrs[${attr}]`)}
                    label={attr}
                    items={get(product, `attrList[${attr}]`)}
                    onChange={(value) =>
                      changeProductAttr(index, {
                        ...get(product, "selectedSku.attrs", []),
                        [attr]: value,
                      })
                    }
                  />
                ))}
              </SelectWrapper>
              <Button
                disabled={!get(product, "selectedSku.orderable")}
                onClick={() =>
                  alert(`Selected SKU : ${get(product, "selectedSku.sku")}`)
                }
              >
                Accept
              </Button>
              {!get(product, "selectedSku.orderable") && (
                <div>Selection is not available</div>
              )}
            </ProductSettings>
          </Fragment>
        ))}
      </Container>
    )}
  </ProductContainer>
);

const Container = styled.div`
  max-width: 1010px;
  display: flex;
  width: 100%;
  margin: 20px auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductSettings = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  height: 50%;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.a`
  display: flex;
  background-color: rgb(0, 84, 234);
  border: 2px solid rgb(191, 214, 255);
  height: 55px;
  margin: 30px 12px 0px 24px;
  max-width: 350px;
  width: 100%;
  border-radius: 30px;
  cursor: pointer;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${({ theme }) => theme.text};
  font-style: normal;
  text-decoration: none;
  text-transform: uppercase;
  ${(props) =>
    props.disabled &&
    css`
      background: white;
      color: black;
    `}
`;

const ProductImage = styled.img`
  width: 100%;
  margin-right: 50px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.title};
  font-style: bold;
`;

const Desc = styled.h1`
  font-size: ${({ theme }) => theme.text};
  font-style: normal;
  text-align: left;
`;

export default ProductView;
