import { View, FlatList } from 'react-native';
import CourseCategory from '../components/CourseCategory'


function CategoryRow(props){

    return(
      <FlatList 
      data={props.categories} 
      horizontal={true}
      renderItem={itemData => {
        return(
          <View style={{marginLeft: 22.5}}>
            <CourseCategory 
            category={itemData.item} 
            style={{width:"100%"}}
            categoryStates={props.categoryStates}
            onToggle={props.onToggle}/>  
          </View>
        );
      }}
      />
    )
  }

export default CategoryRow