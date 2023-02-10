import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function SearchBar(){
    return(
        <View style={styles.searchBarContainer}>
            <Icon 
                name="search1" size={17} 
                color="#EDF7FF" style={{marginRight: 8}} />
            <TextInput 
                placeholder={'SEARCH'} 
                style={styles.searchInput}
                placeholderTextColor="#EDF7FF">
            </TextInput>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBarContainer: {
        height: 48,
        width: '100%',
        backgroundColor: '#2699FB',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingHorizontal: 23,
    },

    searchInput: {
        color:"#EDF7FF",
        fontSize: 14,
        fontWeight: "700",
        width: "80%"
    }
})
