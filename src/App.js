import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



class App extends Component {
  state = {
    productos: [
      { name: 'Aceite-manzana', price: 5000, img: '/productos/aceite-1.jpg'},
      { name: 'Aceite', price: 2500, img: '/productos/aceite-2.jpg'},
      { name: 'Aceite-blanco', price: 3500, img: '/productos/aceite-3.jpg'},
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
      const { carro } = this.state
      if (carro.find(x => x.name === producto.name)){
        const newCarro = carro.map(x => x.name === producto.name
          ? ({
            ...x,
            cantidad: x.cantidad + 1
          })
        : x )
        return this.setState({ carro: newCarro })
      }
      return this.setState({
        carro: this.state.carro.concat({
          ...producto,
          cantidad: 1,
        })
      })
  }

  mostrarCarro = () => {
    if (this.state.carro.lenght) {
     return 
    }
    return this.setState({ esCarroVisible: !this.state.esCarroVisible })
    
  }


  render(){
    const { esCarroVisible } = this.state
    return(
      <div>
        <Navbar 
        carro={this.state.carro} 
        esCarroVisible={ esCarroVisible } 
        mostrarCarro={this.mostrarCarro} />
        <Layout>
          <Title/>
          <Productos 
          agregarAlCarro={this.agregarAlCarro}
          productos={this.state.productos}
          />
        </Layout>
        <Footer />
      </div>
    )
  }
}

export default App;
