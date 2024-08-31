import { useState,useEffect } from "react";
const Kids = ({onAddToBag})=>{
    const [kidsProducts,setProducts] = useState([]);

    useEffect(()=>{
      fetch("http://localhost:8080/kids/getAll")
      .then(res => res.json())
      .then((result)=>{
        setProducts(result);
      })
    },[])

    
     return (
    <>
    <div className="items-container">
    {kidsProducts.map((product) => (
     <div className="item-container" key={product.id}>
        <img className="item-image" src={product.productImage} alt="not image" />
        <div className="rating">{product.rating} ⭐ | {product.likes}k</div>
        <div className="company-name">{product.brandName}</div>
        <div className="item-name">{product.productName}</div>
        <div className="price">
            <span className="current-price">Rs {product.price}</span>
            <span className="original-price">Rs {product.productDiscount}</span>
            <span className="discount">({product.priceOff}% oFF)</span>
        </div>
        <button className="btn-add-bag" onClick={() => onAddToBag(product)}>Add to Bag</button>
     </div>
    ))}
    </div>

    <footer>
        <div class="footer_container">
            <div class="footer_column">
                <h3>ONLINE SHOPPING</h3>

                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <a href="#">Gift Card</a>
                <a href="#">Myntra Insider</a>
            </div>

            <div class="footer_column">
                <h3>ONLINE SHOPPING</h3>

                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <a href="#">Gift Card</a>
                <a href="#">Myntra Insider</a>
            </div>

            <div class="footer_column">
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
        <hr/>

        <div class="copyright">
            © 2024 www.myntra.com. All rights reserved.
        </div>
    </footer>
    </>
)
}

export default Kids;

   