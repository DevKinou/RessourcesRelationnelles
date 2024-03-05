import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    
    //Fonts
    

    //Global
    heading: {
        fontSize: 20,
        marginBottom: 20,
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '100%',
    },

    //Header
    mainHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        alignItems: 'center',
    },
    ministereLogo: {
        width: 100,
        height: 100,
    },
    headerText: {
        fontFamily: 'DMSans_700Bold',
        fontSize: 18,
        fontWeight: 'bold',
    },
    endHeader: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    loginLink: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        color: '#000091',
        borderColor: '#000091',
        padding: 5,
    },
    iconUser: {
        marginRight: 8,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        width: '60%',
    },
    navbar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    navItems: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        paddingVertical: 20,
        alignItems: 'center',
    },
    navLinks: {
        textDecorationLine: 'none',
        color: 'black',
    },

    //Help
    accordion: {
        width: '100%',
    },
    accordionItem: {
        marginBottom: 10,
    },
    accordionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F7F6E7',
        padding: 10,
        borderWidth: 1,
        borderColor: '#C1C0B9',
    },
    question: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    reponse: {
        padding: 10,
    },

    //Login
    loginForm: {
        width: '100%',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    loginInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 10,
    },
    forgotPassword: {
        textAlign: 'left',
        textDecorationLine: 'underline',
        color: '#000091',
        marginBottom: 10,
    },
    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button: {
        borderRadius: 5,
        padding: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    loginBtn: {
        backgroundColor: '#000091',
        flex: 1,
        marginLeft: 10,
    },
    createBtn: {
        backgroundColor: '#6CB9F4',
        flex: 1,
        marginRight: 10,
    },

    //Registration
    formContainer: {
        width: '100%',
    },
    registerInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    uploadContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    uploadText: {
        marginBottom: 5,
    },
    uploadButtonText: {
        color: 'blue',
    },
    uploadInfo: {
        marginBottom: 10,
        color: '#888',
    },
    registerButton: {
        backgroundColor: '#000091',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    registerButtonText: {
        color: 'white',
    },

    //Ressources
    filtres: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cellText: {
        textAlign: 'center',
    },

    //ResourcesEdit
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
      },
      textArea: {
        height: 100,
        textAlignVertical: 'top', // For Android
      },
});

export default style;