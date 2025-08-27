import { Tabs } from "expo-router";
import { Bookmark, Home, Search, User } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";

const _Layout = () => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get("window").width);
  
  // More granular breakpoints for better scaling
  const getResponsiveStyles = () => {
    if (screenWidth < 320) {
      return {
        padding: 'px-1 py-4',
        iconSize: 16,
        textSize: 'text-xs',
        spacing: 'ml-1',
        margin: 'mx-0.5'
      };
    } else if (screenWidth < 380) {
      return {
        padding: 'px-2 py-4',
        iconSize: 17,
        textSize: 'text-xs',
        spacing: 'ml-1.5',
        margin: 'mx-1'
      };
    } else if (screenWidth < 420) {
      return {
        padding: 'px-3 py-4',
        iconSize: 18,
        textSize: 'text-sm',
        spacing: 'ml-2',
        margin: 'mx-1'
      };
    } else {
      return {
        padding: 'px-4 py-4',
        iconSize: 18,
        textSize: 'text-sm',
        spacing: 'ml-2',
        margin: 'mx-1'
      };
    }
  };

  const styles = getResponsiveStyles();

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setScreenWidth(window.width);
    });
    return () => subscription?.remove();
  }, []);

  const renderTabIcon = (focused: boolean, iconComponent: React.ReactNode, label: string) => (
    <View className={`flex-row items-center justify-center ${styles.padding} rounded-3xl ${styles.margin} ${focused ? 'bg-gradient-to-r from-purple-600 to-purple-800' : 'bg-transparent'} min-w-0 flex-shrink`}>
      {iconComponent}
      <Text 
        className={`${styles.spacing} ${styles.textSize} font-medium ${focused ? 'text-white' : 'text-gray-400'} flex-shrink-0`}
        numberOfLines={1}
        adjustsFontSizeToFit={true}
        minimumFontScale={0.8}
      >
        {label}
      </Text>
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#0F0D23',
          borderTopColor: '#e9ecef',
          borderRadius: 100,
          marginHorizontal: screenWidth < 350 ? 5 : 10,
          marginBottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          paddingHorizontal: screenWidth < 350 ? 8 : 16,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 0,
          flex: 1,
          minWidth: 0, // Allow shrinking
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
          tabBarIcon: ({ focused }) => 
            renderTabIcon(
              focused,
              <Home color={focused ? '#ffffff' : '#9ca3af'} size={styles.iconSize} />,
              "Home"
            ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => 
            renderTabIcon(
              focused,
              <Search color={focused ? '#ffffff' : '#9ca3af'} size={styles.iconSize} />,
              "Search"
            ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => 
            renderTabIcon(
              focused,
              <Bookmark color={focused ? '#ffffff' : '#9ca3af'} size={styles.iconSize} />,
              "Saved"
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => 
            renderTabIcon(
              focused,
              <User color={focused ? '#ffffff' : '#9ca3af'} size={styles.iconSize} />,
              "Profile"
            ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;