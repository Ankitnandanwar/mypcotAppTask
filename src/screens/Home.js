import { View, Text, Image, StyleSheet, StatusBar, ScrollView, FlatList, SafeAreaView, Alert } from 'react-native'
import React from 'react'
import ItemsCard from '../components/ItemsCard'
import MenuIcon from '../icons/Group 919.svg';
import NotifyIcon from '../icons/notificationicon.svg';
import FavIcon from '../icons/Group 921.svg';
import ProfIcon from '../icons/profIcon.svg'
import SearchIcon from '../icons/Group 918.svg';
import { cards } from '../constants/category';
import DateHeader from '../components/DateHeader';
import WeekDaySelector from '../components/WeekDaySelector';
import OrderCard from '../components/OrderCard';


const Home = ({ navigation }) => {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f6f7f8" />

        <View style={styles.header}>
          <View style={styles.borderStyle}>
            <MenuIcon width={16} height={16} />
          </View>
          <View style={styles.headerIcons}>
            <View style={styles.borderStyle}>
              <FavIcon width={38} height={38} />
            </View>
            <View style={styles.borderStyle}>
              <NotifyIcon width={38} height={38} />
              <Text style={{ position: 'absolute', top: 4, right: 3, backgroundColor: '#FE804E', color: '#fff', borderRadius: 10, paddingHorizontal: 5, paddingVertical: 1, fontSize: 9 }}>2</Text>
            </View>
            <View style={styles.borderStyle}>
              <ProfIcon width={110} height={110} style={{ position: 'relative', top: 3, left: 3 }} />
            </View>
          </View>
        </View>




        <View style={styles.header}>
          <View>
            <Text style={styles.locText}>Welcome, Mypcot !!</Text>
            <Text style={styles.locSub}>here is your dashboard....</Text>
          </View>
          <View>
            <View style={[styles.borderStyle, { width: 64, height: 64, borderRadius: 32, padding: 0, }]}>
              <SearchIcon width={30} height={30} />
            </View>
          </View>
        </View>


        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ padding: 5 }}>
          {
            cards.map((item) => (
              <ItemsCard key={item.id} item={item} />
            ))
          }
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.timeContainer}>
          <DateHeader />
          <WeekDaySelector />
        </ScrollView>

        <OrderCard />


      </SafeAreaView>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#f6f7f8',
    paddingBottom: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16
  },

  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locText: {
    fontSize: 20,
    fontFamily: "Roboto-SemiBold",
    color: "#6b7791",
  },
  locSub: {
    marginTop: 4,
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
    color: '#888',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 25,
    alignItems: 'center',
  },
  borderStyle: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 22,
    padding: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  offerImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  seeAll: {
    color: '#ff0066',
    fontSize: 14
  },

  timeContainer: {
    flexDirection: 'column',
    width: '100%'
  }
})

export default Home