import { StatusBar } from 'expo-status-bar';
import { Button,StyleSheet, Text, TextInput, View } from 'react-native';
import Bot from './componentes/Buton';
import { useEffect, useState } from 'react';


export default function App() {
  const [input, setInput] = useState(0)
  const [total, setTotal] = useState(null)
  const [signo, setSigno] = useState(null)
  const [prevInput, setPrevInput] = useState(0)
  const botones = [7, 8, 9, 'DEL',
    4, 5, 6, '÷',
    1, 2, 3, 'x',
    0, '=', '+','-']
    const handlePress = (tecla) => {
      // números
      if (!isNaN(tecla)) {
        setInput(Number(input + "" + tecla))
      } else {
        let resultado = calcular(signo, prevInput, input)
        setTotal(resultado)
        setPrevInput(total)
        if (tecla === '=') {
          setSigno(null)
        } else {
          setSigno(tecla)
          setPrevInput(total || input)
          setInput(0)
        }
      }
    }
    const resetCalculadora = () => {
      setSigno(null)
      setInput(0)
      setTotal(null)
      setPrevInput(0)
    }
    const calcular = (operacion, a, b) => {
      switch (operacion) {
        case "+": return suma(a, b);
        case "-": return resta(a, b);
        case "x": return multiplicacion(a, b);
        case "÷": return division(a, b);
        case "DEL":
          resetCalculadora()
          break;
      }
    }
    const suma = (a, b) => a + b
    const resta = (a, b) => a - b
    const multiplicacion = (a, b) => a * b
    const division = (a, b) => {
      if (a === 0 || b === 0) {
        return 0
      }
      return a / b
    }
  
  return (
    <View style={styles.container}>
      <Text>CALCULATOR APP</Text>
      <View style={styles.contenedor}>
        <View>
          <TextInput style={styles.textInput} value={total || input} editable={false} />
          
        </View>
        <View style={styles.fila}>
          {botones.slice(0, 4).map((bot, i) => <Bot key={i} title={bot} onPress={handlePress} style={{...styles.botonNumero}}/>)}
        </View>
        <View style={styles.fila}>
          {botones.slice(4, 8).map((bot, i) => <Bot key={i} title={bot} onPress={handlePress} style={styles.botonNumero} />)}
        </View>
        <View style={styles.fila}>
          {botones.slice(8, 12).map((bot, i) => <Bot key={i} title={bot} onPress={handlePress} style={styles.botonNumero} />)}
        </View>
        <View style={styles.fila}>
          {botones.slice(12, 16).map((bot, i) => <Bot key={i} title={bot} onPress={handlePress} style={styles.botonNumero} />)}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  contenedor: {
    gap: 40,
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  fila: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 40
    // backgroundColor: '#9500ca'
  },
  columna: {
    display: 'grid',

  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textInput: {
    backgroundColor: '#613434',
    color: '#FFECEC'
  },
  botonNumero: {
    backgroundColor: '#000000',
    color:'#D9D9D9',
    fontSize: 40
  },
  botonOper: {
    backgroundColor: '#0A0909',
    color:'#979797',
    fontSize: 25
  },
  botonRes: {
    backgroundColor: '#1626B9',
    color:'#D9D9D9',
    fontSize: 25
  },

  textInput:{
    backgroundColor: '#D9D9D9',
    color: '#222121',
    fontSize: 30,
    height:80
  }
  
});
