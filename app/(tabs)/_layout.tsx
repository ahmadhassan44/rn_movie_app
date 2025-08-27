import { Tabs } from "expo-router";
import { Bookmark, Home, Search, User } from "lucide-react-native";
import { Text, View } from "react-native";

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#0F0D23',
          borderTopColor: '#e9ecef',
          borderRadius: 100,
          marginHorizontal: 10,
          marginBottom: 20,
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'row',
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 0,
        },
        tabBarActiveTintColor: '#6366f1',
        tabBarInactiveTintColor: '#6c757d',
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View className={`flex-row items-center justify-center px-4 py-2 rounded-3xl mx-1 ${focused ? 'bg-gradient-to-r from-purple-600 to-purple-800' : 'bg-transparent'}`}>
              <Home color={focused ? '#ffffff' : '#9ca3af'} size={18} />
              <Text className={`ml-2 text-sm font-medium ${focused ? 'text-white' : 'text-gray-400'}`}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View className={`flex-row items-center justify-center px-4 py-2 rounded-3xl mx-1 ${focused ? 'bg-gradient-to-r from-purple-600 to-purple-800' : 'bg-transparent'}`}>
              <Search color={focused ? '#ffffff' : '#9ca3af'} size={18} />
              <Text className={`ml-2 text-sm font-medium ${focused ? 'text-white' : 'text-gray-400'}`}>
                Search
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View className={`flex-row items-center justify-center px-4 py-2 rounded-3xl mx-1 ${focused ? 'bg-gradient-to-r from-purple-600 to-purple-800' : 'bg-transparent'}`}>
              <Bookmark color={focused ? '#ffffff' : '#9ca3af'} size={18} />
              <Text className={`ml-2 text-sm font-medium ${focused ? 'text-white' : 'text-gray-400'}`}>
                Saved
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View className={`flex-row items-center justify-center px-4 py-2 rounded-3xl mx-1 ${focused ? 'bg-gradient-to-r from-purple-600 to-purple-800' : 'bg-transparent'}`}>
              <User color={focused ? '#ffffff' : '#9ca3af'} size={18} />
              <Text className={`ml-2 text-sm font-medium ${focused ? 'text-white' : 'text-gray-400'}`}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};
export default _Layout;
