import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';

// this component is a preview for a course
function CourseItem(props){

    // tracks if touched for backround color change
    const [isTouched, setIsTouched] = useState(false);

    return(
        <TouchableOpacity 
            onPress={() => setIsTouched(!isTouched)}
            style={[styles.coursePreview, 
            {backgroundColor: isTouched ? '#2699FB' : '#FFF' }]}
            >
         <View style={styles.imageContainer}>
            <Image
                source={props.course.image}
                style={{width: 295, height: 122}}
            />
         </View>
         <View style={styles.courseInfo}>
            <View style={{flex:1}}>
                <Text style={[styles.title, 
                {color: isTouched ? '#FFF' : "#2699FB" }]}>
                    {props.course.title}
                </Text>
                <Text style={[styles.author, 
                {color: isTouched ? '#FFF' : "#2699FB" }]}>
                    {props.course.author}
                </Text>
            </View>
            <View style={styles.subjectAgeContainer}>
                <View style={styles.subjectAgeBackround}>
                    <Text style={styles.subjectAge}>
                        {props.course.subject}  
                    </Text>
                </View>
                <View style={styles.subjectAgeBackround}>
                    <Text style={styles.subjectAge}>
                        {props.course.ageRange}
                    </Text>
                </View>
            </View>
            
         </View>

    </TouchableOpacity>
    )
}

export default CourseItem;

const styles = StyleSheet.create({
    coursePreview: {
        flex:1,
        height: 195,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        width:"90%",
        paddingVertical:15,
        paddingHorizontal: 15,
        alignItems: "center"
    },

    courseInfo:{
        flexDirection: "row",
        flex:1,
        alignItems: "center",
        paddingTop: 10,
        width: 295
    },

    title: {
        fontSize: 12,
        fontWeight: "600",
        textAlignVerticle: "center"
    },

    author: {
        fontSize: 11,
        fontWeight: "400",
        textAlignVertical: "center",
    },

    subjectAgeContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    subjectAgeBackround: {
        fontSize: 14,
        backgroundColor: "#F1F9FF",
        borderRadius: 5,
        borderColor: "#BCE0FD",
        borderWidth:1,
        marginLeft: 5,
        width: 75,
        height: 30,
        alignItems: "center",
        justifyContent: "center"
    },

    subjectAge: {
        color: "#2699FB",
        fontSize: 11,
        fontWeight: "400"
    },

    imageContainer: {
        height: 122,
        width: 295,
    }
})
