import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
const nombre = 'Cortes Galvez Emiliano'
const correo = 'cortemiliano9@gmail.com'
const ubicacion = 'Universidad Tecnologica Emiliano Zapata'
App = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Zi_79vTp7TRQVuo6WryjQjbnRMej_Rfmcl5eXR9Z3YNxUODni4jYK1kabcX2afhyyic&usqp=CAU'}} style= {styles.circulo}></Image>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text >
        Correo: {correo}
      </Text>
      <Text>
        Ubicacion: {ubicacion}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circulo: {
    borderRadius: 100,
    backgroundColor: 'black',
    width: 150,
    height: 150
  },
  nombre: {
    color: 'black',
    fontSize: 20,
    marginTop: 20
  }, 
  cuerpo: {
    color: 'gray',
    fontSize: 15,
    marginTop: 10
  }
});


