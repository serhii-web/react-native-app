import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { getPicture } from "../src/api/getData";
import { PictureType, Prop } from "../src/interfaces/Interfaces";
import { Images } from "../src/components/Images";
import { Navigation } from "../src/components/Navigation";
import { Content } from "../src/components/Content";

export const ImagePage: React.FC<Prop> = ({ navigation }) => {
  const [pictures, setPictures] = useState<Array<PictureType>>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const result = await getPicture(page);

      setPictures((prev) => [...prev, ...result]);
    })();
  }, [page]);


  const addPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Content>
      <View style={styles.images}>
        <Navigation navigation={navigation} />
        <FlatList
          data={pictures}
          renderItem={({ item }) => <Images {...item} />}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={addPage}
          onEndReachedThreshold={10}
        />
      </View>
    </Content>
  );
};

const styles = StyleSheet.create({
  images: {
    paddingTop: 10,
    borderStyle: "solid",
    borderTopWidth: 2,
    borderTopColor: "#2F4F4F",
  },
});
