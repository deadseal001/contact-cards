import {toggleForm, clearForm} from "./form";
import "./submit";

//import modules
import "../css/index.css";

//import bootstrap
import { Tooltip, Toast, Popover} from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

import { fetchCards } from './cards';

import { initdb, getDb, postDb, deleteDb } from './database';


window.deleteCard= (e)=>{
  let id= parseInt(e.id);
   //delete the card
   deleteDb(id);
   //reload the DOM
   fetchCards();
};

window.addEventListener('load', function () {
    initdb();
    fetchCards();
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
  });

