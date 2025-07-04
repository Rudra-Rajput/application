import { Tabs, useRouter, usePathname } from "expo-router";
import {
  HomeIcon,
  MessageIcon,
  MatchesIcon,
  UserIcon,
} from "@/components/icons";
import { View, Pressable, Text } from "react-native";

export default function TabLayout() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#141414",
          height: 80,
          paddingTop: 10,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#7E60FB",
        tabBarInactiveTintColor: "#7C8591",
      }}
    >
        <Tabs.Screen
        name="feed"
        options={{
          headerShown: false,
          title: "Feed",
          tabBarShowLabel: true,
          tabBarButton: () => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pressable onPress={() => router.push("/feed")}>
                  <HomeIcon
                    size={44}
                    color={pathname === "/feed" ? "#7E60FB" : "#7C8591"}
                  />
                <Text style={{ color: pathname === "/feed" ? "#7E60FB" : "#7C8591",textAlign:'center' }}>Feed</Text>
              </Pressable>
            </View>
          ),
        }}
      />
        <Tabs.Screen
        name="match"
        options={{
          headerShown: false,
          title: "Match",
          tabBarShowLabel: true,
          tabBarButton: () => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pressable onPress={() => router.push("/match")}>
                <MatchesIcon
                  size={44}
                  color={pathname === "/match" ? "#7E60FB" : "#7C8591"}
                />
                <Text style={{ color: pathname === "/match" ? "#7E60FB" : "#7C8591",textAlign:'center' }}>Match</Text>
              </Pressable>
            </View>
          ),
        }}
      />
        <Tabs.Screen
        name="looking"
        options={{
          headerShown: false,
          title: "Looking",
          tabBarShowLabel: true,
          tabBarButton: () => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pressable onPress={() => router.push("/looking")}>
                <UserIcon
                  size={44}
                  color={pathname === "/looking" ? "#7E60FB" : "#7C8591"}
                />
                <Text style={{ color: pathname === "/looking" ? "#7E60FB" : "#7C8591",textAlign:'center' }}>Looking</Text>
              </Pressable>
            </View>
          ),
        }}
      />
        <Tabs.Screen
        name="chats"
        options={{
          headerShown: false,
          title: "Chats",
          tabBarShowLabel: true,
          tabBarButton: () => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pressable onPress={() => router.push("/chats")}>
                <MessageIcon
                  size={44}
                  color={pathname === "/chats" ? "#7E60FB" : "#7C8591"}
                />
                <Text style={{ color: pathname === "/chats" ? "#7E60FB" : "#7C8591",textAlign:'center' }}>Chats</Text>
              </Pressable>
            </View>
          ),
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarShowLabel: true,
          tabBarButton: () => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pressable onPress={() => router.push("/profile")}>
                <UserIcon
                  size={44}
                  color={pathname === "/profile" ? "#7E60FB" : "#7C8591"}
                />
                <Text style={{ color: pathname === "/profile" ? "#7E60FB" : "#7C8591",textAlign:'center' }}>Profile</Text>
              </Pressable>
            </View>
          ),
        }}
      />
      
    </Tabs>
  );
}
