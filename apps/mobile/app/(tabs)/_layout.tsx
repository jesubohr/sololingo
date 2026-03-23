// apps/mobile/app/(tabs)/_layout.tsx
import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { fontFamilies } from "../../src/theme/fonts"
import { colors } from "../../src/theme/tokens"

type IconName = React.ComponentProps<typeof Ionicons>["name"]

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.outline,
        tabBarStyle: {
          backgroundColor: colors.surfaceContainerLowest,
          borderTopColor: colors.outlineVariant,
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontFamily: fontFamilies.bodyMedium,
          fontSize: 11,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="lessons"
        options={{
          title: "Lições",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "book" : "book-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="radio"
        options={{
          title: "Rádio",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "headset" : "headset-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorar",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "compass" : "compass-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
