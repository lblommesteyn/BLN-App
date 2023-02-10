import { StyleSheet, Text, TouchableOpacity, Image} from 'react-native';


function CourseCategory(props){
    return(
        <TouchableOpacity 
            style={[styles.categoryBox,
            { backgroundColor: props.categoryStates[props.category.key] 
            ? '#2699FB' : '#FFF'} ]}
            onPress={() => props.onToggle(props.category.key)}
            >
            <Image
                source={props.category.image}
                style={{width: 65, height: 46}}
            />
            <Text style={[styles.subject, 
                { color: props.categoryStates[props.category.key] 
                ? '#FFF' : '#2699FB'},]}>{props.category.subject}
            </Text>
        </TouchableOpacity>
    )
}

export default CourseCategory

const styles=StyleSheet.create({
    categoryBox: {
        height: 89,
        width: 97,
        backgroundColor: '#FFFFFF',
        borderColor: "#707070",
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    subject: {
        fontSize: 12,
        fontWeight: '700',
        color: '#2699FB',
        marginTop: 9,
    },
})