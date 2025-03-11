import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = ({ title, description, animation, nextScreen }) => {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.description}>
        <LottieView source={animation} autoPlay loop style={styles.animation} />
        <ThemedText type="title">{title}</ThemedText>
        <ThemedText>{description}</ThemedText>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push(nextScreen)}
        >
          <ThemedText style={styles.buttonText}>Next</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

export default function Onboarding() {
  return (
    <ThemedView style={styles.main}>
      <OnboardingScreen
        title="Welcome to CryptoMine"
        description="Start mining cryptocurrency with ease."
        animation={require("../../assets/mining.json")}
        nextScreen="(tabs)"
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  main: {
    height: height,
    justifyContent: "center",
  },

  animation: {
    width: width * 0.8,
    height: height * 0.4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    padding: 20,
    marginTop: 10,
    alignItems: "center",
  },
  button: {
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "silver",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
