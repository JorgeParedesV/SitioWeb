import { hover } from "@testing-library/user-event/dist/hover";
import { Component } from "react";
// state = {
//     socialMedia: [
//         { name: 'Instagram', img: '/logos-redes-sociales/logoig.png'},
//         { name: 'Whatsapp', img: '/productos/logowsp.png'},
//         { name: 'Facebook', img: '/productos/logoface.png'},
//       ]
// }

const styles = {
    logored: {
        padding: '10px 15px',

    "&:hover": {
        cursor: "pointer"
       },
    },


}

class LogoRed extends Component {
    render() {
        return (
            <img style={styles.logored["&:hover"]} {...this.props} width='40' height='40'/>
        )
    }
}


export default LogoRed