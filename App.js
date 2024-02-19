import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Estilos';

export default function App() {
  const [entradaActual, setEntradaActual] = useState('');
  const [entradaAnterior, setEntradaAnterior] = useState('');
  const [operacion, setOperacion] = useState('');

  const presionarNumero = (numero) => {
    setEntradaActual(entradaActual + numero);
  };

  const presionarOperacion = (op) => {
    if (op === '=' && operacion !== '') {
      calcularResultado();
    } else {
      setOperacion(op);
      if (entradaActual !== '') {
        setEntradaAnterior(entradaActual);
        setEntradaActual('');
      }
    }
  };

  const calcularResultado = () => {
    let actual = parseFloat(entradaActual);
    const anterior = parseFloat(entradaAnterior);
    if (isNaN(actual) || isNaN(anterior) && operacion !== '^') return;

    let resultado = '';
    switch (operacion) {
      case '+':
        resultado = anterior + actual;
        break;
      case '-':
        resultado = anterior - actual;
        break;
      case '*':
        resultado = anterior * actual;
        break;
      case '/':
        resultado = anterior / actual;
        break;
      case '^':
        resultado = Math.pow(anterior, actual);
        break;
      default:
        return;
    }

    setEntradaActual(resultado.toString());
    setOperacion('');
    setEntradaAnterior('');
  };

  const limpiar = () => {
    setEntradaActual('');
    setEntradaAnterior('');
    setOperacion('');
  };

  const borrarUltimo = () => {
    setEntradaActual(entradaActual.substring(0, entradaActual.length - 1));
  };

  const cambiarSigno = () => {
    setEntradaActual((parseFloat(entradaActual) * -1).toString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{entradaActual || '0'}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button_operator} onPress={() => limpiar()}>
            <Text style={styles.buttonText_operator}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_operator} onPress={() => borrarUltimo()}>
            <Text style={styles.buttonText_operator}>⌫</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_operator} onPress={() => presionarOperacion('%')}>
            <Text style={styles.buttonText_operator}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_operator} onPress={() => presionarOperacion('*')}>
            <Text style={styles.buttonText_operator}>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => presionarNumero('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => presionarNumero('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => presionarNumero('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_operator} onPress={() => presionarOperacion('/')}>
            <Text style={styles.buttonText_operator}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => presionarNumero('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => presionarNumero('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => presionarNumero('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_operator} onPress={() => presionarOperacion('+')}>
            <Text style={styles.buttonText_operator}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => presionarNumero('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => presionarNumero('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => presionarNumero('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_operator} onPress={() => presionarOperacion('-')}>
            <Text style={styles.buttonText_operator}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button_result} onPress={() => presionarNumero('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_result} onPress={() => presionarNumero('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_result} onPress={() => presionarOperacion('=')}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}

