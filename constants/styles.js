
import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#1D1E2C",
        marginBottom: 10,
        fontFamily: "Nunito-Black",
    },
    subtitle: {
        fontSize: 14,
        color: "#1D1E2C",
        fontFamily: "Nunito-Regular",
        marginBottom: 40,
    },
    label: {
        fontFamily: "Nunito-Bold",
        fontSize: 14,
        fontWeight: 700,
        color: "#1D1E2C",
        marginBottom: 8,
    },
    input: {
        borderColor: "#1D1E2C",
        borderWidth: 1,
        padding: 10,
        borderRadius: 40,
        marginBottom: 20,
    },
    forgotPasword: {
        fontSize: 10,
        color: "#1D1E2C",
    },
    forgotPasswordContainer: {
        alignItems: "flex-end",
    },
    buttonContainer: {
        alignItems: "center",
        marginTop: 100,
    },
    signupText: {
        marginTop: 10,
        fontSize: 14,
    },
    carousel: {
        height: 200,
        marginBottom: 0,
    },
    slide: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    paginationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#ac9fbb",
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: "#f7ebec",
    },
    inactiveDot: {
        backgroundColor: "#ac9fbb",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 40,
        backgroundColor: "#ac9fbb",
        width: 200,
    },
    pressed: {
        opacity: 0.5,
    },
 
    });