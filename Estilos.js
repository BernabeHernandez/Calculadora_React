import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#1e1e1e',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
    margin: 2,
  },
  resultText: {
    fontSize: 50,
    color: '#fff',
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 20,
    backgroundColor: '#333',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  buttonText_operator: {
    fontSize: 25,
    color: '#fff',
  },
  button_operator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    color: '#fff',
    borderColor: '#555',
    backgroundColor: '#FF99',
    borderRadius: 15,
  },
  button_result: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    color: '#fff',
    borderColor: '#555',
    backgroundColor: '#FF99',
    borderRadius: 25,
  },
});
