import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
  },
  footerContainer: {
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    opacity: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white'
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  footerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  footerButton: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
    color: 'white', fontSize: 16,
    fontWeight: 'bold',
  },

});

export default styles;
