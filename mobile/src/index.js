import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, SafeAreaView } from 'react-native';
import api from './services/api';

// Nao possuem valor semantico
// Nao possuem estilizacao propria
// Todos componentes possuem pro padrao "desplay: flex"
// react native nao tem heranca de estilos
// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3

export default function App() {
     const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then( response => {
            console.log(response.data);
            setProjects(response.data);
        })
    }, []); 

    return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#1159a1"/>
        <SafeAreaView style={styles.container}></SafeAreaView>
        <FlatList 
        data={projects}
        keyExtractor={project => project.id}
        renderItem={({ item: project }) => (
           <Text style={styles.project}>{project.title}</Text> 
        )}>

        </ FlatList>
        </ SafeAreaView>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    project: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
})