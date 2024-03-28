import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import moment from 'moment';
import styles from './styles';
import useGetPeopleWithPagination from '../../hooks/useGetPeopleWithPagination';
import { Ionicons } from '@expo/vector-icons';

const CharacterDetail = ({ route }) => {
  const params = route?.params;
  const navigation = useNavigation();
  const [films, setFilms] = useState([]);
  const [nextItem, setNextItem] = useState(null);
  const [prevItem, setPrevItem] = useState(null);
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: params?.item?.name,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.headerLeft}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
    setPeopleData(params?.peopleData);

    // Fetch films data
    const fetchFilms = async () => {
      const filmsData = await Promise.all(
        params?.item?.films.map(async (filmUrl) => {
          const response = await fetch(filmUrl);
          const data = await response.json();
          return data.title;
        })
      );
      setFilms(filmsData);
    };
    fetchFilms();
  }, []);

  useEffect(() => {
    const getNextItem = (currentItem, people) => {
      const currentIndex = people.findIndex(item => item.name === currentItem.name);
      if (currentIndex !== -1 && currentIndex < people.length - 1) {
        setNextItem(people[currentIndex + 1]);
      } else {
        setNextItem(null);
      }
    };

    const getPreviousItem = (currentItem, people) => {
      const currentIndex = people.findIndex(item => item.name === currentItem.name);
      if (currentIndex > 0 && currentIndex !== -1) {
        setPrevItem(people[currentIndex - 1]);
      } else {
        setPrevItem(null);
      }
    };

    getNextItem(params.item, params?.peopleData);
    getPreviousItem(params.item, params?.peopleData);
  }, [params]);

  const handleNext = () => {
    if (nextItem) {
      navigation.push('CharacterDetail', {
        item: nextItem,
        peopleData
      });
    }
  };

  const handlePrev = () => {
    if (prevItem) {
      navigation.push('CharacterDetail', {
        item: prevItem,
        peopleData
      });
    }
  };

  return (
    <ImageBackground source={require('../../assets/character-detail-background.jpeg')} style={styles.backgroundStyle}>
      <View style={styles.container}>
        <View style={styles.footerContainer}>
          <Text style={styles.title}>Character details :</Text>
          <Text style={styles.item}>Name: {params?.item?.name}</Text>
          <Text style={styles.item}>Height: {params?.item?.height}</Text>
          <Text style={styles.item}>Mass: {params?.item?.mass}</Text>
          <Text style={styles.item}>Gender: {params?.item?.gender}</Text>
          <Text style={styles.item}>Hair color: {params?.item?.hair_color}</Text>
          <Text style={styles.item}>Skin color: {params?.item?.skin_color}</Text>
          <Text style={styles.item}>Eye color: {params?.item?.eye_color}</Text>
          <Text style={styles.item}>Films: {films.join(', ')}</Text>
          <Text style={styles.item}>Created: {moment(params?.item?.created).format('DD/MM/YYYY')}</Text>
          <Text style={styles.item}>Last modified: {moment(params?.item?.edited).format('DD/MM/YYYY')}</Text>
        </View>
      </View>

      <View style={styles.footerButtonsContainer}>
        {prevItem && (
          <TouchableOpacity onPress={handlePrev}>
            <Text style={styles.footerButton}>Prev</Text>
          </TouchableOpacity>
        )}
        {nextItem && (
          <TouchableOpacity onPress={handleNext}>
            <Text style={[styles.footerButton]}>Next</Text>
          </TouchableOpacity>
        )}
      </View>


    </ImageBackground>
  );
};

export default CharacterDetail;
