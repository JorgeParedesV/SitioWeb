import { Component } from "react";
import LogoRed from './LogoRed';

const styles = {
    footer: {
        backgroundColor: '#fff',
        border: 'solid 1px #eee',
        display: 'flex',
        position: 'relative',
        bottom: 0,
        justifyContent:'space-between',
        alignItems: 'center',
        padding: '0 25px',
        boxShadow: '0 -2px 3px rgba(0, 0, 0, 0.1)',
    },
    ordenContenido: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',    
    },
    contenidoRedes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
    }
}

class Footer extends Component {
    render() {
        return (
            <div style={ styles.footer }>
                <div style={styles.ordenContenido}>
                    <h4>About Us</h4>
                    <h4>Direccion</h4>
                    <h4>Telefono</h4>
                </div>
                <div style={styles.ordenContenido}>
                    <h2>Redes Sociales</h2>
                    <div style={styles.contenidoRedes}>
                        <LogoRed src={'/logos-redes-sociales/logoig.png'} />
                        <LogoRed src={'/logos-redes-sociales/logowsp.png'} />
                        <LogoRed src={'/logos-redes-sociales/logoface.png'} />
                    </div>
                </div>
                <h3>Author: Pedro's <br /> Development</h3>
            </div>
        )
    }
}


export default Footer