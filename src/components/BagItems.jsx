import { useEffect } from "react";

const BagItems = ({cartItems,deleteBagItem}) => {

  let totalMrp = 0;
  let totalDiscount = 0;
  let convenienceFee = 99; // assuming convenience fee is constant
  let totalAmount = 0;
  let countBagItem =0;

  cartItems.forEach((cart) => {
    totalMrp += cart.price;
    totalDiscount += cart.productDiscount; // Assuming `productDiscount` is the discount amount
    countBagItem ++;
  });

  totalAmount = totalMrp - totalDiscount + convenienceFee;

  return (
    <>
    
      <div className="bag-page">
        <div className="bag-items-container">
        {cartItems.map((item, index) => (
          <div className="bag-item-container">
         
            <div className="item-left-part">
              <img
                className="bag-item-img"
                src={item.productImage}
              />
            </div>
            <div className="item-right-part">
              <div className="company">{item.brandName}</div>
              <div className="item-name">
                Men Printed Polo Collar Indian Cricket ODI Jersey
              </div>
              <div className="price-container">
                <span className="current-price">Rs {item.price}</span>
                <span className="original-price">Rs {item.productDiscount}</span>
                <span className="discount-percentage">({item.priceOff}% OFF)</span>
              </div>
              <div className="return-period">
                <span className="return-period-days">14 days</span> return available
              </div>
              <div className="delivery-details">
                Delivery by
                <span className="delivery-details-days">10 Oct 2023</span>
              </div>
            </div>

            <div className="remove-from-cart" onClick={() => deleteBagItem(item.id)}>X</div>
          </div>

          ))}
        </div>
        <div className="bag-summary">
          <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ({countBagItem} Items) </div>
            <div className="price-item">
              <span className="price-item-tag">Total MRP</span>
              <span className="price-item-value">Rs-{totalMrp}</span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Discount on MRP</span>
              <span className="price-item-value priceDetail-base-discount">
                -Rs-{totalDiscount}
              </span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Convenience Fee</span>
              <span className="price-item-value">Rs-99</span>
            </div>
            <hr />
            <div className="price-footer">
              <span className="price-item-tag">Total Amount</span>
              <span className="price-item-value">Rs-{totalAmount}</span>
            </div>
          </div>
          <button className="btn-place-order">
            <div className="css-xjhrni">PLACE ORDER</div>
          </button>
        </div>
      </div>

      <footer>
        <div className="footer_container">
          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>

          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>

          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>
        </div>
        <hr />

        <div className="copyright">© 2024 www.myntra.com. All rights reserved.</div>
      </footer>
    </>
  );
};

export default BagItems;
