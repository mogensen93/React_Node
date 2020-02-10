import React, {Component} from 'react';
import Profile from './Profile';

export default class ProfilePage extends Component {
    render() {
        const myProfile = {name:"Rasmus", hobby:"Run"};
        const randoProfile1 = {name:"Rando1", hobby:"RandoRun"};
        const randoProfile2 = {name:"Rando2", hobby:"RandoJump"};
        
        const profiles = [myProfile, randoProfile1, randoProfile2];
        return (
           
            <div>
               <h1>The ProfilePage Component</h1> 

                {profiles.map((profile, index) => {
                    return <Profile key={'profile' + index} profileInfo={profile} />;
                })
                }
            
              
            </div>

        
        );
    }
}