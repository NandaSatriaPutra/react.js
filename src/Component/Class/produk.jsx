import React, {Component} from 'react'
import './CSS/Produk.css';
class Produk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disabled: false,

        }
    }
    ButtonBeli = () => {
        this.setState({
            stock: this.state.stock-1
        })

        if(this.state.stock ===1){
            this.setState({
                status: "Habis",
                disabled: true
            })
        }
    }
    render() {
        return (
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/Apple_iPhone_11_Pro_Max/Apple_iPhone_11_Pro_Max_L_1.jpg" alt=""/>
                <p>RP. {this.props.harga}</p>
                <p>STOCK  {this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
            <p>{this.state.status}</p>
        </div>
        )
    }
}

export default Produk; 