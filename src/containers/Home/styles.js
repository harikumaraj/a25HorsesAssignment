import { StyleSheet } from "react-native";
import {heightPercentageToDP, widthPercentageToDP} from "../../utilities/layout.utils";

export default StyleSheet.create({
    flex1: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: "center",
        paddingBottom: heightPercentageToDP(5) + 20
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10
    },
    buttonContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: widthPercentageToDP(100),
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10
    },
    button: {
        height: heightPercentageToDP(5),
        width: widthPercentageToDP(25),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D4FA1",
        borderRadius: 4
    },
    buttonText: {
        color: "#FFFFFF"
    },
    tableCotnainer: {
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#0D4FA1"
    },
    tableCell: {
        height: heightPercentageToDP(8),
        width: heightPercentageToDP(8),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        // borderWidth: 1,
        // borderColor: "red"
    },
    idText: {
        fontSize: 9,
        fontWeight: "bold"
    },
    speedText: {
        fontSize: 16,
        color: "#555555"
    },
    row: {
        flexDirection: "row"
    }
});
