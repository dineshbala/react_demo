import React, {Component} from 'react';
import data from '../json/prodcat.json';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: data.products
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        alert('add to cart');
    }
    render() {
        const productData = this.state.products.map(eachProduct => (
            <div key={eachProduct.product_id} className="react-app__product">
                <div className="react-app__product--right">
                    <div className="react-app__product--name">{eachProduct.display_name}</div>
                    <div className="react-app__product--sub-title">{eachProduct.sub_display_name}</div>
                    <div className="react-app__product--description">{eachProduct.description}</div>
                    <div className="react-app__product--short-description">{eachProduct.short_description}</div>
                    <a href="#" className="react-app__product--add-to-bag" onClick={this.onClick}>Add to bag</a>
                </div>
                <div className="react-app__product--left">
                    <img  className="react-app__product--img" src={eachProduct.product_img} alt="" />
                </div>
            </div>
        ));
        return (
            <div className="react-app__products">
                {productData}
            </div>
        )
    }
}

export default Products;