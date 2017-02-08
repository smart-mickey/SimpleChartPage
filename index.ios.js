/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Surface,
  Group,
  TouchableOpacity,
  Platform,
  Button
} from 'react-native';

var home = require('./src/images/home.png');
var search = require('./src/images/search.png');
var w_search = require('./src/images/w_search.png');
var alert = require('./src/images/alert.png');
var you = require('./src/images/you.png');
var setting = require('./src/images/setting.png');
var community = require('./src/icons/community-white.png');
var b_community = require('./src/icons/community-blue.png');
var diet = require('./src/icons/diet-white.png');
var b_diet = require('./src/icons/diet-blue.png');
var shopping = require('./src/icons/shopping-white.png');
var b_shopping = require('./src/icons/shopping-blue.png');
var transit = require('./src/icons/transit-white.png');
var b_transit = require('./src/icons/transit-blue.png');
var utilities = require('./src/icons/utilities-white.png');
var b_utilities = require('./src/icons/utilities-blue.png');
var waste = require('./src/icons/waste-white.png');
var b_waste = require('./src/icons/waste-blue.png');

var profile = require('./src/images/profile.png');
var left_play = require('./src/images/left-play.png');
var right_play = require('./src/images/right-play.png');
var line = require('./src/images/line.png');

import Tabbar from 'react-native-tabbar'
import AreaSpline from './src/charts/AreaSpline';
import Pie from './src/charts/Pie';
import Theme from './src/theme';
import data from './src/resources/data';

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop,
} from 'react-native-svg';


export default class Chart extends Component {

  constructor(props) {
    super(props);
    this.tabarRef = null
    this.state = {
      tab: 'You'
    }
  }

  onTabSelect(tab) {
    this.setState({ tab });
  }

