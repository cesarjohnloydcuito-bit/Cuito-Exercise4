import { isRunningInExpoGo, reloadAppAsync } from 'expo';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const inExpoGo = isRunningInExpoGo();

  return (
    <View style={styles.container}>
      {/* Environment Banner */}
      <View style={[styles.banner, inExpoGo ? styles.bannerExpoGo : styles.bannerStandalone]}>
        <Text style={styles.bannerText}>
          {inExpoGo ? '📱 Running in Expo Go' : '🚀 Running as Standalone App'}
        </Text>
      </View>

      <Text style={styles.title}>Expo SDK Demo</Text>
      <Text style={styles.subtitle}>
        This app uses <Text style={styles.code}>isRunningInExpoGo()</Text> to detect the environment
        and <Text style={styles.code}>reloadAppAsync()</Text> to reload.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => reloadAppAsync('User requested reload')}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>🔄 Reload App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f8f9fa',
  },
  banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  bannerExpoGo: {
    backgroundColor: '#4630EB',
  },
  bannerStandalone: {
    backgroundColor: '#2da44e',
  },
  bannerText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#eee',
    color: '#c0392b',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#4630EB',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 12,
    shadowColor: '#4630EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
