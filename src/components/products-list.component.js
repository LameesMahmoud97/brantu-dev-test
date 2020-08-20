import React, { Component } from 'react';
import axios from 'axios';


export default class ProductsList extends Component {
  
    constructor(props) {
        super(props);
    
        this.onChangeProductname = this.onChangeProductname.bind(this);
    
        this.state = {
          name: '',
          brand: '',
          price: 0,
          image: '',
          category: [],
          products: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/products/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                products: response.data.map(product => product.name),
                name: response.data[0].name
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
    }

    onChangeProductname(e) {
        this.setState({
          name: e.target.value
        })
    }

    
  render() {
    return (

      <form action="" class="navbar-form navbar-right">
        <div class="input-group">
          <div style = {{width : "70%"}}>
            <select type="Search" placeholder="Search..." class="form-control" data={this.state.name}
              onChange={this.onChangeProductname } >
                  {
                this.state.products.map(function(product) {
                  return <option 
                    key={product}
                    value={product}>{product}
                    </option>;
                })
              }
            </select>
          </div>
        </div>
      </form> 
    );
  }
}      
        