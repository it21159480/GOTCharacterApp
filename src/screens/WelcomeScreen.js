import React, { useState, useEffect ,useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native';
import { ActivityIndicator, PaperProvider, Searchbar } from 'react-native-paper'; // For loading indicator
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import logo1 from '../components/THRO.png'
import logo from '../components/GOT.png'
// Memoized Character Card Component
const CharacterCard = React.memo(({ item }) => (
    <View style={styles.card}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={{ flex: 1 }}>
            <Text style={styles.name}>{item.fullName}</Text>
            <Text style={styles.details}>{item.title}</Text>
            <Text style={styles.details}>{item.family} Family</Text>
        </View>
    </View>
));

const WelcomeScreen = ({ navigation }) => {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCharacters();
    }, []);

    useEffect(() => {
        const filtered = characters.filter(character =>
            character.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            character.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            character.family.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCharacters(filtered);
    }, [searchQuery, characters]);

    const fetchCharacters = async () => {
        try {
            const response = await fetch('https://thronesapi.com/api/v2/Characters');
            const data = await response.json();
            setCharacters(data);
            setFilteredCharacters(data);  // Initialize with all characters
            setLoading(false);
        } catch (error) {
            console.error('Error fetching characters:', error);
            setLoading(false);
        }
    };

    const renderCharacter = ({ item }) => <CharacterCard item={item} />;

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    const customTheme = {
        colors: { 
          primary: '#ffd482',
         onSurfaceVariant: 'white'
        },
      };

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
           
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Searchbar
                    placeholder="Search by name, title or family..."
                    placeholderTextColor='#ccc'
                    onChangeText={setSearchQuery}
                    theme={customTheme}
                    value={searchQuery}
                    style={styles.searchBar}
                    iconColor='#ffd482'
                />
                <Text style={{ color: '#ffd482', }} onPress={() => navigation.navigate('Profile')} >
                    <MaterialCommunityIcons name={'account-circle-outline'} size={40} />
                </Text>
            </View>
            

            <FlatList
                data={filteredCharacters}
                renderItem={renderCharacter}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.container}
                ListHeaderComponent={() => (
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center',margin:10 }}>
                        <Image source={logo1} style={{ width: 100, height: 100,  }} />
                        <Image source={logo} style={{ width: 150, height: 100 }} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'black'
    },
    card: {
        backgroundColor: '#2a2a2a',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    details: {
        fontSize: 14,
        color: '#ccc',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBar: {
        margin: 10,
        
        backgroundColor: 'black',
        elevation: 0,
        borderWidth: 0.5,
        borderColor: '#ffd482',
        width: "80%",
        color:'white',
    },
});

export default WelcomeScreen;
