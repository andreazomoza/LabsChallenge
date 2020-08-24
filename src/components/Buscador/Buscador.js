import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from '../../redux/actions/index';
import './Buscador.css';
import EnhancedTable from "../table";
let datitos =  [];


function mapStateToProps(state) {
  return {
    articles: state.productsLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    
    getData: title => dispatch(getData(title))
    
  };
}

export class Post extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
  }
  
 
  handleSubmit(event) {
    event.preventDefault();
    const inputText = this.myRef.current.value
    this.props.getData(inputText);
  }
  
  

  render() {

   datitos = this.props.articles;
   

    return (
      <div>
        
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div>
            <label className="label" htmlFor="title">Productos: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              ref={this.myRef}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
                         
        <EnhancedTable data={datitos} />
               
        
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
