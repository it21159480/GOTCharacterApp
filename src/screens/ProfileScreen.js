import React, { useState, useEffect,useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../AuthContext';
import logo from '../components/DRA.png';


const ProfileScreen = ({ navigation }) => {
    const { logout } = useContext(AuthContext);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = auth().currentUser;
        if (currentUser) {
            setUser(currentUser);
        }
    }, []);

    // const handleLogout = () => {
    //     auth().signOut().then(() => {
    //         navigation.navigate('Login');
    //     }).catch((error) => {
    //         console.error("Sign out error", error);
    //     });
    // };

    const customTheme = {
        colors: {
            primary: 'white',  // Label color for both focused and unfocused states
            background: 'transparent',  // Optional: Make underline transparent if not needed
            onSurfaceVariant: 'white',

        },
    };



    return (
        <View style={styles.container}>
            <Text style={{ color: '#ffd482' }} onPress={()=>navigation.goBack()}>
                <MaterialCommunityIcons name='arrow-left-circle' size={30}  />
            </Text>
            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={logo} style={{ width: 300, height: 250 }} resizeMode='contain' />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    theme={customTheme}
                    label={'Name'}
                    underlineColor='#2b2b2b'
                    textColor='white'
                    value={user ? user.displayName : ''}
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    theme={customTheme}
                    label={'Email'}
                    underlineColor='#2b2b2b'
                    textColor='white'
                    value={user ? user.email : ''}
                    editable={false}
                />
            </View>
            <View style={{ flex: 0.5, justifyContent: 'flex-end' }}>
                <Button
                    buttonColor='#ffd482'
                    tex textColor='black'
                    mode="contained"
                    onPress={logout}
                    style={{ width: '100%', borderRadius: 10, marginTop: 50 }}
                    contentStyle={{
                        height: 50,  // Increase height of the button
                        paddingHorizontal: 20  // Increase padding horizontally
                    }}
                    labelStyle={{
                        fontSize: 20,  // Increase font size of the text
                    }}
                >
                    Log Out
                </Button>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#2a2a2a'
    },
    header: {
        fontSize: 30,
        marginBottom: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#545454',
    },
});

export default ProfileScreen;
