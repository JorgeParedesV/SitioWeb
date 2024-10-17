import { Component } from "react";

const styles = {
    title: {
        marginBottom:'30px',
        // textAlign: 'center',
    }
}

class Title extends Component{
    render() {
        return (
            <h1 style={styles.title}>Aceites Esenciales</h1>
        )
    }
}

export default Title