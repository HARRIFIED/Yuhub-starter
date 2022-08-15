interface Props {
  openApp?: any;
}
const SplashFunctions: Props = {};

SplashFunctions.openApp = (navigation: any) => {
  navigation.replace('Home');
};

export default SplashFunctions;
