import { StyleSheet, Text, View } from 'react-native';
import {Canvas, Circle} from "@shopify/react-native-skia";


export default function App() {
  const r = 128;
  return (
      <Canvas style={styles.container}>
        <Circle cx={160} cy={200} r={r} color="lightblue" />
      </Canvas>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
