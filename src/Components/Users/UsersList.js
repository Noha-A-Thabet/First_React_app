import React from "react";
import Styles from './UsersList.module.css';
import Card from './../Ui/Card';

const UsersList = props => {
     return (
          <>
               <Card className={Styles.users}>
                    < ul className={Styles.ul} >
                         {props.users.map(
                              user => <li className={Styles.li}>{user.name}({user.age}Years Old)</li>)
                         }
                    </ul >
               </Card>
          </>

     )

}

export default UsersList;