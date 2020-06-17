import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { Input } from "react-native-elements";
import { firebaseDB } from "../utils/firebaseConfig";

const Live = () => {

  const [text, setText] = useState('')
  const [allData, setAllData] = useState(null)
  const [keyData, setKeyData] = useState(null)

  const setData = () => {
    firebaseDB.ref('users').push({
      user: text
    })
    setText('')
  }

  const getData = () => {
    firebaseDB.ref('users').on('value', (snapshot) => {
      // setKeyData(Object.keys(snapshot.val()))
      setAllData(Object.values(snapshot.val()))
      // console.log(Object.values(snapshot.val()))
    })
  }

  return (
    <View>
      <Input
        placeholder="masukkan text"
        onChangeText={(e) => setText(e)}
        value={text} />
      <Button
        title="Submit"
        onPress={setData} />
      <Button
        title="Get Data"
        onPress={getData} />
      {allData ? allData.map(data => (
        <Text>{data.user}</Text>
      )) : null}
    </View>
  )
}

export default Live