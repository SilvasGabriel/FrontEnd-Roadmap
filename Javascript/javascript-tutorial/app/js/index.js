/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
import { bind } from 'bluebird';
/* your imports */

import {coroutine as co} from 'bluebird'

logTitle('Title')
/* coding examples */

async function logName(name){
    log(name)
    //we can yield promises using await
    const transformName = new Promise((resolve, reject) => {
        setTimeout( ( ) => resolve(name.toUppercase()), 7000)
    })

    const result = await transformName
    
    //return a promise
    return result
}

logName('Antonio').then( res =>{
    log('result from async function = '+res)
})