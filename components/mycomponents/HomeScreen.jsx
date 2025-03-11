import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";

const HomeScreen = () => {
  const [miningStatus, setMiningStatus] = useState(false);
  const [balance, setBalance] = useState(0);
  const [hashRate, setHashRate] = useState(0);

  const toggleMining = () => {
    setMiningStatus(!miningStatus);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Crypto Miner</Text>
      </View>

      <View style={styles.statusCard}>
        <Text style={styles.statusText}>
          {miningStatus ? "Mining Active" : "Mining Inactive"}
        </Text>
        <Text style={styles.hashRate}>Hash Rate: {hashRate} H/s</Text>
        <Text style={styles.balance}>Balance: {balance} BTC</Text>
      </View>

      <Button
        title={miningStatus ? "Stop Mining" : "Start Mining"}
        onPress={toggleMining}
        color="#00FF7F"
      />

      <Text style={styles.graphTitle}>Mining Performance</Text>
      <LineChart
        data={{
          labels: ["0", "1", "2", "3", "4", "5"],
          datasets: [
            {
              data: [0, 10, 5, 2, 20, 30],
            },
          ],
        }}
        width={350}
        height={220}
        chartConfig={{
          backgroundColor: "#1e2923",
          backgroundGradientFrom: "#08130D",
          backgroundGradientTo: "#1e2923",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 255, 127, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    padding: 20,
    backgroundColor: "#00FF7F",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  statusCard: {
    backgroundColor: "#333",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  statusText: {
    fontSize: 18,
    color: "#fff",
  },
  hashRate: {
    fontSize: 16,
    color: "#fff",
  },
  balance: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
  },
  graphTitle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
});

export default HomeScreen;
