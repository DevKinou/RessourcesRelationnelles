import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        firstname: '',
        email: '',
        telephone: '',
        password: '',
        confirmPassword: '',
        address: '',
        city: '',
        zipCode: '',
        profilePicture: null,
    });

    const handleChange = (name: string, value: any) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = (profilePicture: any) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            profilePicture: profilePicture,
        }));
    };

    const handleSubmit = () => {
        // Valider les données du formulaire ici
        // Si les données du formulaire sont valides, soumettre le formulaire au serveur
    };

    return (
        <View style={styles.layout}>
            <Text style={styles.heading}>Inscription à (Re)sources Relationnelles</Text>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nom*"
                    value={formData.name}
                    onChangeText={(text) => handleChange('name', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Prénom*"
                    value={formData.firstname}
                    onChangeText={(text) => handleChange('firstname', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Numéro de téléphone"
                    value={formData.telephone}
                    onChangeText={(text) => handleChange('telephone', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Adresse Email*"
                    value={formData.email}
                    onChangeText={(text) => handleChange('email', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe*"
                    value={formData.password}
                    onChangeText={(text) => handleChange('password', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirmer mot de passe*"
                    value={formData.confirmPassword}
                    onChangeText={(text) => handleChange('confirmPassword', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Adresse* (ex: 6 rue du vieux chêne)"
                    value={formData.address}
                    onChangeText={(text) => handleChange('address', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Ville* (ex: Paris)"
                    value={formData.city}
                    onChangeText={(text) => handleChange('city', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Code postal*"
                    value={formData.zipCode}
                    onChangeText={(text) => handleChange('zipCode', text)}
                />

                <TouchableOpacity style={styles.uploadContainer}>
                    <Text style={styles.uploadText}>Ajouter une photo de profil:</Text>
                    <Text style={styles.uploadButtonText}>Sélectionner une photo</Text>
                </TouchableOpacity>
                <Text style={styles.uploadInfo}>Formats acceptés : jpeg, jpg, png</Text>

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Valider l'inscription</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 20,
        marginBottom: 20,
    },
    formContainer: {
        width: '100%',
    },
    input: {
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
    button: {
        backgroundColor: '#000091',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});

export default Registration;