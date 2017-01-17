'use strict';

require('../node_modules/font-awesome/css/font-awesome.css')
require('./assets/libs/skeleton/skeleton.scss')
require('./assets/css/main.styl');
require('./assets/js/common.js');

require('file-loader?name=/assets/contact.cfc!./assets/classes/contact.cfc');
require('file-loader?name=/ben_pelletier_resume.pdf!./assets/ben_pelletier_resume.pdf');
