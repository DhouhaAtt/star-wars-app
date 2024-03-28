import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  cardContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
  },
  logo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  descriptionContainer: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 20,
  },
  paginationButtonContainer: {
    flexDirection: 'row',
    flex : 10,
  },
  withMargin: {
    marginBottom: 10,
  },
  paginationButton: {
    backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginRight:10,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: 'black',
  },
  sortByContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight:20,
    marginTop: 30,
    alignSelf: 'flex-end', 
  },
  
  sortByText: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  dropdownButton: {
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#333333',
  },
  optionsContainer: {
    position: 'absolute',
    top: 60, 
    right: 20, 
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
    zIndex: 1,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  optionButtonText: {
    fontSize: 16,
    color: '#333333',
  },
});

export default styles;
