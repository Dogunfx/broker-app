import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";

// Placeholder icons (replace with your own or an icon library)
const ICON_SEND = "https://img.icons8.com/ios-filled/50/000000/upload.png";
const ICON_RECEIVE = "https://img.icons8.com/ios-filled/50/000000/download.png";
const ICON_LOCK = "https://img.icons8.com/ios-filled/50/000000/lock-2.png";
const ICON_BUY =
  "https://img.icons8.com/ios-filled/50/000000/shopping-cart.png";

const WalletScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Top Section: Wallet Info */}
        <View style={styles.walletInfoContainer}>
          <Text style={styles.walletLabel}>Wallet 1: GB31d...UhTTnv</Text>
          <TouchableOpacity style={styles.copyButton}>
            <Text style={styles.copyText}>Copy</Text>
          </TouchableOpacity>
        </View>

        {/* Main Balance */}
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>$12.199</Text>
          <Text style={styles.subBalanceText}>= 13,123 Pi</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <ActionButton icon={ICON_SEND} label="Send" />
          <ActionButton icon={ICON_RECEIVE} label="Receive" />
          <ActionButton icon={ICON_LOCK} label="Lock" />
          <ActionButton icon={ICON_BUY} label="Buy" />
        </View>

        {/* Tokens Section */}
        <View style={styles.tokensCard}>
          <TokenRow
            symbol="Pi"
            amount="12.199"
            value="$29.000"
            network="Pi Network"
          />
          <TokenRow symbol="USDT" amount="1.23" value="$1.23" network="USDT" />
          <TokenRow symbol="USDC" amount="6.12" value="$6.12" network="USDC" />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

// Reusable Action Button
const ActionButton = ({ icon, label }) => {
  return (
    <TouchableOpacity style={styles.actionButton}>
      <Image source={{ uri: icon }} style={styles.actionIcon} />
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

// Reusable Token Row
const TokenRow = ({ symbol, amount, value, network }) => {
  return (
    <View style={styles.tokenRow}>
      <View style={styles.tokenInfo}>
        <Text style={styles.tokenSymbol}>{symbol}</Text>
        <Text style={styles.tokenNetwork}>{network}</Text>
      </View>
      <View style={styles.tokenAmounts}>
        <Text style={styles.tokenAmount}>{amount}</Text>
        <Text style={styles.tokenValue}>{value}</Text>
      </View>
    </View>
  );
};

// Placeholder Bottom Nav Item
const NavItem = ({ label }) => {
  return (
    <TouchableOpacity style={styles.navItem}>
      <Text style={styles.navLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 80, // space for bottom nav
  },
  walletInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  walletLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
  },
  copyButton: {
    backgroundColor: "#E8E8E8",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  copyText: {
    fontSize: 14,
    color: "#666",
  },
  balanceContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  balanceText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#3B2E5A", // Adjust to match your design
  },
  subBalanceText: {
    fontSize: 16,
    color: "#999",
    marginTop: 4,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
  },
  actionIcon: {
    width: 30,
    height: 30,
    marginBottom: 8,
    tintColor: "#7D57FE", // Adjust color or remove tint
  },
  actionLabel: {
    fontSize: 14,
    color: "#333",
  },
  tokensCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    marginBottom: 24,
  },
  tokenRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomColor: "#EAEAEA",
    borderBottomWidth: 1,
  },
  tokenInfo: {},
  tokenSymbol: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3B2E5A",
  },
  tokenNetwork: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  tokenAmounts: {
    alignItems: "flex-end",
  },
  tokenAmount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3B2E5A",
  },
  tokenValue: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#EAEAEA",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navLabel: {
    fontSize: 14,
    color: "#333",
  },
});

export default WalletScreen;
