/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, FlatList} from 'react-native';
import axios from 'axios';
import MemberItem from './memberItem';
import styles from './styles';

const baseUrl = 'http://localhost:3000';
interface APIGetPhotosResponse {
  memberId: string;
  photos: APIPhoto[];
}

interface APIPhoto {
  id: string;
  url: string;
  width: number;
  height: number;
}
////////////////////////////////////////////////////////////////////////////////
// INTERVIEW NOTES: START WITH THIS COMPONENT FOR YOUR IMPLEMENTATION
////////////////////////////////////////////////////////////////////////////////
const App = () => {
  const [members, setMembers] = useState<APIPhoto[] | []>([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/member/1/photos`)
      .then((response) => {
        console.log('REPONSE DATA ', response);
        let _members: APIGetPhotosResponse = response.data[0];
        setMembers(_members.photos);
      })
      .catch((err) => {});
  }, []);

  const _onHandleDelete = (id: string) => {
    var _members: APIPhoto[] = [...members];
    var _newMembers: APIPhoto[] = [];
    _members.forEach((element) => {
      if (element.id != id) {
        _newMembers.push(element);
      }
    });
    setMembers(_newMembers);
  };

  const _renderItem = ({item}: {item: APIPhoto}) => {
    return (
      <MemberItem
        url={item.url}
        height={item.height}
        width={item.width}
        onHandleDelete={() => _onHandleDelete(item.id)}
      />
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.memberListContainer}
          numColumns={3}
          data={members}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
