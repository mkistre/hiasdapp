import { View,Text, StyleSheet, TouchableOpacity } from "react-native"
import { fontSize } from "@/constants/styles"
import React, { FC, ReactNode } from "react";

interface ContainerProps {
    title: string 
    more?:boolean
    children?: ReactNode
  }
  
const Separator: FC<ContainerProps> = ({title,more,children}:ContainerProps)=>{
    return (
        <View style={styles.container}>
            <View style={styles.children}>
                {children} 
                <Text style={styles.title}>{title}</Text>
            </View>
            {more && 
            <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.more}>Ver mais</Text>
            </TouchableOpacity>}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal:fontSize.sm,
        justifyContent:'space-between',
        marginVertical:10
    },
    children:{
        flexDirection:'row',
        alignItems: 'center',
        gap:8
    },
    title:{
        fontSize:fontSize.base,
        fontWeight:'500'
    },
    more:{
        fontSize:fontSize.sm
    },


})

export default Separator