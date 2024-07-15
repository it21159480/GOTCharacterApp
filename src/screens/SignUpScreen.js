import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome'; // Correct import for Material Community Icons
import logo from '../components/GOT.png'
import { AuthContext } from '../AuthContext';

const SignUpScreen = ({ navigation }) => {

    const { register } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isValidLowercase, setIsValidLowercase] = useState(false);
    const [isValidUppercase, setIsValidUppercase] = useState(false);
    const [isValidNumber, setIsValidNumber] = useState(false);
    const [isValidLength, setIsValidLength] = useState(false);

    const validatePassword = (input) => {
        setPassword(input);
        setIsValidLowercase(/[a-z]/.test(input));
        setIsValidUppercase(/[A-Z]/.test(input));
        setIsValidNumber(/[0-9]/.test(input));
        setIsValidLength(input.length >= 8);
    };

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

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        try {
            const userCredential = await register(email, password);
            if (userCredential) {
              const user = userCredential.user;
              await user.updateProfile({ displayName: name });
              navigation.navigate('Welcome');
            }
          } catch (error) {
            alert(error.message);
            console.log(error.message);
          }
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
                    label='Name'
                    underlineColor='#545454'
                    textColor='white'
                    value={name}
                    onChangeText={setName}
                />
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
                    onChangeText={validatePassword}
                    value={password}
                />
                <TextInput
                    style={styles.input}
                    theme={customTheme}
                    label='Confirm Password'
                    textColor='white'
                    underlineColor='#545454'
                    secureTextEntry={!passwordVisible}  // Toggle based on state
                    right={<TextInput.Icon
                        icon={passwordVisible ? 'eye-off' : 'eye'}
                        color={passwordVisible ? 'white' : '#898891'}
                        onPress={togglePasswordVisibility}  // Toggle visibility on icon press
                    />}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                {/* Password Validation Rules */}
                <View style={styles.rulesContainer}>
                    <View>
                        <Text style={{ color: isValidLowercase ? 'white' : '#d0d0d0' }}>
                            <MaterialCommunityIcons name={isValidLowercase ? 'check-circle' : 'refresh'} size={20} /> One lowercase character
                        </Text>
                        <Text style={{ color: isValidUppercase ? 'white' : '#d0d0d0' }}>
                            <MaterialCommunityIcons name={isValidUppercase ? 'check-circle' : 'refresh'} size={20} /> One uppercase character
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: isValidNumber ? 'white' : '#d0d0d0' }}>
                            <MaterialCommunityIcons name={isValidNumber ? 'check-circle' : 'refresh'} size={20} /> One number
                        </Text>
                        <Text style={{ color: isValidLength ? 'white' : '#d0d0d0' }}>
                            <MaterialCommunityIcons name={isValidLength ? 'check-circle' : 'refresh'} size={20} /> 8 characters minimum
                        </Text>

                    </View>

                    <View>

                    </View>

                </View>
                <Button
                    buttonColor='#ffd482'
                    tex textColor='black'
                    mode="contained"
                    onPress={handleSignUp}
                    style={{ width: '100%', borderRadius: 10, marginTop: 30 }}
                    contentStyle={{
                        height: 50,  // Increase height of the button
                        paddingHorizontal: 20  // Increase padding horizontally
                    }}
                    labelStyle={{
                        fontSize: 20,  // Increase font size of the text
                    }}
                >
                    Sign Up
                </Button>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'flex-end' }}>

                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontSize: 15, color: 'white' }}>Have an account?</Text>
                        <Pressable
                            onPressOut={() => navigation.navigate('Login')} >
                            <Text style={{ color: '#ffd482', fontSize: 15, textDecorationLine: 'underline' }} >Sign In</Text>
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
    rulesContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-evenly',

    }
});

export default SignUpScreen;
