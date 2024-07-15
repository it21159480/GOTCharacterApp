import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet, Pressable, Image, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../AuthContext';
import logo from '../components/GOT.png'

const LoginScreen = ({ navigation }) => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState('');

    const customTheme = {
        colors: {
            primary: 'white',  // Label color for both focused and unfocused states
            background: 'transparent',  // Optional: Make underline transparent if not needed
            onSurfaceVariant: 'white'
        },
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = () => {
        // auth().signInWithEmailAndPassword(email, password)
        //   .then((userCredential) => {
        //     // Signed in
        //     const user = userCredential.user;
        //     navigation.navigate('Welcome'); // Navigate to the Welcome screen or any other screen
        //   })
        //   .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     setError(errorCode); 
        //    // Display the error message to the user
        //   });
        login(email, password).catch((error) => {
            setError(error.message);
          });
      };

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
             
                <Image source={logo} style={{ width: 200, height: 150 }} />

            </View>
            <View>
                <TextInput
                    style={styles.input}
                    theme={customTheme}
                    label='Email'
                    underlineColor='#545454'
                    textColor='white'
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    theme={customTheme}
                    label='Password'
                    textColor='white'
                    underlineColor='#545454'
                    secureTextEntry={!passwordVisible}  // Toggle based on state
                    right={<TextInput.Icon 
                            icon={passwordVisible ? 'eye-off' : 'eye'} 
                            color={passwordVisible ? 'white' : '#898891'}
                            onPress={togglePasswordVisibility}  // Toggle visibility on icon press
                          />}
                    value={password}
                    onChangeText={setPassword}
                />
               {error ? <Text style={{color:'red'}}>Email or Password is incorrect!</Text> : null}
                <Pressable
                    onPressOut={() => navigation.navigate('SignUp')}
                    style={{ alignItems: 'flex-end' }} >
                    <Text style={{ color: 'white', fontSize: 15, }} > Forgot Password ? </Text>
                </Pressable>
                <Button
                    buttonColor='#ffd482'
                    tex textColor='black'
                    mode="contained"
                    onPress={handleLogin}
                    style={{ width: '100%', borderRadius: 10, marginTop: 50 }}
                    contentStyle={{
                        height: 50,  // Increase height of the button
                        paddingHorizontal: 20  // Increase padding horizontally
                    }}
                    labelStyle={{
                        fontSize: 20,  // Increase font size of the text
                    }}
                >
                    Sign In
                </Button>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'flex-end' }}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontSize: 15, color: 'white' }}> Don't have an account?</Text>
                        <Pressable
                            onPressOut={() => navigation.navigate('SignUp')} >
                            <Text style={{ color: '#ffd482', fontSize: 15, textDecorationLine: 'underline' }} >Sign up</Text>
                        </Pressable>
                    </View>
                </View>
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

export default LoginScreen;