  renderTabs() {
    return (
      <View style={styles.tabView}>
        <TouchableOpacity style={styles.tabItem} onPress={() => this.onTabSelect('Home')}>
          <View style = {styles.tabSubView}>
            <Image source = {home} style = {styles.tabImage}></Image>
            <Text style = {styles.tabText}>Home</Text>            
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}  onPress={() => this.onTabSelect('Search')}>
          <View style = {styles.tabSubView}>
            <Image source = {search} style = {styles.tabImage}></Image>
            <Text style = {styles.tabText}>Search</Text>  
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}  onPress={() => this.onTabSelect('Alert')}>
          <View style = {styles.tabSubView}>
            <Image source = {alert} style = {styles.tabImage}></Image>
            <Text style = {styles.tabText}>Alert</Text>  
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}  onPress={() => this.onTabSelect('You')}>
          <View style = {styles.tabSubView}>
            <Image source = {you} style = {styles.tabImage}></Image>
            <Text style = {{color: '#82b8ff', fontSize: 10, padding: 5}}>You</Text>  
          </View>
        </TouchableOpacity>
        
      </View>
    )
  }

  renderContent() {
    const { tab } = this.state;
    let content
    switch(tab) {
      case 'You':
        content = 
        <View style={{flex: 1, flexDirection: 'column'}}>
                <View style = {{flex: 0.2}}>

                      <View style = {{flex: 1, flexDirection: 'row'}}>
                        <View style = {{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
                          <View>
                            <Image source = {profile} style = {styles.profileImage}/>
                          </View>
                        </View>
                        <View style = {{flex: 0.7, flexDirection: 'column', paddingTop: 40}}>
                          <View style = {{flex: 0.3, flexDirection: 'row'}}>
                            <Text style = {{color: '#5e8aa3'}}>Philip Tribe </Text><Text style = {{color: 'gray'}}>Eco Maven</Text>
                          </View>
                          <View style = {{flex: 0.7, flexDirection: 'row'}}>
                            <View style = {{flex: 0.3, flexDirection: 'column'}}>
                              <Text style = {styles.blueText}>1298</Text>
                              <Text style = {styles.defText}>Total Points</Text>
                            </View>
                            <View style = {{flex: 0.3, flexDirection: 'column'}}>
                              <Text style = {styles.blueText}>323</Text>
                              <Text style = {styles.defText}>Sprint Points</Text>
                            </View>
                            <View style = {{flex: 0.3, flexDirection: 'column'}}>
                              <Text style = {styles.blueText}>8</Text>
                              <Text style = {styles.defText}>Volunteer Hours</Text>
                            </View>
                            <View style = {{flex: 0.1, flexDirection: 'column'}}>
                            </View>
                          </View>
                        </View>
                      </View>

                </View>

                <View style = {{flex: 0.4, alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                        <Svg height="300" width="300">
                          <G>
                            {
                              data.ChartData.map( (item, index) => (
                                  <Path key={item.title} 
                                  d={this._createPieChart(data.ChartData[index], index)} 
                                  stroke='white' 
                                  strokeWidth="5" 
                                  fill={Theme.colors[index]} />
                              )
                              )
                            }                   
                          </G>
                          <View style = {styles.percentView}>
                            <Text style = {{color: '#5e8aa3', fontSize: 18}}>^ 2%</Text>
                          </View>
                          {
                              data.ChartData.map( (item, index) => (
                                <View key={item.title + 'view'} style = {this._createPieDetailViewCSS(item, index)}>
                                  <Image source = {this._createPieImage(item, index)} style = {{width: 20, height: 20, resizeMode: 'stretch'}}/>
                                  <Text style = {this._createPieLabelCSS(item, index)}>{item.title}</Text>
                                  <Text style = {this._createPieLabelCSS(item, index)}>{item.value}</Text>
                                </View>
                              )
                              )
                            }    
                        </Svg>
                        
                </View>


                <View style = {{flex: 0.4}}>
                        <View style = {{flex: 10 , flexDirection: 'column'}}>
                          <View style = {{flex: 2}}>

                                <View style = {{flex: 1, flexDirection: 'row'}}>
                                  <View style = {{flex: 0.15, justifyContent: 'center', alignItems: 'flex-end'}}>
                                    <TouchableOpacity>
                                      <Image style = {styles.playButton} source = {left_play} />
                                    </TouchableOpacity>
                                  </View>
                                  <View style = {{flex: 0.7}}>
                                    <Image source = {line} style = {{resizeMode: 'stretch', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                                      <View style = {styles.weekView}><Text style = {{color: '#5e8aa3'}}>Week 2</Text></View>
                                    </Image>
                                  </View>
                                  <View style = {{flex: 0.15, justifyContent: 'center', alignItems: 'flex-start'}}>
                                    <TouchableOpacity>
                                      <Image style = {styles.playButton} source = {right_play} />
                                    </TouchableOpacity>
                                  </View>
                                </View>

                          </View>
                          <View style = {{flex: 5}}>
                            <View style = {{flex: 1, flexDirection: 'row', paddingLeft: 30, paddingTop: 20}}>
                              <View style = {{flex: 0.5}}>
                                <View style = {{flex: 1, flexDirection: 'column'}}>
                                  <View style = {{flex: 0.7}}>
                                    <View style = {{flex: 1, flexDirection: 'row'}}>
                                      {
                                        data.WeeklyActivity.map( (item, index) =>
                                        ( 
                                            <View key = {item.key} style = {{flex: 0.1}}>
                                            <View style = {{flex: 1, flexDirection: 'column'}}>
                                              <View style = {{width: 5, height: 50, borderRadius: 3, backgroundColor: '#f2f2f2', flexDirection: 'column'}}>
                                                <View style = {this._createWeeklyActivity(item)}>                              
                                                </View>
                                              </View>
                                              <View style = {{flex: 0.2}}>
                                                <Text style = {{color: 'gray', fontSize: 10}}>{item.simplify}</Text>
                                              </View>
                                              
                                            </View>
                                            </View>
                                        )
                                        )
                                      }
                                      
                                      <View style = {{flex: 0.3}}>
                                      </View>                    
                                    </View>
                                  </View>
                                  <View style = {{flex: 0.3}}>
                                    <View>
                                      <Text style = {{color: 'gray', fontSize: 10}}>Weekly Activity</Text>
                                    </View>
                                  </View>
                                </View>
                              </View>
                              <View style = {{flex: 0.25}}>
                                <View style = {{flex: 1, flexDirection: 'column'}}>
                                          <View style = {{flex: 0.7}}>
                                            <View style = {{flex: 1, flexDirection: 'column'}}>
                                              <View style = {{flex: 0.4}}>
                                              </View>
                                              <View style = {{flex: 0.4}}>
                                                <View style = {{width: 80, height: 30, backgroundColor: '#82ccbe', borderRadius: 6, flexDirection: 'row'}}>
                                                  <View style = {this._createWeeklyPoint()}>                           
                                                  </View>
                                                  <View style = {this._createWeeklyRest()}>                           
                                                  </View>
                                                </View>
                                              </View> 
                                            </View>                                      
                                          </View>
                                          <View style = {{flex: 0.3}}>
                                            <View style = {{flex: 1, flexDirection: 'row'}}>
                                              <View style = {{flex: 0.5, alignItems: 'flex-start'}}>
                                                <Text style = {{color: '#5e8aa3', fontSize: 10}}>1298</Text>
                                              </View>
                                              <View style = {{flex: 0.5, alignItems: 'flex-end'}}>
                                                <Text style = {{color: '#82b8ff', fontSize: 10}}>323 </Text>                                                
                                              </View>
                                            </View>
                                          </View>
                                </View>
                              </View>
                              <View style = {{flex: 0.25}}>
                                <View style = {{flex: 1, flexDirection: 'column'}}>
                                          <View style = {{flex: 0.7}}>
                                          </View>
                                          <View style = {{flex: 0.3}}>
                                            <Text style = {{color: 'gray', textAlign: 'center', fontSize: 10}}>Weekly Points</Text>
                                          </View>
                                </View>
                              </View>
                            </View>
                          </View>
                          <View style = {{flex: 3}}>
                          </View>
                        </View>
                </View>
        </View>
        break
      case 'Search':
        content = <Text>This is my Search Page.</Text>
        break
      case 'Alert':
        content = <Text>This is my Alert Page.</Text>
        break
      case 'Home':
        content = <Text>This is my Home Page.</Text>
        break
    }

    return content
  }


  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar style={styles}  statusBar={{ barStyle: 'light-content' }}>
          <NavButton>
            <NavButtonText style={styles.buttonText}>
            </NavButtonText>
          </NavButton>
          <NavTitle style={styles.title}>
            <View style = {styles.titleView}>
              <Image source = {w_search} style = {{width: 15, height: 15, resizeMode: 'contain'}}/>
              <Text style = {{color: 'white', fontSize: 12}}> Discover</Text>
            </View>
          </NavTitle>
          <NavButton>
            <NavButtonText>
              <Image source = {setting} style = {{width: 15, height: 15, resizeMode: 'contain'}}/>
            </NavButtonText>
          </NavButton>
        </NavBar>

          {this.renderContent()}

        <Tabbar show={true}
                disable={false}
                ref={(ref) => this.tabarRef = ref}
                style={{ backgroundColor: 'white' }}>
          {this.renderTabs()}
        </Tabbar>
      </View>
    );
  }

  _createPieChart(data, index) {
    var mx1 = 150 + 35 * Math.cos(Math.PI / 6 + Math.PI / 3 * index);
    var my1 = 150 + 35 * Math.sin(Math.PI / 6 + Math.PI / 3 * index);
    var l1 = 150 + (35 + data.radius) * Math.cos(Math.PI / 6 + Math.PI / 3 * index);
    var l2 = 150 + (35 + data.radius) * Math.sin(Math.PI / 6 + Math.PI / 3 * index);
    var mx11 = 150 + 35 * Math.cos(Math.PI / 6 + Math.PI / 3 * (index + 1));
    var my12 = 150 + 35 * Math.sin(Math.PI / 6 + Math.PI / 3 * (index + 1));
    var l11 = 150 + (35 + data.radius) * Math.cos(Math.PI / 6 + Math.PI / 3 * (index + 1));
    var l12 = 150 + (35 + data.radius) * Math.sin(Math.PI / 6 + Math.PI / 3 * (index + 1));
    var path1 = "M" + l1 + " " + l2 + " " + "L" + mx1 + " " + my1;
    var path2 = "A" + 35 + " " + 35 + " 0 0 1 " + mx11 + " " + my12;
    var path3 = "L" + l11 + " " + l12;
    var path4 = "A" + (35 + data.radius) + " " + (35 + data.radius) + " 0 0 0 " + l1 + " " + l2;
    return path1 + " " + path2 + " " + path3 + " " + path4;
  }

  _createWeeklyActivity(item) {
    var css = {};
    css['backgroundColor'] = '#82ccbe';
    css['borderRadius'] = 3;
    css['width'] = 5;
    css['height'] = item.value * 50;
    css['marginTop'] = (1 - item.value) * 50;
    return css;    
  }

  _createWeeklyPoint() {
    var css = {};
    css['backgroundColor'] = '#5e8aa3';
    css['borderRadius'] = 6;
    css['flex'] = 1298 / (1298 + 323);
    return css;    

  }

  _createWeeklyRest() {
    var css = {};
    css['flex'] = 323 / (1298 + 323);
    return css;
  }

  _createPieDetailViewCSS(item, index) {
    var css = {};
    css['width'] = 80;
    css['height'] = 80;
    css['justifyContent'] = 'center';
    css['alignItems'] = 'center';
    css['position'] = 'absolute';
    if(item.radius > 60){
      css['left'] = 150 + (item.radius + 5) * Math.cos(Math.PI / 3 + Math.PI / 3 * index) - 40;
      css['top'] = 150 + (item.radius + 5) * Math.sin(Math.PI / 3 + Math.PI / 3 * index) - 40;
    } else {
      css['left'] = 150 + 110 * Math.cos(Math.PI / 3 + Math.PI / 3 * index) - 40;
      css['top'] = 150 + 110 * Math.sin(Math.PI / 3 + Math.PI / 3 * index) - 40;
    }
    
    return css;
  }

  _createPieImage(item, index) {
    switch(index){
      case 0:
        if(item.radius > 60) return utilities;
        else return b_utilities;
      case 1:
        if(item.radius > 60) return community;
        else return b_community;
      case 2:
        if(item.radius > 60) return diet;
        else return b_diet;
      case 3:
        if(item.radius > 60) return transit;
        else return b_transit;
      case 4:
        if(item.radius > 60) return shopping;
        else return b_shopping;
      case 5:
        if(item.radius > 60) return waste;
        else return b_waste;
      default:
    }
  }

  _createPieLabelCSS(item, index) {
    var css = {};
    css['textAlign'] = 'center';
    css['fontSize'] = 10;
    if(item.radius > 60) css['color'] = 'white';
    else css['color'] = '#5e8aa3';
    css['fontWeight'] = 'bold';
    return css;
  }


}



const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#82ccbe',
  },
  navBar: {
    backgroundColor: '#82ccbe',
  },
  title: {
    color: '#fff',
  },
  titleView: {
    backgroundColor: '#00000022', 
    margin: 4, 
    height: 40, 
    width: 280, 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'row', 
    borderRadius: 5
  },
  buttonText: {
    color: '#b5b5b5',
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollViewContainer: {
    height: 1000,
  },
  scrollView: {
    backgroundColor: 'yellow'
  },
  tabView: {
    flex: 1, 
    flexDirection: 'row', 
    borderTopWidth: 1, 
    borderTopColor: 'green', 
    backgroundColor: 'white'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabSubView: {
    padding: 5, 
    alignItems: 'center'
  },
  tabImage: {
    width: 20,
    height: 20
  },
  tabText: {
    color: 'gray', 
    fontSize: 10, 
    padding: 5
  },
  profileImage: {
    resizeMode: 'stretch', 
    width: 80, 
    height: 80, 
    alignSelf: 'stretch'
  },
  percentView: {
    position: 'absolute', 
    left: 130, 
    top: 135, 
    width: 40, 
    height: 30, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  defText: {
    color: 'gray', 
    fontSize: 10,
    textAlign: 'center'
  },
  blueText: {
    color: '#5e8aa3', 
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  playButton: {
    width: 30, 
    height: 30, 
    resizeMode: 'contain'
  },
  weekView: {
    borderRadius: 4, 
    borderColor: '#5e8aa3', 
    borderWidth: 1, 
    paddingTop: 5, 
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white', 
    margin: 10
  }
})


AppRegistry.registerComponent('ChartProject', () => Chart);
