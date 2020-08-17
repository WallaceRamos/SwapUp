import React, { useEffect, useState } from 'react';
import { withNavigation } from '@react-navigation/compat';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SolicitationList from '../pages/SolicitationList';
import SwapList from '../pages/SwapList';
import PostList from '../pages/PostList';


function topNavigator({  }) {
const Top = createMaterialTopTabNavigator();
  
  return (
<Top.Navigator>
      <Top.Screen name="Trocas" component={SwapList} />
      <Top.Screen name="Solicitações" component={SolicitationList} />
      <Top.Screen name="Anuncios" component={PostList} />
    </Top.Navigator>
   
  )

}
export default withNavigation(topNavigator);