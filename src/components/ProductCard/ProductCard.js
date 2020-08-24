import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../redux/actions/index';
import { getProductDetail } from '../../redux/actions/index';
import './ProductCard.css';

class ProductCard extends React.Component {

    componentDidMount() {
        const { match: { params: { id }}} = this.props;
        this.props.getProductDetail(id)
        console.log("ID DE COMPONENTE PROD");
        console.log(id);
        
     }

    truncate(str, num) {
        const string = str ? str : ''
        if (string.length <= num) {
          return string
        }
        return string.slice(0, num) + '...'
      }
      
      

    render() {
        
        const { title, id} = this.props.product
        
        return (
            <div>

                <h1>soy componente Product Card</h1>
                <h2>{title}</h2>
                
                
                {this.props.product.attributes && this.props.product.attributes.map((el, i) => (
                
                <div key={i} onClick={this.handleButton}>
                {el.name}:{el.value_name}
                </div>))}
                
                    
                
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        product: state.productDetail
      };
}
const mapDispatchToProps = dispatch => {
    return {
        getProductDetail: (id) => dispatch(getProductDetail(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductCard);