import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import * as Unimp from 'react-native-unimp';

const appid = '__UNI__ADD10A8';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [path, setPath] = React.useState<string | undefined>();

  React.useEffect(() => {
    // 初始化小程序
    Unimp.initialize(
      { isEnableBackground: false, capsule: true },
      { backgroundColor: '#1991FB' }
    )
      .then(async () => {
        const isInitialize = await Unimp.isInitialize();
        if (isInitialize) {
          console.debug('[小程序初始化]: 成功');
          Unimp.getAppBasePath(appid).then(_path => {
            setPath(_path);
          });
        }
      })
      .catch((e) => console.debug(`[小程序初始化]: 失败：${e.message}`));
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            调用 <Text style={styles.highlight}>initialize()</Text> 初始化小程序.
          </Section>
          <Section title="See Unimp Path">
            获取小程序路径 <Text style={styles.highlight}>{path}</Text> 以便检查程序资源是否释放.
          </Section>
          <Section title="Open">
            调用 <Text style={styles.highlight}>openUniMP()</Text> 打开小程序.
          </Section>
          <View style={styles.button}>
            <Button title="打开小程序" onPress={() => Unimp.openUniMP(appid)} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    margin: 25,
  },
});

export default App;
