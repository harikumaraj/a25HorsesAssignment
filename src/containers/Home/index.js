import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import _ from "lodash";

import styles from "./styles";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            horses: [],
            firstRoundRacesWinners: [],
            finalRace: [],
            winners: [],
            executed: false
        }
    }

    generateRandomNum = (usedNum) => {
        const getNum = () => {
            const generatedNum = Math.round(Math.random() * 88);
            if (!generatedNum || usedNum.filter(num => num === generatedNum).length) {
                return getNum(usedNum);
            }
            usedNum.push(generatedNum);
            return generatedNum;
        }
        return getNum();
    }

    generateHorses = () => {
        let usednum = [];
        const horses = _.times(5, (i) => {
            return _.times(5, (j) => ({
                index: (i * 5) + j,
                i,
                j,
                speed: this.generateRandomNum(usednum)
            })
            );
        });
        this.setState({ horses, executed: false });
    }

    raceTheHorses = () => {
        let firstRoundRaces = [];
        const horses = [...this.state.horses.map(_horse => [..._horse])];
        horses.forEach(_horses => {
            firstRoundRaces.push(_horses.sort((a, b) => b.speed - a.speed).slice(0, 3));
        });
        this.setState({ firstRoundRacesWinners: [...firstRoundRaces.map(_round => [..._round])] });
        firstRoundRaces = firstRoundRaces.sort((a, b) => b[0].speed - a[0].speed);
        console.log(firstRoundRaces);
        const finalRaceHorses = [firstRoundRaces[0][1], firstRoundRaces[0][2], firstRoundRaces[1][0], firstRoundRaces[1][1], firstRoundRaces[2][0]];
        this.setState({ finalRace: [...finalRaceHorses] });
        let finalRoundRace = finalRaceHorses.sort((a, b) => b.speed - a.speed).slice(0, 2);
        this.setState({ winners: [firstRoundRaces[0][0], ...finalRoundRace], executed: true })
    }

    render() {
        return (
            <View style={styles.flex1}>
                <ScrollView contentContainerStyle={styles.container}>
                    {
                        this.state.horses.length > 0 ?
                            <View>
                                <Text style={styles.title}>Horses: Each horse has a number(represented in sequential order in small font) and speed (number with big font that are random) in the table below</Text>
                                <View style={styles.tableCotnainer}>
                                    {
                                        this.state.horses.map((_horses, index) => (
                                            <View style={styles.tableRow}>
                                                <View style={styles.tableCell}>
                                                    <Text>{index + 1}</Text>
                                                </View>
                                                {
                                                    _horses.map(horse => (
                                                        <View style={styles.tableCell}>
                                                            <Text style={styles.idText}>{horse.index + 1}</Text>
                                                            <Text style={styles.speedText}>{horse.speed}</Text>
                                                        </View>
                                                    ))
                                                }
                                            </View>
                                        ))
                                    }
                                </View>
                                {
                                    this.state.executed &&
                                    <View>
                                        <Text style={styles.title}>First round races</Text>
                                        {
                                            this.state.horses.map((_horses, index) => (
                                                <View style={styles.row}>
                                                    <View style={styles.tableCell}>
                                                        <Text>Race {index + 1}</Text>
                                                    </View>
                                                    {
                                                        _horses.map(horse => (
                                                            <View style={styles.tableCell}>
                                                                <Text style={styles.idText}>{horse.index + 1}</Text>
                                                                <Text style={styles.speedText}>{horse.speed}</Text>
                                                            </View>
                                                        ))
                                                    }
                                                </View>
                                            ))
                                        }
                                        <Text style={styles.title}>First round races Winners</Text>
                                        <View style={styles.row}>
                                            {
                                                _.times(4, (index) => (
                                                    <View style={styles.tableCell}>
                                                        <Text style={styles.title}>{index > 0 ? `#${index}` : "pos"}</Text>
                                                    </View>
                                                ))
                                            }
                                        </View>
                                        {
                                            this.state.firstRoundRacesWinners.map((_horses, index) => (
                                                <View style={styles.row}>
                                                    <View style={styles.tableCell}>
                                                        <Text>Race {index + 1}</Text>
                                                    </View>
                                                    {
                                                        _horses.map((horse, _index) => (
                                                            <View style={styles.tableCell}>
                                                                <Text style={styles.idText}>{horse.index + 1}</Text>
                                                                <Text style={styles.speedText}>{horse.speed}</Text>
                                                            </View>
                                                        ))
                                                    }
                                                </View>
                                            ))
                                        }
                                        <Text style={styles.title}>Final Race</Text>
                                        <View style={styles.row}>
                                            <View style={styles.tableCell}>
                                                <Text>Race 6</Text>
                                            </View>
                                            {
                                                this.state.finalRace.map((horse, _index) => (
                                                    <View style={styles.tableCell}>
                                                        <Text style={styles.idText}>{horse.index + 1}</Text>
                                                        <Text style={styles.speedText}>{horse.speed}</Text>
                                                    </View>
                                                ))
                                            }
                                        </View>
                                        <Text style={styles.title}>Winners</Text>
                                        <View style={styles.row}>
                                            {
                                                _.times(4, (index) => (
                                                    <View style={styles.tableCell}>
                                                        <Text style={styles.title}>{index > 0 ? `#${index}` : "pos"}</Text>
                                                    </View>
                                                ))
                                            }
                                        </View>
                                        <View style={styles.row}>
                                            <View style={styles.tableCell}>
                                                <Text>Race {this.state.firstRoundRacesWinners.length + 1}</Text>
                                            </View>
                                            {
                                                this.state.winners.map((horse, index) => (

                                                    <View style={styles.tableCell}>
                                                        <Text style={styles.idText}>{horse.index + 1}</Text>
                                                        <Text style={styles.speedText}>{horse.speed}</Text>
                                                    </View>
                                                ))
                                            }
                                        </View>
                                        <View>
                                            <Text style={styles.title}>Minimum no of races conducted is {this.state.firstRoundRacesWinners.length + 1}</Text>
                                        </View>
                                    </View>
                                }
                            </View> :
                            <View>
                                <Text style={styles.title}>Some points to keep in mind</Text>
                                <Text>In real life, we can decide the position of the horses in the race just by observing which horse reached
                                    the finishing line first, second and so on even without knowing thr actual speed of the horses.{"\n"}{"\n"}
                                    When it comes to logical and programatical scope, we cannot use the above approach and can determine the
                                    position only by using quantative analysis.{"\n"}{"\n"}
                                    A horse can run at a particular speed and that becomes characterstics of horses that can be used to
                                    compare and produce a result in our algorithm.{"\n"}{"\n"}
                                    There are 2 ways the horses can be assigned speed. One is by entering the data manually and another by creating
                                    random numbers that can be used as the speed of the horses.{"\n"}{"\n"}
                                    As the requirement said, I'm given 25 horses. THe below steps are used to achive the same.{"\n"}{"\n"}
                                    1) So basically how works is, it works is, it divides the horses into 5 groups with each group consisting of 5 horses.{"\n"}
                                    2) We let the 5 groups race and record 1st, 2nd and 3rd of all the groups.{"\n"}
                                    3) We let the horses race that have come 1st in all the groups and record the 1st, 2nd and 3rd.{"\n"}
                                    4) The horse that came 1st is the fastest of all the horses, there is a chance that it's group has 2nd and 3rd fastes horses.{"\n"}
                                    So we add all the 2 horses that came 2nd and 3rd in that group to the final race.{"\n"}
                                    5) The horse that came 2nd in the race, it's group might have 3rd fastest horse. So we pick the horse that ranked 2nd
                                    in the group for the last race.{"\n"}
                                    6) The horse that came third also gets to join the final race.{"\n"}
                                    7) We let these chosen horses race. The one that came 1st and 2nd in the race, they are
                                    2nd and 3rd fastest over all.
                                    </Text>
                            </View>
                    }
                </ScrollView>
                <View style={styles.buttonContainer} >
                    <TouchableOpacity style={styles.button} onPress={this.generateHorses}>
                        <Text style={styles.buttonText}>Randomise</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.raceTheHorses}>
                        <Text style={styles.buttonText}>Execute</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}